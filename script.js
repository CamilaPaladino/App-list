
let wireframe1 = document.getElementById('wireframe1')
let btnAdd1 = document.getElementById('btnAdd1')

let wireframe2 = document.getElementById('wireframe2')
let btnAdd2 = document.getElementById('btnAdd2')

let wireframe3 = document.getElementById('wireframe3')
let contenedorLista = document.getElementById('contenedorLista')
let btnAdd3 = document.getElementById('btnAdd3')

let wireframe4 = document.getElementById('wireframe4')
let contenedorFinal = document.getElementById('contenedorFinal')


btnAdd1.addEventListener('click', function(){
    wireframe1.style.display ='none'
    wireframe2.style.display = 'flex'
    wireframe3.style.display = 'none'
    wireframe4.style.display ='none'
})


btnAdd2.addEventListener('click', function(event){
    event.preventDefault()
    let producto = document.getElementById('producto').value
    let categoria = document.getElementById('categoria').value
    let description = document.getElementById('description').value
        if (producto != '' && categoria !=''){
            let item =`<li><img src="${categoria}" alt="">${ producto}</button><button class="seguir" onclick= "pantallaFinal('${categoria}', '${producto}', '${description}')">></button></li>`
            contenedorLista.innerHTML += item
            wireframe3.style.display = 'flex'
            wireframe1.style.display = 'none'
            wireframe2.style.display = 'none'
            wireframe4.style.display ='none'
        }
        else{
            document.getElementById('mensaje').innerHTML = 'Completa producto y categoría por favor.'
        }
})


btnAdd3.addEventListener('click', function(e){
    producto.value = ""
    categoria.value = ""
    description.value = ""
    e.preventDefault()
    wireframe2.style.display = 'flex'
    wireframe1.style.display = 'none'
    wireframe3.style.display = 'none'
    wireframe4.style.display = 'none'
})


function pantallaFinal(categoria, producto, description){
    let productoFinal= `<button class="btncross" onclick="volverList()">x</button><img src="${categoria}" alt=""><h3>${producto}</h3><p>${description}</p>`
    contenedorFinal.innerHTML = productoFinal
    wireframe3.style.display = 'none'
    wireframe4.style.display = 'flex'
    wireframe1.style.display = 'none'
    wireframe2.style.display = 'none'
}

function volverList(){
    wireframe3.style.display = 'flex'
    wireframe1.style.display = 'none'
    wireframe2.style.display = 'none'
    wireframe4.style.display = 'none'
}
