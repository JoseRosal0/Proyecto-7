document.addEventListener("DOMContentLoaded",createHtml)

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
    console.log(E("." + clasName));
    E("." + clasName).forEach(elem => elem.classList.remove(clasName));
    element.classList.toggle(clasName);
}

function tabs(nav) {
    let navElem=E(nav)[0];
    //console.log(navElem,"nav element")
    
    navElem.addEventListener("click",(e)=>{
        let target = e.target;
        // console.log(target,"hola target")
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

function createHtml(){
    container =document.querySelector(".box-container-1")
    for (let index = 0; index < 4; index++) {
      let html=`
        <div class="box-1">
          <div class="image">
              <img src="/images/hambuerger.png" alt="">
          </div>

          <div class="content">

              <h3>Burger Premium</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe!</p>
              <div class="icons">
                  <span class="price">$15.00</span>
                  <span class="buy">
                      <img src="/images/car.svg" alt="">
                  </span>
              </div>

          </div>
        </div>
      `;
  
      container.innerHTML+= html
      
    }
}

tabs(".menu-nav");

let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;  // Starting index for displaying items

loadMoreBtn1.onclick = () => {
  createHtml()
  // console.log("ingreso a load more"); // Optional console log for debugging

  // Get all box elements within the container with class "box-container-1"
    let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
    console.log(boxes,"hola boxes")
  // Loop to display the next 4 items
    for (let i = currentItem1; i < currentItem1 + 4 && i < boxes.length; i++) {
        console.log("dentro del for");
        boxes[i].style.display = 'inline-block';
    }

  // Update currentItem for the next click
    currentItem1 += 4;

    // Hide the button if all items have been displayed
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none';
    }
};

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;  // Starting index for displaying items

loadMoreBtn2.onclick = () => {
  // console.log("ingreso a load more"); // Optional console log for debugging

  // Get all box elements within the container with class "box-container-2"
    let boxes = [...document.querySelectorAll(".box-container-2 .box-2")];

  // Loop to display the next 4 items
    for (let i = currentItem2; i < currentItem2 + 4 && i < boxes.length; i++) {
        console.log("dentro del for");
        boxes[i].style.display = 'inline-block';
    }

  // Update currentItem for the next click
    currentItem2 += 4;

    // Hide the button if all items have been displayed
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
};

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;  // Starting index for displaying items

loadMoreBtn3.onclick = () => {
  // console.log("ingreso a load more"); // Optional console log for debugging

  // Get all box elements within the container with class "box-container-3"
    let boxes = [...document.querySelectorAll(".box-container-3 .box-3")];

  // Loop to display the next 4 items
    for (let i = currentItem3; i < currentItem3 + 4 && i < boxes.length; i++) {
        console.log("dentro del for");
        boxes[i].style.display = 'inline-block';
    }

  // Update currentItem for the next click
    currentItem3 += 4;

    // Hide the button if all items have been displayed
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none'; 
    }
};