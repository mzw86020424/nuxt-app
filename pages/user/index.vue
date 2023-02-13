<template>
  <div>
    <form @submit.prevent="onSubmitId()">
      <div>
        <input v-model="id" />
      </div>
      <div>
        <button type="submit" class="search-button">id検索</button>
      </div>
    </form>
    <form @submit.prevent="onSubmitName()">
      <div>
        <input v-model="name" />
      </div>
      <div>
        <button type="submit" class="search-button">name検索</button>
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
const id = ref(null)
const name = ref(null)

onMounted(() => {
  fetchUsers()
})

const fetchUsers = async (params="") => {
  const res = await apiGet('/users', params);
  users.value = res;
};

const onSubmitId = () => {
  const param = id.value == "" ? null : {id: id.value};
  fetchUsers(param)
}

const onSubmitName = () => {
  const param = name.value == "" ? null : {name: name.value};
  fetchUsers(param)
}

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