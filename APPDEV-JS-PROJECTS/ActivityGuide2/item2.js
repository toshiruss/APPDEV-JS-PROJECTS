const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
// Input from textbox id
let number = parseInt(document.getElementById("number").value);
if (number >= 86400) {
number = number / 86400 + " day/s";
} else if (number >= 3600) {
number = number / 3600 + " hour/s";
} else if (number >= 60) {
number = number /60 + " minute/s";
} else if (number < 60){
number = number + " second/s";
}
// Displaying the output
let x = `
${number}
`;
document.getElementById("output1").innerHTML = x;
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    // Input from textbox id
    let number2 = parseInt(document.getElementById("number2").value);
    let pounds = number2;

    if (pounds <= 2) {
        ship = 1.1;
    } else if (pounds > 2 && pounds <= 6 ) {
        ship =  2.2 ;
    } else if (pounds > 6 && pounds <= 10) {
        ship = 3.7 ;
    } else if(pounds > 10){
        ship = 3.8 ;
    }
    let tot= ship * pounds;


    // Displaying the output
    let x = `
    ${tot}
    `;
    document.getElementById("output2").innerHTML = x;
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    // Input from textbox id
    let number3 = parseInt(document.getElementById("number3").value);
    quant = number3;

    if (quant === 10 && quant <= 19) {
        disc = quant * .20;
        res = "The amount of discount is 20%";
    } else if (quant === 20 && quant <= 49 ) {
        disc = quant * .30;
        res = "The amount of discount is 30%";
    } else if (quant === 50 && quant <= 99) {
        disc = quant * .40;
        res = "The amount of discount is 40%";
    } else if(quant >= 100){
        disc = quant * .50;
        res = "The amount of discount is 50%";
    }

    let total = quant - disc;


    // Displaying the output
    let x = `
    ${res} So, the total amount of the discounted price is ${total}.
    `;
    document.getElementById("output3").innerHTML = x;
});

btn4.addEventListener("click", ()=>{
    let mass = document.getElementById("mass").value
    let weight = mass * 9.8
    if (weight > 1000){
        document.getElementById("output4").innerHTML = 'The object is too heavy'
    } else if (weight < 10){
        document.getElementById("output4").innerHTML = 'The object is too light'
    } else {
        document.getElementById("output4").innerHTML = 'The weight of the object is ' + weight + ' Newtons.'
    }

})



