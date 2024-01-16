const input = document.querySelector('input[name]')
const apiKey = 'AIzaSyBUYZdUW5wM6KfJOnn9K-TK7pDhJOY4Igc'
const app = document.getElementById('#app')
let filter = $('select[name="sort"] option').eq(0).val()
const fonts = []

async function loadFonts() {
  fonts.length = 0
  $('#app').empty()
  console.log(fonts)
  const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${filter}&key=${apiKey}`)

  const data = await response.json()

  if (data) {
    fonts.push(...data.items)
    fonts.forEach(font => {
      $('#app').append(`<div style="font-size: 2rem;line-height:120%;">${font.family}</div>`)
    })
  }
}

loadFonts()

$('select[name="sort"]').change((e) => {
  filter = e.target.value
  loadFonts()
})