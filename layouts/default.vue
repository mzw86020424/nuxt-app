<template>
  <div>
    <header>
    <div class="logo">My App</div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/users">users</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts">posts</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
  <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  header {
      background-color: #4CAF50;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    ul {
      display: flex;
      gap: 1rem;
      padding: 1rem;
    }

    li {
      list-style: none;
    }

    a {
      color: #fff;
      text-decoration: none;
    }

</style>