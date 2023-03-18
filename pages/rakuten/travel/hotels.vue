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
      <rakuten-travels-hotel-table
        :hotels="hotels"
        :paging-info="pagingInfo"
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

const onClickPrev = () => {
  page.value -= 1
  searchHotels()
}

const onClickNext = () => {
  page.value += 1
  searchHotels()
}
</script>
