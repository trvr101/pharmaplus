<template>
  <div class="no-scroll hide-scrollbar overflow-hidden-y">
    <div id="map" style="height: 94dvh; width: 96.3dvw"></div>
    <div id="popup" class="ol-popup">
      <div id="popup-content"></div>
    </div>
  </div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import Overlay from "ol/Overlay";

export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([121.4069, 13.0565]),
          zoom: 10,
        }),
      });

      // Add a marker at the specified location
      const marker = new Feature({
        geometry: new Point(fromLonLat([121.178, 13.3761])),
      });

      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [marker],
        }),
      });

      map.addLayer(vectorLayer);

      // Create an overlay to show information on hover
      const popup = new Overlay({
        element: document.getElementById("popup"),
        positioning: "bottom-center",
        stopEvent: false,
        offset: [0, -50],
      });
      map.addOverlay(popup);

      // Show information on hover
      map.on("pointermove", (event) => {
        const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => {
          return feature;
        });

        if (feature) {
          const coordinates = feature.getGeometry().getCoordinates();
          popup.setPosition(coordinates);
          document.getElementById("popup-content").innerHTML =
            "Provincial Hospital";
        } else {
          popup.setPosition(undefined);
        }
      });
    },
  },
};
</script>

<style>
#map {
  height: 400px;
}

.ol-popup {
  display: none;
  position: absolute;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.ol-popup:after,
.ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 50%;
  margin-left: -10px;
}

.ol-popup:before {
  border-top-color: white;
  border-width: 11px;
  left: 50%;
  margin-left: -11px;
}
</style>
