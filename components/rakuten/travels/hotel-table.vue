<template>
  <div>
    <div>
      <h3>{{ pagingInfo.recordCount }}件</h3>
      <div style="flex: auto;">
        <button v-if="!isFirstPage" @click="emits('prev')"> ＜ </button>
        <h3>{{ pagingInfo.page }}ページ</h3>
        <button v-if="!isLastPage" @click="emits('next')"> ＞ </button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>画像</th>
          <th>ホテル名</th>
          <th>コメント</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hotels" :key="hotel.id">
          <td>
            <img :src="hotel.hotel[0].hotelBasicInfo.hotelThumbnailUrl" style="width: 100px;" alt="">
          </td>
          <td>
            <nuxt-link :to="hotel.hotel[0].hotelBasicInfo.hotelInformationUrl" target="_blank">
              <p style="font-size: x-small;">
                {{ hotel.hotel[0].hotelBasicInfo.hotelKanaName }}
              </p>
              <p style="font-size: small;">
                {{ hotel.hotel[0].hotelBasicInfo.hotelName }}
              </p>
            </nuxt-link>
          </td>
          <td>
            <p style="font-size: x-small;">
              {{ hotel.hotel[0].hotelBasicInfo.hotelSpecial }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  hotels: { default: [] },
  pagingInfo: { default: {} }
})

const emits = defineEmits([
  'prev',
  'next'
])

const isFirstPage = computed(() => {
  return props.pagingInfo.page === 1
})

const isLastPage = computed(() => {
  return props.pagingInfo.page === props.pagingInfo.pageCount
})
</script>