/* esta variable es la cantidad de productos 
desplegados antes de dar click al boton loadmore
notaras que en efecto son 4
*/
var currentItem = 4; 
/*
DOMContentLoaded es un evento que se ejecuta cuando la pagina carga
*/
document.addEventListener("DOMContentLoaded",()=>{
    /*Llamamos a la funcion para crear el html de cada una de las ecciones 
    con el arreglo de objetos que usara la funcion y con el id de cada seccion.
    Los arreglos estan en el archivo json.js*/
    createHtml(hamburguers,1)
    createHtml(tacos,2)
    createHtml(breakfast,3)
})

function E(selector,parent){
    // console.log(selector,"hola selector");
    // console.log(parent,"parent");
    if(selector instanceof HTMLElement){
        return selector
    }

    return(parent || document).querySelectorAll(selector)
}

function hasClass(element,clasName) {
    // console.log(element,"element in has")
    // console.log(clasName,"classname in has")
    return element.classList.contains(clasName)
}

function radioClass(element,clasName){
    // console.log(clasName,"hola clasName")
    // console.log(element,"hola element")
    // console.log(E("." + clasName));
    E("." + clasName).forEach(elem => elem.classList.remove(clasName));
    element.classList.toggle(clasName);
}

function tabs(nav) {
    
    let navElem=E(nav)[0];
    
    navElem.addEventListener("click",(e)=>{
        currentItem=4
        // console.log(currentItem,"current in tab")

        let target = e.target;
        // console.log(target.id,"hola target")
        //console.log(hasClass(target, "tab"),"Llamado de has")


        if(hasClass(target,"tab"))
            radioClass(target,"active");

        let linkedTab =E("."+target.id)[0];
        // console.log(linkedTab,"linked tab")
        radioClass(linkedTab, "visible");

        

    });

    let active = E(".tab.active")[0];
    if(active){
        radioClass(E("."+active.id)[0],"visible");
    }
}
/*
Funcion para crear el Html de manera dinamica,
la funcion recive como parametro un arreglo (obj)
y un id que representa una de las 3 secciones de comida
Hamburguesas ,tacos o desayunos ;el id se concatena usando ${}
para que se cree un selector dependiendo del id
*/
function createHtml(obj,id){
    //container es el selector 
    container =document.querySelector(`.box-container-${id}`)
    /*iteramos en cada uno de los objetos dentro del arreglo
    pasado como parametro usando el forEach
    */
    obj.forEach(box=>{
        /*box adquiere el valor de uno de los objetos 
        en cada iteracion
        */
        const {name,description,img,price}=box;
        /*asignamos variables que adquieren el valor de cada campo del objeto
        esto es posible porque se llaman exactamente igual al campo
        al cual quieren copiar el valor, esto se llama desturcturacion*/

        /*Creamos una varible con el codigo html que queremos crear 
        ente backticks (``) ya que asi podemos colocar variables en el codigo
        y colocamos las variables en su determinado puesto
        */
        let html=`
        <div class="box-${id}">
            <div class="image">
                <img src="${img}" alt="">
            </div>

            <div class="content">

                <h3>${name}</h3>
                <p>${description}</p>
                <div class="icons">
                    <span class="price">$${price}</span>
                    <span class="buy">
                        <img src="/images/car.svg" alt="">
                    </span>
                </div>

            </div>
        </div>
        `;
        /*Concatenamos el resultado una y otra vez en el selector que 
        hicimos al principio y asi se iran creando elementos en el html*/
        container.innerHTML+= html;
    })
}

tabs(".menu-nav");
/*Se crean los selectores de cada boton loadmore*/
let loadMoreBtn1 = document.querySelector('.load-more-1');
let loadMoreBtn2 = document.querySelector('.load-more-2');
let loadMoreBtn3 = document.querySelector('.load-more-3');

/*evento click en cada boton loadmore ,que llama a una funcion 
generica que sirve para cada uno de los casos*/
loadMoreBtn1.addEventListener("click",load)
loadMoreBtn2.addEventListener("click",load)
loadMoreBtn3.addEventListener("click",load)

/*funcion que sirve para los 3 botones ya que el selector
se crea mediante el id */
function load(e){
    /*con el parametro e (event) usamos e.target.id y asi obtenemos el id del 
    elemnto html donde sucedio el evento
    y con parseInt lo volvemos entero*/
    let id= parseInt(e.target.id);
    /*Creamos un arreglo que contenga todos los elementos con la clase
    box mas el id ejemplo: box-1*/
    let boxes = [...document.querySelectorAll(`.box-${id}`)];
    /*bucle que se ejecuta mientras i sea menor a currentItem +4 
    y ademas mientras i sea menor a la cantidad de elementos dentro de 
    nuetro arreglo boxes
    */
    for (let i = currentItem; i < currentItem + 4 && i < boxes.length; i++) {
        /*a cada elemento de boxes le editamos sus clases y le damos display 
        inline-block lo que hace que de en 4 en 4 se muentren mas productos
        luego de dar click en el boton load-more*/
        boxes[i].style.display = 'inline-block';
    }

  // Update currentItem for the next click
    currentItem+=4
    

    // Hide the button if all items have been displayed
    if (currentItem >= boxes.length) {
        e.target.style.display = 'none';
    }
};