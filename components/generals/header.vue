<template>
  <div>
    <header>
      <div class="logo">
        rakuten
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/user">
              user
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/post">
              post
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/rakuten/item">
              rakuten items
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/rakuten/travel/hotels">
              rakuten hotels
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
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
