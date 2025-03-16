# Palindrome Checker - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-7%20of%2010-blue?style=for-the-badge" alt="Project 7 of 10" />
  <img src="https://img.shields.io/badge/Skill-RegEx%20%26%20String%20Manipulation-brightgreen?style=for-the-badge" alt="Regular Expressions & String Manipulation" />
</div>

## 📝 Project Overview

This is the seventh project in the Chai Cohort BONUS series - a Palindrome Checker that verifies whether a given word or phrase reads the same forward and backward. The project showcases string manipulation, regular expressions for text cleaning, and DOM manipulation to create a user-friendly interface.

## ✨ Features

- Clean, dark-themed UI with responsive design
- Real-time palindrome verification
- Smart text processing with RegEx pattern matching
- Case-insensitive comparison
- Special character and space removal
- Visual feedback with color-coded results
- Support for both words and phrases

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Regular Expressions (RegEx)
- DOM Manipulation
- String Methods
- CSS Transitions

## 🧠 Key Concepts Covered

- Regular expressions for text processing
- String manipulation (reverse, split, join)
- DOM manipulation for interactive feedback
- Case insensitivity in text comparison
- User input processing and sanitization
- Visual feedback through color and styling

## 🎨 How It Works

### Text Processing with RegEx
The application uses regular expressions to clean the input text before checking if it's a palindrome:

```javascript
function checkPalindrome(){
    let text = inputText.value.replace(/[^A-Za-z0-9]/g, "").toLocaleLowerCase()
    
    const reverseText = text.split("").reverse().join("");

    if(text == reverseText){
        resultMessage.style.color = "white"
        resultMessage.innerHTML = `<i class="truePharse">${inputText.value}</i> is palindrome`
    }else{
        resultMessage.style.color = "orange"
        resultMessage.innerHTML = `<i class="falsePharse">${inputText.value}</i> is NOT a palindrome`
    }
}
```

This algorithm works by:
1. Removing all non-alphanumeric characters using the RegEx pattern `/[^A-Za-z0-9]/g`
2. Converting the text to lowercase for case-insensitive comparison
3. Creating a reversed version of the text by:
   - Splitting the string into an array of characters with `split("")`
   - Reversing the array with `reverse()`
   - Joining the characters back into a string with `join("")`
4. Comparing the processed text with its reversed version
5. Providing visual feedback based on the result

## 💻 String Method Deep Dive

<div align="center">
  <img src="https://img.shields.io/badge/Method-replace()-purple?style=for-the-badge" alt="replace() Method" />
</div>

### 🔄 `replace()` Method
```javascript
let text = inputText.value.replace(/[^A-Za-z0-9]/g, "")
```
- **What it does**: Replaces text that matches a pattern with new text
- **Parameters**: Pattern (RegEx), replacement string
- **Returns**: New string with replacements
- **In our code**: Removes all non-alphanumeric characters

<div align="center">
  <img src="https://img.shields.io/badge/Method-split()-orange?style=for-the-badge" alt="split() Method" />
</div>

### 🔪 `split()` Method
```javascript
text.split("")
```
- **What it does**: Splits a string into an array of substrings
- **Parameters**: Separator (empty string splits by character)
- **Returns**: Array of individual characters
- **In our code**: Converts "radar" into ["r","a","d","a","r"]

<div align="center">
  <img src="https://img.shields.io/badge/Method-reverse()-blue?style=for-the-badge" alt="reverse() Method" />
</div>

### 🔁 `reverse()` Method
```javascript
text.split("").reverse()
```
- **What it does**: Reverses the order of elements in an array
- **Parameters**: None
- **Returns**: The reversed array
- **In our code**: Converts ["r","a","d","a","r"] to ["r","a","d","a","r"] (no change for palindromes!)

<div align="center">
  <img src="https://img.shields.io/badge/Method-join()-green?style=for-the-badge" alt="join() Method" />
</div>

### 🧩 `join()` Method
```javascript
text.split("").reverse().join("")
```
- **What it does**: Joins array elements into a string
- **Parameters**: Separator (empty string joins without separators)
- **Returns**: A combined string
- **In our code**: Converts ["r","a","d","a","r"] back to "radar"

