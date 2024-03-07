const hex =[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    let hexColor="#"
    for(let i =0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})


getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}

//console.log(getRandomNumber)
