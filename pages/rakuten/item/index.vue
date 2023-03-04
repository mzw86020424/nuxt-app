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

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.heading {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
}

.item__title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.item__code,
.item__price {
  margin: 0;
  font-size: 1rem;
  color: #555;
}

.item__price + .item__price {
  margin-top: 0.5rem;
}
</style>
