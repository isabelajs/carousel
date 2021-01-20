
//obtiene le contenedor del carrusel
let carousel_contenedor = document.getElementsByClassName("categoria__carousel")[0];
//obtiene el ultimo elemento del carrusel
let lastItem= carousel_contenedor.lastChild.previousSibling.lastChild.previousSibling

//obtengo los botones derecha e izquierda
let btnLeft = document.getElementById("btn-left")
let btnRight = document.getElementById("btn-right")

//obtengo todos los hermanos del ultimo elemento
let itemsWithoutLastItem = getSiblings(lastItem)

lastItem.addEventListener("mouseover", desplazar)
lastItem.addEventListener("mouseout",desplazar)

btnLeft.addEventListener("click",moveRight)
btnRight.addEventListener("click",moveLeft)



//mueve a la derecha con el boton derecho
function moveRight(){
    console.log("estamos moviendo a la izquierd ajaja")
    carousel_contenedor.scrollLeft -=200;
}
//mueve a la derecha con el boton izquierdo
function moveLeft(){
    console.log("estamos moviendo a  la derechaa ajja")
    carousel_contenedor.scrollLeft +=200;
}
//desplaza el ultimo elemento del contenedor carrusel al agregarle una clase
function desplazar(){

    itemsWithoutLastItem.forEach((item)=>{

        item.classList.toggle("moveLeft")

    })

}
//obtiene todos los hermanos
function getSiblings(e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};




