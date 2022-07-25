const buttonLeft = document.querySelectorAll(".button-left");
const buttonRigth = document.querySelectorAll(".button-rigth");
const mainSection= [...document.querySelectorAll(".main-section")];

let value;

buttonRigth.forEach(item=>{
    item.addEventListener("click", ()=> changuePosition(1));
})
;
buttonLeft.forEach(item=>{
    item.addEventListener("click", ()=> changuePosition(-1) );

})


function changuePosition(chague){
const currenElement = Number(document.querySelector(".slider-body--show").dataset.id);
    value = currenElement;
    value+= chague;
    if(value === 0 || value == mainSection.length+1){
         value = value === 0 ? mainSection.length : 1;
    }

    mainSection[currenElement-1].classList.toggle("slider-body--show");
    mainSection[value-1].classList.toggle("slider-body--show");

}