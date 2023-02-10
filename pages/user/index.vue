<template>
  <div>
    {{ users }}
  </div>
</template>

<script setup>
const users = ref([])

onMounted(async() => {
  users.value = await useFetch('https://jsonplaceholder.typicode.com/users')
})

</script>

<style lang="scss" scoped>

</style>