<template>
  <div>
    <div>
      query: {{ queryString }}
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
      <hotels-table
        :hotels="hotels"
        :paging-info="pagingInfo"
        @prev="onClickPrev"
        @next="onClickNext"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeRouteUpdate } from 'vue-router'

const formData = reactive({
  keyword: ''
})
const hotels = ref([])
const pagingInfo = ref({})
const page = ref(1)
const hits = ref(10)
const queryString = ref('')

const searchHotels = async () => {
  const params = {
    keyword: utf8Encode(formData.keyword),
    page: page.value,
    hits: hits.value,
    format: 'json',
    formatVersion: '2'
  }

  queryString.value = createQueryString(params)

  const res = await fetchHotels(params)
  hotels.value = res.hotels
  pagingInfo.value = res.pagingInfo
}

// onBeforeRouteUpdate((to, from) => {
//   console.log(to)
//   console.log(from)
// })

const onClickPrev = () => {
  page.value -= 1
  searchHotels()
}

const onClickNext = () => {
  page.value += 1
  searchHotels()
}
</script>
