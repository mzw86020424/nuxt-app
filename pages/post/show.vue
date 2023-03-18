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

onMounted(async () => {
  await fetchPost()
  await fetchUser()
  await fetchComments()
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

</script>
