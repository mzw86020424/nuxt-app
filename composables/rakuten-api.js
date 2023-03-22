// https://webservice.rakuten.co.jp/documentation
export async function fetchHotels (params) {
  params.format = 'json'
  params.formatVersion = '2'

  return await rakutenApiGet('/Travel/KeywordHotelSearch/20170426', params)
}

export async function fetchHotelById (id) {
  const params = {}
  params.hotelNo = id
  params.format = 'json'
  params.formatVersion = '2'

  return await rakutenApiGet('/Travel/SimpleHotelSearch/20170426', params)
}

function rakutenApiGet (url, params) {
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
