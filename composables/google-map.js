// https://developers.google.com/maps/documentation/javascript/overview?hl=ja#javascript
export const loader = new Loader({
  apiKey: 'YOUR_API_KEY',
  version: 'weekly'
  // ...additionalOptions,
})

export function loadGoogleMap () {
  loader.load().then(() => {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    })
  })
}
