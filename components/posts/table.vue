<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>
            <a @click="onClickId(post.id)">
              {{ post.id }}
            </a>
          </td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  posts: { default: [] }
})

const { push } = useRouter()

const onClickId = (id) => {
  push(`/post/show?id=${id}`)
}
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #4CAF50;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #4CAF50;
  }
</style>