<template>
  <div>
    <q-card style="height: 400px; overflow: hidden" class="my-card">
      <div id="map" style="height: 100%"></div>
    </q-card>
  </div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default {
  mounted() {
    // Initialize the map
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [121.182, 13.4105],
        zoom: 13,
      }),
    });
  },
};
</script>

<style>
/* Add any additional styles here */
</style>
