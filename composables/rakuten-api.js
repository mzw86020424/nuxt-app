// https://webservice.rakuten.co.jp/documentation
const config = useRuntimeConfig()

export async function fetchHotels (params) {
  params.format = 'json'
  params.formatVersion = '2'

  return await rakutenApiGet('/Travel/KeywordHotelSearch/20170426', params)
}

function rakutenApiGet (url, params) {
  params.applicationId = config.public.rakutenAppId
  return $fetch(buildUrl(url), {
    params
  })
}

const buildUrl = (url) => {
  const baseUrl = config.public.rakutenApiBaseUrl

  return `${baseUrl}${url}`
}
