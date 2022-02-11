const buttons = document.querySelectorAll(".button")
const question_to_show = {
    "hungry-button-1": "type-of-food",
    "hungry-button-2": "touristy",
    "type-of-food-button-1": "dinner-cuisine",
    "type-of-food-button-2": "bobs",
    "dinner-cuisine-button-1": "golden-boy",
    "dinner-cuisine-button-2": "uno-dos-tacos",
    "touristy-button-1": "touristy-outdoorsy",
    "touristy-button-2": "nontouristy-outdoorsy",
    "touristy-outdoorsy-button-1": "baker-beach",
    "touristy-outdoorsy-button-2": "moma",
    "nontouristy-outdoorsy-button-1": "lands-end",
    "nontouristy-outdoorsy-button-2": "apartment",
    "home-1": "hungry",
    "home-2": "hungry",
    "home-3": "hungry",
    "home-4": "hungry",
    "home-5": "hungry",
    "home-6": "hungry",
    "home-7": "hungry",
}

function handle_button_click(button) {
    // return question_to_show(button)
    console.log(question_to_show[button])
    document.querySelector('.div-show').classList.toggle('div-show')
    document.getElementById(question_to_show[button]).classList.toggle('div-show')
    document.querySelector("bottom-buttons").classList.toggle('div-show')
}

for(let button of buttons){
    button.onclick = () => {
        handle_button_click(button.id)
    }
}

// normal functions
// function functionName(argument1, arg2){
//     blah blah blah
// }

// ES6 arrow functions
// const functionName = (argument1, arg2) => {
//     blah blah blah
// }