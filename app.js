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
console.clear


const listaA = [...body.children]
console.log(listaA)

listaA.map((x) =>{
    console.log(x)
})

console.log(api)
console.clear
console.log(body.childNodes)