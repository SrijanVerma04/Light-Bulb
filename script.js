let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click',toggleBulb)

function toggleBulb(e){
    if(btn.textContent.includes('on')){
       bulb.src = "on bulb.jpeg"
       btn.textContent= "turn off"
    }
    else{
       bulb.src = "off bulb.jpg"
       btn.textContent= "turn on"
    }
}