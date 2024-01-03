// generate a random color we need hexa values

const randomColor = function () {
    const hexa = "0123456789ABCDEF";
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random()*16)]
    }
    return color
}

// console.log(randomColor());
let intervalId
const startChangingColor = function(){

        if (!intervalId) {
            intervalId = setInterval(changeBgColor, 1000)
        }
    

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    } 
}
        


const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId =null;

}


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)