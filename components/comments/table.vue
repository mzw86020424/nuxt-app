<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comment in comments" :key="comment.id">
            <td>{{ comment.name }}</td>
            <td>{{ comment.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  defineProps({
    comments: { default: [] }
  })
  

  </script>