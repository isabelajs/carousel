
//obtengo el conjunto de los elementos que contienen el carrusel
let carousel_contenedor = [...document.getElementsByClassName("categoria__carousel")];

//obtengo los botones de derecha a izquierda
let buttonsLeft =[...document.getElementsByClassName("categoria__button-left")] ;
let buttonsRight = [...document.getElementsByClassName("categoria__button-right")];

//extrae cada carousel 
carousel_contenedor.forEach(carousel => {
    //obtiene el ultimo elemento del carrusel
    let lastItem = carousel.lastChild.previousSibling.lastChild.previousSibling
    //obtengo todos los hermanos del ultimo elemento
    let itemsWithoutLastItem = getSiblings(lastItem)
    //agrega la función al evento posicionar o desposicionar en el ultimo elemento
    lastItem.addEventListener("mouseover", ()=>{desplazarItems(itemsWithoutLastItem)} )
    lastItem.addEventListener("mouseout", ()=>{desplazarItems(itemsWithoutLastItem)})

});

//todos los botones a la izquierda
buttonsLeft.forEach(buttonLeft =>{
    buttonLeft.addEventListener("click",()=>{moveLeft(buttonLeft)})
})

//todos los botones a la derecha
buttonsRight.forEach(buttonRight => {
    buttonRight.addEventListener("click",()=>{moveRight(buttonRight)})
})

//mueve a la izquieda
function moveLeft(element){
    let carousel_contenedor = element.parentNode.previousSibling.previousSibling;
    carousel_contenedor.scrollLeft -=200;
}

//mueve a la derecha
function moveRight(element){
    let carousel_contenedorx = element.parentNode.previousSibling.previousSibling;
    carousel_contenedorx.scrollLeft +=200;
}

//desplaza el ultimo elemento del contenedor carrusel al agregarle una clase
function desplazarItems(siblings){
    siblings.forEach((item)=>{

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