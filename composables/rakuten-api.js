// https://webservice.rakuten.co.jp/documentation
export function rakutenApiGet (url, params) {
  return $fetch(buildUrl(url), {
    params
  })
}

const buildUrl = (url) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.rakutenApiBaseUrl

  return `${baseUrl}${url}`
}
