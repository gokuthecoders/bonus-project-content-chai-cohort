// const inputText = document.getElementById("inputText");
// const resultMessage = document.getElementById("resultMessage");


// function checkPalindrome(){
//     let text  = inputText.value.replace(/[^A-Za-z0-9]/g, "").toLocaleLowerCase()
    
//     const reverseText = text.split("").reverse().join("");

//     if(text == reverseText){
//         resultMessage.style.color = "white"
//         resultMessage.innerHTML = `<i class="truePharse">${inputText.value}</i> is palindrome`
//     }else{
//         resultMessage.style.color = "orange"
//         resultMessage.innerHTML = `<i class="falsePharse">${inputText.value}</i> is NOT a palindrome`
//     }
// }

const arr = [343,454,5,65]

arr.reverse()
console.log(arr);
