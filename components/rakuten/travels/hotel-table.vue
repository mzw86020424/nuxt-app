<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>image</th>
          <th>hotelName</th>
          <th>hotelSpecial</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hotels" :key="hotel.id">
          <td>
            <img :src="hotel.hotel[0].hotelBasicInfo.hotelThumbnailUrl" style="width: 100px;" alt="">
          </td>
          <td>
            <a :href="hotel.hotel[0].hotelBasicInfo.hotelInformationUrl" target="_blank">
              <p style="font-size: x-small;">
                {{ hotel.hotel[0].hotelBasicInfo.hotelKanaName }}
              </p>
              <p style="font-size: small;">
                {{ hotel.hotel[0].hotelBasicInfo.hotelName }}
              </p>
            </a>
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
  hotels: { default: [] }
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