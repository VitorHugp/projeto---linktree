function toggleMode () {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  
//substituir a img
  if(html.classList.contains('light')) {
    //se tiver com light mode, add img light
    img.setAttribute('src', './img/kaneki-light.jpg')
  } else {
    //se não tiver ligth mode, manter img
    img.setAttribute('src', './img/kaneki.jpg')
  }

}
