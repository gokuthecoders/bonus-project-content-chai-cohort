const container = document.getElementById("container")
const backChanger = document.getElementById("backChanger")

const imageCollection = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg",
    "12.jpg", "13.jpg", "14.jpg"
];

backChanger.addEventListener("click", ()=>{
    const randomImage = imageCollection[Math.round(Math.random()*imageCollection.length)]
    container.style.backgroundImage = `url(./images/${randomImage})`
})

const randomImage = imageCollection[Math.round(Math.random()*imageCollection.length)]
container.style.backgroundImage = `url(./images/${randomImage})`