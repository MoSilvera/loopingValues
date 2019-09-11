let dropDowns = document.querySelectorAll(".select")
let captureValues = () => {dropDowns.forEach(dropDown=> {
    console.log(dropDown.value)
})}

let button = document.querySelector("#btn")

button.addEventListener("click", event => {
    event.preventDefault()
    captureValues()
})