const textInput = document.getElementById("textInput")
const characterCount = document.getElementById("characterCount")
const warningMessage = document.getElementById("warningMessage")
const countUniqueWord = document.getElementById("countUniqueWord")

let limit = 200

function countText(){
    const charCountValue = textInput.value.length ;

    characterCount.innerText = `${charCountValue} / ${limit} charcter`

    if(charCountValue < limit) {
        characterCount.style.color = "green"
        warningMessage.innerText = ""
    }else if(charCountValue === limit) {
        characterCount.style.color = "orange"
        warningMessage.innerText = ""
    } else{
        characterCount.style.color = "red"
        warningMessage.innerText = "Character limit exceed"
    }

    let obj = {}

    const countWord = textInput.value.replace(/\s\s+/g , ' ').split(" ");
    console.log(countWord);
    
    countWord.forEach(element => {
        obj[element] = (obj[element] || 0) + 1
    });

    let uniqueWordNumber = Object.keys(obj).length; // awesome method to get length of object , object has no built in length property 
    
    countUniqueWord.innerText = `${uniqueWordNumber} unique / ${countWord.length} word`
    
}

textInput.addEventListener("input", ()=>{
    countText()
})