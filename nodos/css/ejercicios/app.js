import { data } from "./datos.js";

const $fragmen = document.createDocumentFragment();
const $contenedor = document.querySelector(".container")
const $cards = document.createElement('div')
$cards.classList.add('cards')
$cards.setAttribute("id", "cards")
$contenedor.appendChild($cards)


data.map((a) => {
    //Creamos los elementos de la card
    const $card = document.createElement('div')
    const $card_header = document.createElement('div')
    // const $card_title = document.createElement('div')
    const $h2 = document.createElement('h2')
    const $card_body = document.createElement('div')
    const $img = document.createElement('img')
    const $p = document.createElement('p')
    const $a = document.createElement('a')
    const $span = document.createElement('span')
    const $i = document.createElement('i')

    // añade css

    $card.classList.add('card')
    $card_header.classList.add('card__header')
    $h2.classList.add('card_title')
    $card_body.classList.add('card__body')
    $img.classList.add('card__img')
    $p.classList.add('card__paragraph')
    $a.classList.add('button')
    $span.classList.add('button__text')
    $i.classList.add('bx', 'bxs-chevron-right', 'button__icon')

    //txt

    $h2.innerText = a.title
    $img.innerHTML = a.src 
    $img.setAttribute("src", a.scr)
    $p.innerText = a.paragraph
    $span.textContent = "Saber más"
    // $img.setAttribute("src", "img", a.src)
    // console.log($img)

    //crea hijos

    $cards.appendChild($card)
    $card.appendChild($card_header)
    $card_header.appendChild($h2)
    $card.appendChild($card_body)
    $card_body.appendChild($img)
    $card_body.appendChild($p)
    $card_body.appendChild($a)
    $a.appendChild($span)
    $a.appendChild($i)
    //console.log(obj)

    $fragmen.appendChild($card)
});

$cards.appendChild($fragmen)

