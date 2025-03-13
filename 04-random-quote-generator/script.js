const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "What we think, we become.", author: "Buddha" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "Even if you are on the right track, you'll get run over if you just sit there.", author: "Will Rogers" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" }
  ];


const generateButton = document.getElementById('generateButton')
const quoteDisplay = document.getElementById('quoteDisplay')
const author = document.getElementById('author')
const slider = document.querySelector('.slider')
const checkBox = document.querySelector('.checkbox')

const newMap = new Map();

function generateQuote(){

    if(newMap.size <= 1){
        for ( let i = 0; i < quotes.length; i++) {
            newMap.set(i,quotes[i])
        }
    }

    const NumberOfItem = [];
    const itrator = newMap.keys();

    for (let i = 0; i < newMap.size; i++) {
        NumberOfItem.push(itrator.next().value)        
    }

    console.log({NumberOfItem});
    
    
    const randomIndex = Math.floor(Math.random()*NumberOfItem.length)
    const quote = newMap.get(NumberOfItem[randomIndex])
    quoteDisplay.innerText = quote.text
    author.innerHTML = `<b>${quote.author}</b>`

    newMap.delete(NumberOfItem[randomIndex])
    console.log(newMap);
    
}

generateButton.addEventListener('click', generateQuote)


if(localStorage.getItem("theme").toString() == "black"){
    document.body.style.backgroundColor = "black"
    checkBox.setAttribute('checked', 'fgd')
    console.log(Math.random());
}

slider.addEventListener("click",()=>{
    let isDark = localStorage.getItem("theme")
    console.log(isDark);
    
    let theme ;

    if(isDark == null || isDark == undefined || isDark != "black"){

        localStorage.setItem("theme", "black")
        theme = localStorage.getItem("theme")
        document.body.style.backgroundColor = theme

    }else if(isDark == "black"){
        localStorage.setItem("theme", "white")
        document.body.style.backgroundColor = ''
    }
})

