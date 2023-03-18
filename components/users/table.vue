<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <a @click="onClickId(user.id)">
              {{ user.id }}
            </a>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.address.city }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  users: { default: [] }
})

const { push } = useRouter()

const onClickId = (id) => {
  push(`/users/show?id=${id}`)
}
</script>