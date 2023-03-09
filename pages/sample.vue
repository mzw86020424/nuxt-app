<!-- https://reffect.co.jp/vue/vulidate-2 -->
<template>
  <div>
    <div>
      <h1>入力フォームバリデーション</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name"> 名前 </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="名前"
          >
        </div>
        <div>
          <label for="name"> 地域 </label>
          <select v-model="formData.area">
            <option>北海道</option>
            <option>沖縄</option>
            <option>東京</option>
          </select>
        </div>
        <div>
          <label for="age">年齢 </label>
          <input
            id="age"
            v-model="formData.age"
            type="age"
            placeholder="年齢"
          >
        </div>
        <div>
          <label for="email">
            メールアドレス
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="メールアドレス"
          >
        </div>
        <div>
          <button
            type="submit"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const formData = reactive({
  name: '',
  age: '',
  email: '',
  area: ''
})

const submitForm = () => {
  console.log('submit', formData)
}

</script>

<style lang="scss" scoped>

</style>
