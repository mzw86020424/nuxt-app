<template>
  <div>
    <!-- {{ pagingInfo }}
    <div>
      <h3>{{pagingInfo.recordCount}}件</h3>
      <div style="flex: auto;">
        <nuxt-link> ＜ </nuxt-link>
        <h3>{{pagingInfo.page}}ページ</h3>
        <nuxt-link> ＞ </nuxt-link>
      </div>
    </div> -->
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
defineProps({
  hotels: { default: [] },
  // pagingInfo: { default: {} }
})

</script>

<style lang="scss" scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #4CAF50;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #4CAF50;
  }
</style>