## 🔍 RegEx Pattern Explained

<div align="center">
  <img src="https://img.shields.io/badge/RegEx-Pattern%20Breakdown-red?style=for-the-badge" alt="RegEx Pattern Breakdown" />
</div>

The regular expression `/[^A-Za-z0-9]/g` is crucial for accurate palindrome checking:

| Component | Symbol | Meaning |
|-----------|--------|---------|
| 📦 Character Class | `[ ]` | Defines a set of characters to match |
| 🚫 Negation | `^` | Inside a character class, means "NOT these characters" |
| 🔤 Letter Range | `A-Z` | All uppercase letters from A to Z |
| 🔡 Letter Range | `a-z` | All lowercase letters from a to z |
| 🔢 Number Range | `0-9` | All digits from 0 to 9 |
| 🌐 Global Flag | `g` | Apply the pattern throughout the entire string |

In plain English:
- ✨ This pattern finds any character that is NOT a letter or number
- 🗑️ The `replace()` method then removes these characters
- 📝 Result: "A man, a plan, a canal, Panama!" becomes "amanaplanacanalpanama"

## 🚀 Getting Started

1. Clone the repository
2. Open the `index.html` file in your browser
3. Enter a word or phrase in the input field
4. Click the "Check Palindrome" button
5. See the result displayed below the button

## 📁 Project Structure

```
palindrome-checker/
├── index.html      # HTML structure with input field and results display
├── style.css       # Styling for the dark-themed UI
└── script.js       # JavaScript code for palindrome checking logic
```

## 💡 Deep Dive: What Makes a Palindrome?

A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. Examples include:

- "radar"
- "A man, a plan, a canal, Panama!"
- "Madam, I'm Adam"
- "Race car"
- "No lemon, no melon"

Our application properly handles these cases by:
1. Removing all spaces, punctuation, and special characters
2. Ignoring letter case differences
3. Comparing only the alphanumeric characters

This approach ensures that phrases like "A man, a plan, a canal, Panama!" are correctly identified as palindromes despite their spaces and punctuation.

## 🔗 Tools for Testing and Learning RegEx

<div align="center">
  <img src="https://img.shields.io/badge/Tool-RegExr-yellow?style=for-the-badge" alt="RegExr" />
</div>

If you're interested in exploring regular expressions further, here are some excellent resources:

- 🔍 [RegExr](https://regexr.com/) - An online tool to learn, build, and test regular expressions
  - Live visual highlighting as you type
  - Detailed explanation of each part of your expression
  - Community patterns to learn from

- 🧪 [RegEx101](https://regex101.com/) - Another powerful RegEx testing tool with explanation features
  - Step-by-step match information
  - Performance analysis of your patterns
  - Reference tables for RegEx syntax

- 🎮 [RegEx Crossword](https://regexcrossword.com/) - Learn RegEx through fun puzzles
  - Interactive learning through gameplay
  - Gradually increasing difficulty levels
  - Great for visual learners

These tools can help you understand how our pattern `/[^A-Za-z0-9]/g` works and how to create your own patterns for different text processing needs.

## 🔄 Possible Enhancements

- Add support for checking palindromic numbers
- Implement real-time checking as the user types
- Add a history of recently checked words/phrases
- Include explanation of why a phrase is or isn't a palindrome
- Add support for checking palindromes in different languages
- Include examples of famous palindromes with a "Try This" button
- Add animations for the results display
- Implement a batch checker for multiple entries

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- Using regular expressions for text processing
- Manipulating strings with JavaScript methods
- Creating responsive UI elements with CSS
- Implementing interactive feedback for user actions
- Understanding palindrome verification logic
- Working with DOM elements and event handling

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Implement batch processing for multiple palindrome checks
- Add visualization of the comparison process
- Create a more elaborate UI with animations
- Add support for checking numerical palindromes
- Implement additional string manipulation features

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 7 of 10 - Palindrome Checker</p>
</div>