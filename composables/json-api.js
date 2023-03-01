export function jsonApiGet (url, params) {
  // const route = useRoute()
  return $fetch(buildUrl(url), {
    // credentials: "include",
    // https://qiita.com/kawaz/items/1e51c374b7a13c21b7e2
    // headers: { "X-CALLER-URL": route.fullPath },
    params
  })
}

// export function apiPost(url, body) {
//     const headers = buildHeaders();
//     return $fetch(buildUrl(url), {
//         method: "POST",
//         credentials: "include",
//         headers,
//         body,
//     });
// }

const buildUrl = (url) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.jsonApiBaseUrl

  return `${baseUrl}${url}`
}

// const buildHeaders = () => {
//     const token = useCookie("CSRF-TOKEN");
//     const route = useRoute();
//     return {
//         "X-CALLER-URL": route.fullPath,
//         "X-CSRF-Token": token.value,
//     };
// }
