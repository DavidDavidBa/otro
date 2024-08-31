const formBusqueda = document.querySelector('#form-busqueda')
const cajaBusqueda = document.querySelector('#caja-busqueda')
const resultadoBusqueda = document.querySelector('#resultado-busqueda')
const mostrarMas = document.querySelector('#mostrar-mas')
const novedades = document.querySelector('#novedades')

let keyword = ''
let page = 1
const accessKey = 'jBpVfbQDxL3ThJjgQVrTatT12mowFslRWTMWWeYoFp8'

async function buscarImagenes() {
  keyword = cajaBusqueda.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

  const response = await fetch(url)
  const data = await response.json()

  if (page === 1) {
    resultadoBusqueda.innerHTML = ''
  }

  const resultados = data.results

  resultados.map((result) => {
    const imagen = document.createElement('img')
    imagen.src = result.urls.small
    const imagenLink = document.createElement('a')
    imagenLink.href = result.links.html
    imagenLink.target = '_blank'

    imagenLink.appendChild(imagen)

    resultadoBusqueda.appendChild(imagenLink)
  })

  mostrarMas.style.display = 'block'
}

formBusqueda.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  buscarImagenes()
})

mostrarMas.addEventListener('click', () => {
  page++
  buscarImagenes()
})

novedades.addEventListener('click', () => {
  window.open('https://unsplash.com/es/s/fotos/google-trends')
})

var diabtn = document.getElementById('diabtn')
var colors = ['white', 'black']
diabtn.addEventListener('click', function (e) {
  e.preventDefault()
  var i = Math.floor(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[i]
})

var elem = document.querySelector('.contenedorimagen')
var msnry = new Masonry(elem, {
  itemSelector: '.imagenimg',
  columnWidth: 230,
  gutter: 20,
  isFitWidth: true
})
