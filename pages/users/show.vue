<template>
  <div class="user-name">
    <h1>{{ user.name }}</h1>
  </div>
  <div class="user" v-if="user">
    <div class="user-info">
      <div class="user-address">
        <h2>Address</h2>
        <p>{{ user.address?.street }}</p>
        <p>{{ user.address?.suite }}</p>
        <p>{{ user.address?.city }}, {{ user.address?.zipcode }}</p>
        <p>Lat: {{ user.address?.geo.lat }}, Lng: {{ user.address?.geo.lng }}</p>
      </div>
      <div class="user-contact">
        <h2>Contact</h2>
        <p>{{ user.email }}</p>
        <p>{{ user.phone }}</p>
        <p>{{ user.website }}</p>
      </div>
      <div class="user-company">
        <h2>Company</h2>
        <p>{{ user.company?.name }}</p>
        <p>{{ user.company?.catchPhrase }}</p>
        <p>{{ user.company?.bs }}</p>
      </div>
    </div>
  </div>
  <div>
    <h2>{{ user.name }}'s posts</h2>
    <posts-table
      :posts="userPosts"
    />
  </div>
</template>

<script setup>
const { query } = useRoute()

const user = ref({})
const userPosts = ref([])
const userId = query.id

onMounted(async() => {
  await fetchUser();
  await fetchUserPosts();
});

const fetchUser = async () => {
  const res = await apiGet(`/users/${userId}`);
  user.value = res;
};

const fetchUserPosts = async () => {
  const res = await apiGet('/posts', {userId: userId});
  userPosts.value = res;
};
</script>

<style lang="scss" scoped>
.user {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 20px;
}

.user-name {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: white;
}
.user h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.user-info {
  display: flex;
  flex-wrap: wrap;
}

.user-address,
.user-contact,
.user-company {
  flex-basis: 33.33%;
  margin-bottom: 20px;
}

.user-info h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.user-info p {
  margin-bottom: 5px;
}
</style>