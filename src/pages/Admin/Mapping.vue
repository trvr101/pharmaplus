<template>
  <div>
    <h1>Mapping</h1>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "Mapping",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // Replace 'yourMapId' with a valid map provider ID (e.g., 'mapbox/streets-v11')
      this.map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(this.map);

      // Add a marker to the map
      L.marker([51.505, -0.09]).addTo(this.map).bindPopup("A sample marker!");
    },
  },
};
</script>

<style scoped>
#map {
  height: 400px;
}
</style>
