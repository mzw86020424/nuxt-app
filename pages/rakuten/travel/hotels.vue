<template>
  <div>
    <div>
      <form @submit.prevent="searchHotels">
        <div>
          <label for="name"> ホテル検索 </label>
          <input v-model="formData.keyword" type="text">
          <button
            type="submit"
          >
            検索
          </button>
        </div>
      </form>
    </div>
    <div>
      {{ pagingInfo }}
      <div>
        <h3>{{ pagingInfo.recordCount }}件</h3>
        <div style="flex: auto;">
          <a @click="toPrevPage"> ＜ </a>
          <h3>{{ pagingInfo.page }}ページ</h3>
          <a @click="toNextPage"> ＞ </a>
        </div>
      </div>
      <rakuten-travels-hotel-table
        :hotels="hotels"
        @prev="onClickPrev"
        @next="onClickNext"
      />
    </div>
  </div>
</template>

<script setup>

const formData = reactive({
  keyword: ''
})
const hotels = ref([])
const pagingInfo = ref({})
const page = ref(1)
const hits = ref(10)

const searchHotels = async () => {
  const params = {
    keyword: utf8Encode(formData.keyword),
    page: page.value,
    hits: hits.value
  }
  const res = await rakutenApiGet('/Travel/KeywordHotelSearch/20170426?format=json', params)
  hotels.value = res.hotels
  pagingInfo.value = res.pagingInfo
}

const onClickPrev = computed(() => {
  page.value -= 1
  searchHotels()
})

const onClickNext = computed(() => {
  page.value += 1
  searchHotels()
})
</script>

<style lang="scss" scoped>

</style>
