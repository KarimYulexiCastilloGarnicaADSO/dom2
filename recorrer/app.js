let win = window;
let dom = document;
let body = dom.body;
let forms= dom.forms
//Nuevas
let divs = dom.querySelectorAll('div')
let div = dom.querySelector('div')
let porIdNuevo = dom.querySelector('#documento')
let porClase = dom.querySelector('.container')
let porClasenuevo = dom.querySelectorAll('.container')
let porId = dom.getElementById('documento')

let atributo = dom.getElementsByTagName('input')
let lista = dom.getElementsByTagName('li')
let liitem = dom.querySelector('ul.list > li.item')

// pasar a mayuscula
const api = dom.getElementById('api');
api.innerHTML = "QUE ES API"


console.log(win)
console.log(dom)
console.log(dom.title)
console.log(dom.doctype)
console.log(dom.head)
console.log(body)
console.log(body.children)
console.log(body.children[1])
console.log(divs)
console.log(div)
console.log('formularios',forms)
console.log('link',dom.links)
console.log('img',dom.images)
console.log('por id',porId)
console.log('por id nuevo',porIdNuevo)
console.log('por clase',porClase)
console.log('por clase nuevo',porClasenuevo)
console.log('por atributo',atributo)
console.log('por tag name', lista)
console.log('por query', liitem)
console.clear()


const listaA = [...body.children]
console.log(listaA)

listaA.map((x) =>{
    console.log(x)
})

console.log(api)
console.clear
console.log(body.childNodes)
console.clear()

//Ejercicio

// const padre2 = dom.getElementById("cards")
// console.log(padre2.children)

// const nuevo = [...padre2.children]
// nuevo.map( (a, i) => {
//   if (i % 2 != 0) {
//     console.log(a)
//     a.classList.toggle('bg-white')
//   }
// })

const formulario = dom.getElementById('search');
const $input = dom.querySelector('.search__form > .input')
$input.setAttribute("autocomplete", "off")
$input.removeAttribute("placeholder")
$input.setAttribute("placeholder", "ola")
console.log($input)
formulario.setAttribute("enctype", "on")
formulario.setAttribute("enctype", "multipart/form-data")

//Custom properties CSS
const $html = dom.documentElement
// console.log($html)
const Mine_Shaft = getComputedStyle($html).getPropertyValue('--Mine_Shaft')
const blanco = getComputedStyle($html).getPropertyValue('--blanco')
// console.log(Mine_Shaft, blanco)
$html.style.setProperty('--Mine_Shaft', 'fff')
$html.style.setProperty('--blanco', '000')

const $parrafo = dom.querySelector('#elemento')
// console.log($parrafo)
// $parrafo.textContent = 'Parrafo ipsum <b>dolor</b> sit amet consectetur adipisicing elit. <b>Dolore,</b> eligendi eius </br>necessitatibus consectetur autem quam iste, officiis porro error neque fugit nostrum eum sed at consequatur fugiat asperiores accusamus a? Odit doloremque provident sapiente exercitationem optio voluptates officiis sint earum impedit. Magnam tempore repudiandae quod dolores neque unde minima deserunt.';

$parrafo.innerHTML = 'Parrafo ipsum <b>dolor</b> sit amet consectetur adipisicing elit. <b>Dolore,</b> eligendi eius </br>necessitatibus consectetur autem quam iste, officiis porro error neque fugit nostrum eum sed at consequatur fugiat asperiores accusamus a? Odit doloremque provident sapiente exercitationem optio voluptates officiis sint earum impedit. Magnam tempore repudiandae quod dolores neque unde minima deserunt.';
