import { post } from "./modulo.js";

//variables
const root = document.querySelector('#root');
const boton = document.createElement('button');
const form = document.createElement('form')
const input = document.createElement('input')
boton.textContent = "Solicitar Nuevoo";
const section = document.createElement('section')

boton.setAttribute("type", "submit")




form.appendChild(input)
form.appendChild(boton)
root.appendChild(form);
root.appendChild(section);


let regex = /^[0-9]{1,}$/;

//funciones

const aregarPost = (event) => {
  event.preventDefault()
  console.log(input.value)

  if (regex.test(input.value)) {
    input.classList.add('acierto')
    post(input.value)
    
    .then((response) => {
      console.log(response)

      const div = document.createElement('div');
      const h2 = document.createElement('h2')
      const parrafo = document.createElement('p')


      h2.textContent = `${response.id} - ${response.title} `
      parrafo.textContent = response.body


      div.appendChild(h2)
      div.appendChild(parrafo)

      section.prepend(div)

      console.log(response)

    })
    .catch ();
  }
  else {
    alert("Mal")
    input.classList.toggle("error")
  }


}
boton.addEventListener('click', aregarPost);
form.addEventListener('submit', aregarPost);

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    aregarPost(event);
  }

  input.addEventListener('keyup', function () {
    if (regex.test(input.value)) {
      input.classList.remove('error')
      input.classList.add('bien')
    } else {
      input.classList.remove('bien')
      input.classList.add('error')
    }
  })

})