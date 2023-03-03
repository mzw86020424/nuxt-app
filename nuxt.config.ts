// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      jsonApiBaseUrl: 'https://jsonplaceholder.typicode.com',
      rakutenApiBaseUrl: 'https://app.rakuten.co.jp/services/api',
      rakutenAppId: '1090813945931630353'
    }
  }
})
