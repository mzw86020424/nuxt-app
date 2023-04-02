<template>
  <div>
    <form @submit.prevent="console()">
      <div>
        <label for="name"> ホテル検索 </label>
        <input v-model="text" type="text">
        <button
          type="submit"
        >
          検索
        </button>
      </div>
    </form>
    encoded: {{ encoded }}
    decoded: {{ decoded }}
  </div>
</template>

<script setup>
const text = ref('')
const encoded = ref('')
const decoded = ref('')

const console = () => {
  encoded.value = utf8Encode(text)
  decoded.value = decodeURIComponent(encoded.value)
}
</script>
