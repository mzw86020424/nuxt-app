// https://webservice.rakuten.co.jp/documentation
export function rakutenApiGet (url, params) {
  const config = useRuntimeConfig()
  params.applicationId = config.public.rakutenAppId
  return $fetch(buildUrl(url), {
    params
  })
}

const buildUrl = (url) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.rakutenApiBaseUrl

  return `${baseUrl}${url}`
}
