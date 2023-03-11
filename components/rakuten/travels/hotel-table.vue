<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>image</th>
          <th>hotelName</th>
          <th>hotelKanaName</th>
          <th>hotelSpecial</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hotels" :key="hotel.id">
          <td>
            <img :src="hotel.hotel[0].hotelBasicInfo.hotelImageUrl" style="width: 200px;" alt="">
          </td>
          <td>{{ hotel.hotel[0].hotelBasicInfo.hotelName }}</td>
          <td>{{ hotel.hotel[0].hotelBasicInfo.hotelKanaName }}</td>
          <td>{{ hotel.hotel[0].hotelBasicInfo.hotelSpecial }}</td>
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