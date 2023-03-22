<template>
  <div>
    {{ hotel }}
  </div>
</template>

<script setup>
const route = useRoute()
const hotel = ref({})

onMounted(async () => {
  hotel.value = await fetchHotelById(route.query.id)
})

</script>

<style lang="scss" scoped>

</style>
