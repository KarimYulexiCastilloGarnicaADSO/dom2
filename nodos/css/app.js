import { datos } from "./datos.js";
//Identificamos el elemento por clase
const $padre = document.querySelector('.container')
console.log($padre)
//Creamos un elemento
const nodo = document.createElement('p')
const texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione possimus omnis vel nihil dolor aut vero magnam neque et modi"
nodo.innerText = texto
const nodo2 = document.createElement('p')
const texto2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, temporibus vel! Dolore, impedit quaerat?"
nodo2.innerText = texto2
$padre.appendChild(nodo)
$padre.appendChild(nodo2)


const $lista = document.querySelector('div.container > div.card > ul.list ')
console.log($lista)

// let li = document.querySelector('div.container > div.card > ul.list ')


datos.map(a => {
  const primero = document.createElement('li')
  console.log(a.nombre)
  primero.innerHTML = a.nombre
  primero.classList.add('item')
  $lista.appendChild(primero)
})

// const papa = document.querySelector('.list')

// const primero = document.createElement('li')
// const segundo = document.createElement('li')
// const tercero = document.createElement('li')
// const texto1 = "Html"
// const texto4 = "Css"
// const texto3 = "JavaScript"

// primero.innerHTML = texto1
// papa.appendChild(primero)
// segundo.innerHTML = texto4
// papa.appendChild(segundo)
// tercero.innerHTML = texto3
// papa.appendChild(tercero)