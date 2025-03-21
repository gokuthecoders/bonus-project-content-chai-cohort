# Character Counter - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-8%20of%2010-blue?style=for-the-badge" alt="Project 8 of 10" />
  <img src="https://img.shields.io/badge/Skill-Text%20Analysis%20%26%20DOM%20Manipulation-brightgreen?style=for-the-badge" alt="Text Analysis & DOM Manipulation" />
</div>

## 📝 Project Overview

This is the eighth project in the Chai Cohort BONUS series - a Character Counter that provides real-time analysis of text input, counting characters, words, and unique words. The project demonstrates JavaScript string manipulation, regular expression usage, and dynamic DOM updates to create an intuitive text analysis tool.

## ✨ Features

- Clean, gradient-themed UI with responsive design
- Real-time character counting with 200 character limit
- Color-coded feedback based on character count (green, orange, red)
- Warning message when character limit is exceeded
- Word count with unique word identification
- Smooth transitions and visual feedback
- Mobile-responsive layout with adaptive sizing

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Regular Expressions (RegEx)
- DOM Manipulation
- Object Manipulation
- CSS Gradients and Transitions
- Media Queries for Responsiveness

## 🧠 Key Concepts Covered

- Text analysis and processing in real-time
- Regular expressions for text normalization
- Object property counting and manipulation
- DOM manipulation for visual feedback
- Event handling with input events
- Responsive design techniques
- Color-coded user feedback

## 🎨 How It Works

### Text Analysis with JavaScript
The application uses a combination of string methods and object manipulation to analyze text input:

```javascript
function countText(){
    const charCountValue = textInput.value.length;

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
    
    countWord.forEach(element => {
        obj[element] = (obj[element] || 0) + 1
    });

    let uniqueWordNumber = Object.keys(obj).length;
    
    countUniqueWord.innerText = `${uniqueWordNumber} unique / ${countWord.length} word`
}
```

This algorithm works by:
1. Counting the total number of characters in the input
2. Providing color-coded feedback based on the character limit (200 characters)
3. Normalizing whitespace using the RegEx pattern `/\s\s+/g`
4. Splitting the text into words
5. Using an object to track each unique word and its frequency
6. Calculating the total number of words and unique words
7. Updating the UI with real-time statistics

## 💻 String Method Deep Dive

<div align="center">
  <img src="https://img.shields.io/badge/Method-replace()-purple?style=for-the-badge" alt="replace() Method" />
</div>

### 🔄 `replace()` Method
```javascript
const countWord = textInput.value.replace(/\s\s+/g , ' ').split(" ");
```
- **What it does**: Replaces text that matches a pattern with new text
- **Parameters**: Pattern (RegEx), replacement string
- **Returns**: New string with replacements
- **In our code**: Normalizes multiple whitespaces to single spaces

<div align="center">
  <img src="https://img.shields.io/badge/Method-split()-orange?style=for-the-badge" alt="split() Method" />
</div>

### 🔪 `split()` Method
```javascript
textInput.value.replace(/\s\s+/g , ' ').split(" ")
```
- **What it does**: Splits a string into an array of substrings
- **Parameters**: Separator (space character splits by words)
- **Returns**: Array of words
- **In our code**: Converts "hello world" into ["hello", "world"]

<div align="center">
  <img src="https://img.shields.io/badge/Method-Object.keys()-blue?style=for-the-badge" alt="Object.keys() Method" />
</div>

### 🔑 `Object.keys()` Method
```javascript
let uniqueWordNumber = Object.keys(obj).length;
```
- **What it does**: Returns an array of a given object's property names
- **Parameters**: The object to analyze
- **Returns**: Array of keys from the object
- **In our code**: Gets all unique words as keys from our frequency object

## 🔍 RegEx Pattern Explained

<div align="center">
  <img src="https://img.shields.io/badge/RegEx-Pattern%20Breakdown-red?style=for-the-badge" alt="RegEx Pattern Breakdown" />
</div>

The regular expression `/\s\s+/g` is essential for accurate word counting:

| Component | Symbol | Meaning |
|-----------|--------|---------|
| 🔍 Pattern Start | `/` | Begins the RegEx pattern |
| 🌌 Whitespace | `\s` | Matches any whitespace character (spaces, tabs, line breaks) |
| 🔁 Quantifier | `\s+` | Matches one or more additional whitespace characters |
| 🌐 Global Flag | `g` | Apply the pattern throughout the entire string |
| 🔍 Pattern End | `/` | Ends the RegEx pattern |

In plain English:
- ✨ This pattern finds any occurrence of two or more consecutive whitespace characters
- 🔄 The `replace()` method then normalizes these to a single space
- 📝 Result: "Hello    world" becomes "Hello world"

## 🚀 Getting Started

1. Clone the repository
2. Open the `index.html` file in your browser
3. Start typing in the textarea
4. Watch the character count, word count, and unique word count update in real-time
5. Notice the color changes as you approach and exceed the character limit

## 📁 Project Structure

```
character-counter/
├── index.html      # HTML structure with textarea and counters
├── style.css       # Styling with gradient background and responsive design
└── script.js       # JavaScript code for text analysis and DOM updates
```

## 💡 Deep Dive: Word and Character Analysis

The application performs several types of text analysis:

1. **Character Counting**: Simply counts the total number of characters typed
   - Changes color based on proximity to the limit:
     - Green: Below limit
     - Orange: At limit
     - Red: Exceeding limit

2. **Word Counting**: Counts the total number of words
   - Uses RegEx to normalize spacing
   - Splits text on spaces to identify individual words

3. **Unique Word Analysis**: Identifies and counts unique words
   - Creates an object with words as keys
   - Tracks frequency of each word
   - Calculates unique word count using `Object.keys().length`

This multi-faceted approach gives users a comprehensive analysis of their text input.

## 🔗 Tools for Further Learning

<div align="center">
  <img src="https://img.shields.io/badge/Tool-MDN%20Web%20Docs-yellow?style=for-the-badge" alt="MDN Web Docs" />
</div>

If you're interested in exploring the concepts used in this project further:

- 📚 [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  - Complete documentation on JavaScript string manipulation
  - Examples and detailed explanations
  - Browser compatibility information

- 🔍 [RegExr](https://regexr.com/)
  - Interactive tool for testing and learning regular expressions
  - Real-time visualization and explanation
  - Community pattern library

- 🧮 [JavaScript Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - Comprehensive guide to object manipulation in JavaScript
  - Methods for analyzing and transforming objects
  - Examples of common object operations

## 🔄 Possible Enhancements

- Add character density visualization (which characters are used most)
- Implement sentence counting and analysis
- Add readability metrics (Flesch-Kincaid, etc.)
- Include reading time estimation
- Add support for markdown or rich text formatting
- Implement text statistics (average word length, etc.)
- Create a "copy to clipboard" function for the analysis results
- Add support for different character limits based on user preference
- Implement a "word frequency" visualization

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- Building real-time text analysis tools
- Using regular expressions for text normalization
- Manipulating JavaScript objects for data tracking
- Creating responsive UI elements with CSS
- Implementing color-coded feedback systems
- Working with DOM elements and input events
- Designing mobile-responsive interfaces

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Implement additional text statistics
- Add export functionality for analysis results
- Create visualizations for word frequency
- Improve accessibility features
- Add support for multiple languages
- Implement configurable character limits

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 8 of 10 - Character Counter</p>
</div>