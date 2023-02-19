<template>
  <div class="post-info">
    <h2 class="title">{{ post.title }}</h2>
    <p class="body">{{ post.body }}</p>
  </div>
</template>

<script setup>
const { query } = useRoute()

const post = ref([])

onMounted(async() => {
  await fetchPost();
});

const fetchPost = async () => {
  const res = await apiGet(`/posts/${query.id}`);
  post.value = res;
};
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
  font-size: 24px;
  margin-bottom: 10px;
}

.body {
  font-size: 16px;
  line-height: 1.5;
}
</style>