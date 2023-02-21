<template>
  <div>
    <h1>テスト用ページ</h1>
    <div id="map"></div>
  </div>
</template>

<script setup>
const map = ref(null)

loader.load().then(() => {
  map.value = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

</script>

<style lang="scss" scoped>

</style>