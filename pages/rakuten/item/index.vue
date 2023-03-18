<template>
  <div class="container">
    <h1 class="heading">
      商品一覧
    </h1>
    <ul class="list">
      <li v-for="(v, index) in rakutenItems" :key="index" class="item">
        <h2 class="item__title">
          {{ v.Item.itemName }}
        </h2>
        <p class="item__code">
          商品番号: {{ v.Item.itemCode }}
        </p>
        <p class="item__price">
          価格: {{ v.Item.itemPrice }}円
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const rakutenItems = ref({})
const rakutenAreaCodes = ref({})
const params = ref({})

onMounted(async () => {
  await fetchRatekunItems()
  await fetchRatekunAreaCodes()
})

const fetchRatekunItems = async () => {
  const res = await rakutenApiGet('/IchibaItem/Search/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086', params)
  rakutenItems.value = res.Items
}

const fetchRatekunAreaCodes = async () => {
  const res = await rakutenApiGet('/Travel/GetAreaClass/20131024?format=json', params)
  rakutenAreaCodes.value = res.Items
}
</script>
