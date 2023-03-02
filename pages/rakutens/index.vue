<template>
  <div>
    <h1>商品一覧</h1>

    <ul>
      <li v-for="(v, index) in rakutenItems" :key="index">
        <h2>{{ v.Item.itemName }}</h2>
        <p>商品番号: {{ v.Item.itemCode }}</p>
        <p>価格: {{ v.Item.itemPrice }}円</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const rakutenItems = ref({})

onMounted(async () => {
  await fetchRatekunItems()
})

const fetchRatekunItems = async () => {
  const res = await rakutenApiGet('/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086&applicationId=1090813945931630353')
  rakutenItems.value = res.Items
}
</script>

<style lang="scss" scoped>
div {
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;

      h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      p {
        margin: 0;
        font-size: 1rem;
        color: #555;

        & + p {
          margin-top: 0.5rem;
        }
      }
    }
  }
}
</style>
