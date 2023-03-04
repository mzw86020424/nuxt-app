<template>
  <div>
    <div>
      <form @submit.prevent="onSubmitId()">
        <div>
          <input v-model="id">
        </div>
        <div>
          <button type="submit" class="search-button">
            id検索
          </button>
        </div>
      </form>
      <form @submit.prevent="onSubmitUserId()">
        <div>
          <input v-model="userId">
        </div>
        <div>
          <button type="submit" class="search-button">
            userId検索
          </button>
        </div>
      </form>
    </div>
    <div>
      <posts-table
        :posts="posts"
      />
    </div>
  </div>
</template>

<script setup>
const posts = ref([])
const id = ref(null)
const userId = ref(null)

onMounted(() => {
  fetchPosts()
})

const fetchPosts = async (params = '') => {
  const res = await jsonApiGet('/posts', params)
  posts.value = res
}

const onSubmitId = () => {
  const param = id.value === '' ? null : { id: id.value }
  fetchPosts(param)
}

const onSubmitUserId = () => {
  const param = userId.value === '' ? null : { userId: userId.value }
  fetchPosts(param)
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
