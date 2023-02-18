<template>
  <div class="user-details">
    <h1 class="user-details__name">{{ user.name }}</h1>
    <p class="user-details__username">@{{ user.username }}</p>
    <p class="user-details__email">{{ user.email }}</p>
    <p class="user-details__phone">{{ user.phone }}</p>
    <p class="user-details__website"><a :href="'http://' + user.website">{{ user.website }}</a></p>
    <div class="user-details__address">
      <h2>Address:</h2>
      <p>{{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
      <p class="user-details__location">Lat: {{ user.address.geo.lat }}, Lng: {{ user.address.geo.lng }}</p>
    </div>
    <div class="user-details__company">
      <h2>Company:</h2>
      <p>{{ user.company.name }}</p>
      <p>{{ user.company.catchPhrase }}</p>
      <p>{{ user.company.bs }}</p>
    </div>
  </div>
</template>

<script setup>
const { query } = useRoute()

const user = ref({})

onMounted(() => {
  fetchUser();
});

const fetchUser = async () => {
  const res = await apiGet('/users', query);
  user.value = res[0];
};
</script>

<style lang="scss" scoped>
.user-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  &__name {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  &__username {
    font-size: 1.5rem;
    color: gray;
    margin-bottom: 20px;
  }

  &__email,
  &__phone,
  &__website {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  &__website a {
    color: blue;
  }

  &__address,
  &__company {
    margin-top: 30px;
  }

  &__address h2,
  &__company h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  &__location {
    margin-top: 5px;
    font-size: 1.1rem;
    color: gray;
  }
}
</style>