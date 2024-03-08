const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

console.log(btns)
let count = 0
let countn = 0
btns.forEach((btn) => {
    console.log(btn)

    btn.addEventListener('click', (button) => {
        console.log(button.currentTarget.classList)
        const styles = button.currentTarget.classList

        if(styles.contains('decrease')){
            console.log("Decrease is pressed")
            count--
        }else if(styles.contains('increase')){
            console.log("Increased is pressed")
            count++
        }else if(styles.contains('reset')){
            console.log("Reset is pressed")
            count = 0
            
        }else if(styles.contains('increase5')){
            console.log("Increased is pressed")
            count = count + 5
            
        }else if(styles.contains('decrease5')){
            console.log("Decreased is pressed")
            count = count - 5
        }else if(styles.contains('random')){
            console.log("Random")
            count = Math.floor(Math.random() * (500 -(-500) +1)) + (-500) 

        }
        
        
        if(count > 0){
            value.style.color = "green"
        }else if ( count < 0 ){
            value.style.color = "red"
        }else{
            value.style.color = "black"
        }
        value.textContent = count
    })
    
})
