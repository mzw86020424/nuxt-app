<template>
  <div>
    <div class="post-info">
      <h1 class="title">
        {{ user.name }}
      </h1>
      <h4 class="title">
        {{ post.title }}
      </h4>
      <p class="body">
        {{ post.body }}
      </p>
    </div>
    {{ rakutenItems }}
    <h3>
      comments:
    </h3>
    <comments-table
      :comments="comments"
    />
  </div>
</template>

<script setup>
const { query } = useRoute()

const post = ref({})
const user = ref({})
const comments = ref([])
const rakutenItems = ref({})

onMounted(async () => {
  await fetchPost()
  await fetchUser()
  await fetchComments()
  await fetchRatekunItems()
})

const fetchPost = async () => {
  const res = await jsonApiGet(`/posts/${query.id}`)
  post.value = res
}

const fetchUser = async () => {
  const res = await jsonApiGet(`/users/${post.value.userId}`)
  user.value = res
}

const fetchComments = async () => {
  const res = await jsonApiGet(`/posts/${query.id}/comments`)
  comments.value = res
}

const fetchRatekunItems = async () => {
  const res = await rakutenApiGet('/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086&applicationId=e06e2a5afcf14b52139c1fb6c58e9dbc')
  rakutenItems.value = res
}
</script>

<style lang="scss" scoped>
.post-info {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.title {
  font-size: 20px;
  margin-bottom: 10px;
}

.body {
  font-size: 16px;
  line-height: 1.5;
}
</style>
