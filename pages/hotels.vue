<template>
  <div>
    <div>
      <form @submit.prevent="addQueryParams()">
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
const router = useRouter()

const formData = reactive({
  keyword: ''
})
const hotels = ref([])
const pagingInfo = ref({})
const page = ref(1)
const hits = ref(10)
const params = ref({})

const addQueryParams = () => {
  params.value = {
    keyword: utf8Encode(formData.keyword),
    page: page.value,
    hits: hits.value,
    format: 'json',
    formatVersion: '2'
  }

  router.push({
    path: '/hotels',
    query: params.value
  })
}

onBeforeRouteUpdate((_to, _from) => {
  searchHotels()
})

const searchHotels = async () => {
  const res = await fetchHotels(params.value)
  hotels.value = res.hotels
  pagingInfo.value = res.pagingInfo
}

const onClickPrev = () => {
  page.value -= 1
  addQueryParams()
}

const onClickNext = () => {
  page.value += 1
  addQueryParams()
}
</script>
