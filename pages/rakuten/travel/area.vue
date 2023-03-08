<template>
  <div>
    area
  </div>
</template>

<script setup>
const rakutenAreaCodes = ref({})
const params = ref({})

onMounted(async () => {
  await fetchRatekunAreaCodes()
})

const fetchRatekunAreaCodes = async () => {
  const res = await rakutenApiGet('/Travel/GetAreaClass/20131024?format=json', params)
  rakutenAreaCodes.value = res.Items
}
</script>

<style lang="scss" scoped>

</style>
