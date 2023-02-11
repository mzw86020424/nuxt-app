<template>
  <div>
    <form @submit.prevent="fetchUsers">
      <div>
        <input v-model="params" />
      </div>
      <div>
        <button type="submit" class="search-button">id検索</button>
      </div>
    </form>
  </div>
  <div>
    <user-table
      :users="users"
    />
  </div>
</template>

<script setup>
const users = ref([])
const params = ref({})

onMounted(() => {
  fetchUsers()
})

const fetchUsers = async () => {
  const res = await apiGet('/users', {id: params.value});
  users.value = res;
};

</script>

<style lang="scss" scoped>
.search-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
}
</style>