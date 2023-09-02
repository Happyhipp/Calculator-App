// Display the numbers
const display = document.querySelector('.display')
const btn = document.querySelectorAll('.num')
for (const i of btn) {
    i.addEventListener('click', (e) => {
        let element = e.target
        // element.classList.add("bg-btn")
        console.log(element)
        display.innerHTML = display.innerHTML + i.innerHTML
    })

}
// Reset the displayed numbers
const displays = document.querySelector('.calculate')
const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    display.innerHTML = " "
})

// Calculation for the answer
const getDisplayElement = document.getElementsByClassName('display')
const getAnswerElement = document.getElementById("evaluate")
evaluate.addEventListener('click', () => {
    console.log("answer")

    if (display.innerHTML === "") {
        display.innerHTML = display.innerHTML
    } else {
        let answer = eval(display.innerHTML)
        display.innerHTML = answer
    }
})

// Delete the displayed number
const calculate = document.querySelector('.calculate')
const del = document.querySelector('#del')
del.addEventListener('click', () => {
    console.log(" ")
    display.innerHTML = display.innerHTML.slice(0, -1)
})

//THEME CHANGE CODE

// select the elements to change
const themeTogglerBtn = document.querySelector("#theme-btn")
const themeTogglerBg = document.querySelector(".toggle")
const keypad = document.querySelector('.value')
const key = document.querySelectorAll('.num')
const body = document.querySelector("body")
const displayDiv = document.querySelector('.displaydiv')
const evaluateBtn = document.querySelector("#evaluate")
console.log(evaluateBtn.innerHTML)
// set the default mode 
themeTogglerBtn.classList.add("default-mode")
// themeTogglerBg.classList.add("to")
// body.style.background = "hsl(222, 36%, 31%)"
// displayDiv.classList.add('displaydivdefaultBg')
body.style.background = "hsl(222, 26%, 31%)"
displayDiv.style.background = "hsl(224, 36%, 15%)"
keypad.style.background = "hsl(223, 31%, 20%)"
key.forEach((i) => {
    i.style.background = "hsl(30, 25%, 89%)"
    i.style.color = "hsl(221, 14%, 31%)"
}
)
evaluateBtn.style.background = "hsl(6, 63%, 50%)"

// Toggle function
const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', (e) => {
    console.log("button-pressed")

    if (themeTogglerBtn.className.includes("default-mode")) {
        themeTogglerBtn.classList.remove("default-mode")
        themeTogglerBtn.classList.add("light-mode")
        body.style.background = "hsl(0, 0%, 90%)"
        themeTogglerBg.style.background = "hsl(0, 5%, 81%0)"
        displayDiv.style.background = "hsl(0, 0%, 93%)"
        keypad.style.background = "hsl(0, 0%, 93%)"
        key.forEach((i) => {
            i.style.background = "#ffffff"
            i.style.color = "hsl(60, 10%, 19%)"
        }
        )
        evaluateBtn.style.background = "hsl(25, 98%, 40%)"
        if (themeTogglerBtn.className) {

        }
    } else if (themeTogglerBtn.className.includes("light-mode")) {
        themeTogglerBtn.classList.remove("light-mode")
        themeTogglerBtn.classList.add("neon-mode")

        body.style.background = "hsl(268, 75%, 9%)"
        themeTogglerBg.style.background = " hsl(268, 71%, 12%)"
        displayDiv.style.background = "hsl(268, 71%, 12%)"
        keypad.style.background = "hsl(268, 71%, 12%)"
        key.forEach((i) => {
            i.style.background = " hsl(281, 89%, 26%)"
            i.style.color = "hsl(52, 100%, 62%)"
        })
        .reset.forEach((i) => {
            i.style.background = "hsl(268, 47%, 21%)"
            i.style.color = "hsl(52, 100%, 62%)"
        })
        evaluateBtn.style.background = "hsl(25, 98%, 40%)"
    } else if (themeTogglerBtn.className.includes("neon-mode")) {
        themeTogglerBtn.classList.remove("neon-mode")
        themeTogglerBtn.classList.add("default-mode")
        body.style.background = "hsl(222, 26%, 31%)"
        displayDiv.style.background = "hsl(224, 36%, 15%)"
        keypad.style.background = "hsl(223, 31%, 20%)"
        key.forEach((i) => {
            i.style.background = "rgb(255, 255, 255)"
            i.style.color = "hsl(221, 14%,31%)"
        })
    }
})
const toggler = document.querySelector('.toggle')
toggle.addEventListener('click', (e) => {
    console.log("button-pressed")

})