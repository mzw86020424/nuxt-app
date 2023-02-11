<template>
  <div>
    <user-table
    :users="users"
    ></user-table>
  </div>
</template>

<script setup>
const users = ref([])

onMounted(() => {
  fetchUsers()
})

const fetchUsers = async () => {
  const res = await apiGet('/users');
  users.value = res;
};

</script>