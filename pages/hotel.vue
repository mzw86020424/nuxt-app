<template>
  <div class="hotel-info">
    <h1 class="hotel-name">{{ hotelInfo.hotelName }}</h1>
    <p class="hotel-address">{{ hotelInfo.address1 }} {{ hotelInfo.address2 }}</p>
    <div class="hotel-image">
      <img :src="hotelInfo.hotelImageUrl" alt="hotel image" />
    </div>
    <p class="hotel-special">{{ hotelInfo.hotelSpecial }}</p>
    <div class="hotel-details">
      <div class="detail">
        <span class="label">チェックイン</span>
        <span class="value">15:00</span>
      </div>
      <div class="detail">
        <span class="label">チェックアウト</span>
        <span class="value">11:00</span>
      </div>
      <div class="detail">
        <span class="label">最低価格</span>
        <span class="value">{{ hotelInfo.hotelMinCharge }}円</span>
      </div>
      <div class="detail">
        <span class="label">口コミ評価</span>
        <span class="value">{{ hotelInfo.reviewAverage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const hotelInfo = ref({})

onMounted(async () => {
  const res = await fetchHotelById(route.query.id)
  hotelInfo.value = res.hotels[0][0].hotelBasicInfo
})

</script>

<style lang="scss" scoped>
.hotel-info {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  .hotel-name {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hotel-address {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  .hotel-image {
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
  }

  .hotel-special {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .hotel-details {
    display: flex;
    justify-content: space-between;

    .detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;

      .label {
        margin-bottom: 5px;
      }

      .value {
        font-size: 18px;
      }
    }
  }
}
</style>
