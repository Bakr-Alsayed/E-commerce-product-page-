let cart_menue = document.getElementById("cart_menue");
let big_image =document.querySelector(".big_image");
let image_prodect = document.getElementById("image_prodect")
let show_prodect = document.querySelector(".show_prodect");
let section_1 = document.querySelector(".section_1");
let add_to_cart = document.querySelector(".add_to_cart");


big_image.addEventListener("click" , () => {
    show_prodect.classList.toggle("active");
    section_1.style.opacity = "0.5"
    show_prodect.style.opacity = "1";
})
function close_open(){
    show_prodect.classList.remove("active");
     section_1.style.opacity = "1"
}

function open_close_cart_menue(){
    cart_menue.classList.toggle("active")
}

function show_images(source) {
    big_image.src = source;
}
function show_images_pro(source) {
    image_prodect.src = source;
}
const decrese_btn = document.querySelector(".decrese_btn");
const quantity = document.querySelector(".quantity");
const increse_btn = document.querySelector(".increse_btn");

decrese_btn.addEventListener("click" , _ => {
    if(quantity.innerHTML != 1){
        quantity.innerHTML -= 1;
        quantity_cart.innerHTML = quantity.innerHTML 
        get_total()
    }
})
increse_btn.addEventListener("click" , _ => {
        quantity.innerHTML = +quantity.innerHTML + 1;
        quantity_cart.innerHTML = quantity.innerHTML 
        get_total()
})
const containet_cart_prodect = document.querySelector(".containet_cart_prodect");


const trash = document.querySelector(".trash");
trash.addEventListener("click" , _=> {
    containet_cart_prodect.classList.remove("active")
})

add_to_cart.addEventListener("click", () => {
    containet_cart_prodect.classList.add("active")
})

const quantity_cart = document.querySelector(".quantity_cart");
function get_total() {
const total = document.querySelector(".total");
total.innerHTML = +quantity.innerHTML * 125
}

let nave = document.querySelector(".nave");
let menu = document.querySelector(".menu")
let close_menue = document.querySelector(".close_menue")

menu.addEventListener("click", ()=>{

    nave.classList.add("active")
})
close_menue.addEventListener("click", ()=>{

    nave.classList.remove("active")
})

