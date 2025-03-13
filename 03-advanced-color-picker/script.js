let colorInput = document.getElementById('colorPicker')
let textInput = document.getElementById('textInput')
let hexColorCode = document.getElementById('hex-color-code')
const textPopUp = document.getElementById('textPopup')
let complementryColorChip = document.getElementById('complement-color-chip')
let copyHexCodeButton = document.querySelector('.copy-hex-code-button')

const savedColorBox = document.getElementById("saved-color-items")

let value;
colorInput.addEventListener("input", ()=>{
    value = colorInput.value;
    textInput.style.backgroundColor = value
    hexColorCode.innerText = value
    hexColorCode.style.color = value

    const complementryColorValue = complementryColor(value)[0]
    complementryColorChip.style.backgroundColor = complementryColorValue
    complementryColorChip.innerText = complementryColorValue
})

copyHexCodeButton.addEventListener('click', ()=>{
    window.navigator.clipboard.writeText(colorInput.value)
    textPopUp.style.display = "block"
    setTimeout(()=>{
        textPopUp.style.display = "none"
    }, 700)
})

function complementryColor(value){
    let base = parseInt((value.slice(1)), 16)
    let complementryColorValue = (0xFFFFFF^base).toString(16);
    return [`#${complementryColorValue}`]
}

function saveColor(){
    const newElement = document.createElement('div');
    newElement.classList.add("save-color-box")
    newElement.style.backgroundColor = value;

    savedColorBox.appendChild(newElement)
}

function saveComplementryColor(){
    const newElement = document.createElement('div');
    newElement.classList.add("save-color-box")
    newElement.style.backgroundColor = complementryColor(value)[0];

    savedColorBox.appendChild(newElement)
}