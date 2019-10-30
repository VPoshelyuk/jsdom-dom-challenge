let counter = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let heart = document.getElementById("heart")
let pause = document.getElementById("pause")
let likes_ul = document.getElementsByClassName("likes")[0]
let comments = document.getElementById("list")

let numsObj = {}
let paused = false
let num_of_clicks = 0
let click = e => {
    num_of_clicks++
    if (numsObj[counter.innerText] === undefined){
        numsObj[counter.innerText] = 0
        for (let index = 0; index < num_of_clicks; index++) {
            numsObj[counter.innerText] ++
        }
    } else {
    }
    let number_li = document.createElement("li")
    number_li.innerHTML =`${counter.innerText} has been liked ${num_of_clicks} times`
    likes_ul.appendChild(number_li)

}


plus.addEventListener("click",function() {
    counter.innerText = parseInt(counter.innerText) + 1
})
minus.addEventListener("click",function() {
    counter.innerText = parseInt(counter.innerText) - 1
})

pause.addEventListener("click",function() {
    if (!paused){
        paused = true
        pause.innerText = "resume"
    } else {
        paused = false
        pause.innerText = "pause"
    }
    
})

heart.addEventListener("click",click)

setInterval(function() {
    if (!paused) {
        counter.innerText = parseInt(counter.innerText) + 1
        num_of_clicks = 0
    }
}, 1000)