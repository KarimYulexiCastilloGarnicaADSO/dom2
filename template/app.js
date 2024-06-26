import { comentarios } from "./modulo.js";

const root = document.querySelector('#root')
const fragament = document.createDocumentFragment()
const plantilla = document.querySelector('#plantilla').content;
const section = document.createElement('section')
section.classList.add('cards')

console.log(plantilla)
// console.log(root)

comentarios().then((lista) => {
  console.log(lista)

  lista.forEach(comentario => {
    plantilla.querySelector('div > h2').textContent = `${comentario.id} - ${comentario.name}`
    plantilla.querySelector('div > div > p').textContent = comentario.email
    plantilla.querySelector('div > div > p ~ p').textContent = comentario.body

    plantilla.querySelector('div').classList.add('card')

    // plantilla.querySelector()


    const clone = document.importNode(plantilla, true)
    fragament.appendChild(clone)
  });
  section.appendChild(fragament)
  root.appendChild(section)
})