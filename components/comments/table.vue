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