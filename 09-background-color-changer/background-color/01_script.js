const container = document.getElementById("container")
const backChanger = document.getElementById("backChanger")

backChanger.addEventListener("click", ()=>{
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})