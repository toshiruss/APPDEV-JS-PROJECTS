const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
//input from textbox id
let name = document.getElementById("name").value
let address = document.getElementById("address").value
let telephone = document.getElementById("telephone").value
let major = document.getElementById("major").value
//displaying the output
let x = `
Hello! ${name}, I see that you are from ${address}, and you are also pursuing
${major} and you can be contacted using ${telephone}.
`
document.getElementById("output1").innerHTML = x;

})
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () =>{
//input from textbox id
let amount = document.getElementById("amount").value
let amount2 = (amount * .23)

//displaying the output
let x = `
Hello! your annual profit is ${amount2}
`

document.getElementById("output2").innerHTML = x

})
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () =>{
//input from textbox id
let distance = document.getElementById("distance").value
let distance2 = (distance * 5)
let distance3 = (distance * 8)
let distance4 = (distance * 12)

//displaying the output
let x = `
Your distance if you travelled within 5 hours is ${distance2} miles per
hour<br>
Your distance if you travelled within 8 hours is ${distance3} miles per
hour<br>
Your distance if you travelled within 12 hours is ${distance4} miles per
hour<br>
`
document.getElementById("output3").innerHTML = x
})
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () =>{
//input from textbox id
let miles = document.getElementById("miles").value
let gallons = document.getElementById("gallons").value
let used = (miles/gallons)
//displaying the output
let x = `
Your have ${used} miles per gallons.<br>
`
document.getElementById("output4").innerHTML = x
})
const btncel = document.getElementById("btncel")

btncel.addEventListener("click", () =>{
//input from textbox id
let temperature = document.getElementById("temperature").value
let fah = temperature * (9/5) + 32
//displaying the output
let x = `
The ${temperature} °C is equal to ${fah} °F fahrenheit.<br>
`
document.getElementById("output5").innerHTML = x
})
const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () =>{
//input from textbox id
let cookies = document.getElementById("cookies").value
let ck = (cookies/4)
let cl = (cookies* 75)
//displaying the output
let x = `
The total calories of ${cookies} cookies is ${cl} amount of calories. <br>
`
document.getElementById("output6").innerHTML = x
})
const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () =>{
//input from textbox id
let male = parseInt(document.getElementById("male").value)
let female = parseInt(document.getElementById("female").value)
let total = (male + female)
let numMale = (male/total) * 100
let numFMale = (female/total) * 100
//displaying the output
let x = `
There are ${total} students in a class, ${numMale}% are males and
${numFMale}% are females.<br>
`
document.getElementById("output7").innerHTML = x

})