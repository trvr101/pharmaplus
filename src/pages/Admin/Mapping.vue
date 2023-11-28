<template>
  <div>
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
      const map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [121.4069, 13.0565], // Calapan coordinates
          zoom: 10,
        }),
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
