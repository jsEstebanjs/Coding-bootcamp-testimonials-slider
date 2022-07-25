const buttonLeft = document.querySelector(".button-left");
const buttonRigth = document.querySelector(".button-rigth");
const mainSection= [...document.querySelectorAll(".main-section")];

let value;

buttonRigth.addEventListener("click", ()=>{
changuePosition(1)
})
buttonLeft.addEventListener("click", ()=>{
    changuePosition(-1)
})
function changuePosition(chague){
const currenElement = Number(document.querySelector(".slider-body--show").dataset.id);
   let  value = currenElement
    value += chague
    if(value === 0 || value === mainSection.length+1){
         value = value === 0 ? mainSection.length : 1;
    }

    mainSection[currenElement-1].classList.toggle("slider-body--show");
    mainSection[value-1].classList.toggle("slider-body--show");

}