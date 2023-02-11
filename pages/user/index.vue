<template>
  <div>
    {{ users }}
    <button @click="fetchUsers">fetch</button>
  </div>
</template>

<script setup>
const users = ref([])

onMounted(async() => {
  fetchUsers()
})


const fetchUsers = async () => {
  const res = await apiGet('/users');
  users.value = res;
};

</script>

<style lang="scss" scoped>

</style>