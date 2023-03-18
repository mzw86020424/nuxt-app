<template>
  <div>
    <div class="user-name">
      <h1>{{ user.name }}</h1>
    </div>
    <div v-if="user" class="user">
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
  </div>
</template>

<script setup>
const { query } = useRoute()

const user = ref({})
const userPosts = ref([])
const userId = query.id

onMounted(async () => {
  await fetchUser()
  await fetchUserPosts()
})

const fetchUser = async () => {
  const res = await jsonApiGet(`/users/${userId}`)
  user.value = res
}

const fetchUserPosts = async () => {
  const res = await jsonApiGet('/posts', { userId })
  userPosts.value = res
}
</script>
