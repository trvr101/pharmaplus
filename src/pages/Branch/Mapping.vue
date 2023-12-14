<template>
  <div class="no-scroll hide-scrollbar overflow-hidden-y">
    <div id="map" style="height: 94dvh; width: 96.3dvw"></div>
  </div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // Check if map state is stored in local storage
      const storedMapState = localStorage.getItem("mapState");
      let initialCenter = [121.4069, 13.0565];
      let initialZoom = 10;

      if (storedMapState) {
        const { center, zoom } = JSON.parse(storedMapState);
        initialCenter = center;
        initialZoom = zoom;
      }

      const map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: initialCenter,
          zoom: initialZoom,
        }),
      });

      // Save the map state to local storage on view change
      map.getView().on("change:center", () => {
        const center = map.getView().getCenter();
        const zoom = map.getView().getZoom();
        localStorage.setItem("mapState", JSON.stringify({ center, zoom }));
      });

      // You can add more features or customize the map as needed
    },
  },
};
</script>

<style>
#map {
  height: 400px;
}
</style>
