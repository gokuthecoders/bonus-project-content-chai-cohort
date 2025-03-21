# Background Changer - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-9%20of%2010-blue?style=for-the-badge" alt="Project 9 of 10" />
  <img src="https://img.shields.io/badge/Skill-DOM%20Manipulation%20%26%20Randomization-brightgreen?style=for-the-badge" alt="DOM Manipulation & Randomization" />
</div>

## 📝 Project Overview

This is the ninth project in the Chai Cohort BONUS series - a Background Changer that allows users to dynamically alter the background of a webpage. The project includes two variations: one that changes the background color to a random RGB value (`background-color` folder) and another that switches the background to a random image from a predefined collection (`background-image` folder). It demonstrates DOM manipulation, event handling, and randomization techniques in JavaScript.

## ✨ Features

- Simple, interactive UI with a button trigger
- Random background color generation using RGB values
- Random background image selection from a predefined array
- Immediate visual feedback on button click
- Initial background image set on page load (image version)
- Responsive design potential with linked CSS

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Event Listeners
- Random Number Generation

## 🧠 Key Concepts Covered

- Accessing and modifying DOM elements
- Generating random numbers with `Math.random()`
- Event handling with `addEventListener`
- Manipulating CSS styles via JavaScript
- Working with arrays for image selection
- Basic file path management for images

## 🎨 How It Works

### Background Color Changer
The color-changing version generates a random RGB color and applies it to the container's background:

```javascript
const container = document.getElementById("container");
const backChanger = document.getElementById("backChanger");

backChanger.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
```

This script:
1. Selects the container and button elements from the DOM
2. Adds a click event listener to the button
3. Generates random values (0-255) for red, green, and blue
4. Applies the new RGB color to the container's `backgroundColor` style

### Background Image Changer
The image-changing version selects a random image from an array and sets it as the background:

```javascript
const container = document.getElementById("container");
const backChanger = document.getElementById("backChanger");

const imageCollection = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg",
    "12.jpg", "13.jpg", "14.jpg"
];

backChanger.addEventListener("click", () => {
    const randomImage = imageCollection[Math.round(Math.random() * imageCollection.length)];
    container.style.backgroundImage = `url(./images/${randomImage})`;
});

const randomImage = imageCollection[Math.round(Math.random() * imageCollection.length)];
container.style.backgroundImage = `url(./images/${randomImage})`;
```

This script:
1. Defines an array of image filenames
2. Sets an initial random background image on page load
3. Adds a click event listener to the button
4. Selects a random image from the array on each click
5. Updates the container's `backgroundImage` style with the selected image

## 💻 JavaScript Method Deep Dive

<div align="center">
  <img src="https://img.shields.io/badge/Method-Math.random()-purple?style=for-the-badge" alt="Math.random() Method" />
</div>

### 🎲 `Math.random()` Method
```javascript
Math.random()
```
- **What it does**: Generates a random number between 0 (inclusive) and 1 (exclusive)
- **Parameters**: None
- **Returns**: A floating-point number
- **In our code**: Used to select random RGB values or array indices

<div align="center">
  <img src="https://img.shields.io/badge/Method-Math.floor()-orange?style=for-the-badge" alt="Math.floor() Method" />
</div>

### 📉 `Math.floor()` Method
```javascript
Math.floor(Math.random() * 255)
```
- **What it does**: Rounds a number down to the nearest integer
- **Parameters**: A number
- **Returns**: An integer
- **In our code**: Ensures RGB values are whole numbers between 0 and 255

<div align="center">
  <img src="https://img.shields.io/badge/Property-style-blue?style=for-the-badge" alt="style Property" />
</div>

### 🎨 `style` Property
```javascript
container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
```
- **What it does**: Accesses or sets inline CSS styles of an element
- **Parameters**: CSS property value
- **Returns**: The style object (when getting) or applies the style (when setting)
- **In our code**: Changes the background color or image dynamically

## 🚀 Getting Started

1. Clone the repository or navigate to the project folder (`09-background-color-changer`).
2. For the **Background Color Changer**:
   - Open `background-color/01_index.html` in your browser.
   - Click the "Change Background Color" button to see the effect.
3. For the **Background Image Changer**:
   - Ensure the `background-image/images/` folder contains the 14 `.jpg` files listed in `script.js`.
   - Open `background-image/index.html` in your browser.
   - Click the "Change Background Image" button to see the effect.

## 📁 Project Structure

```
09-background-color-changer/
├── background-color/
│   ├── 01_index.html     # HTML structure for background color changer
│   ├── 01_script.js      # JS for background color changer
│   └── style.css         # Styling for background color changer
└── background-image/
    ├── images/           # Folder containing 1.jpg to 14.jpg
    ├── index.html        # HTML structure for background image changer
    ├── script.js         # JS for background image changer
    └── style.css         # Styling for background image changer
```

## 💡 Deep Dive: Randomization in Action

The project uses randomization to create a dynamic user experience:
- **Color Version**: Generates random RGB values (0-255) for infinite color possibilities
- **Image Version**: Selects from a finite set of 14 images, ensuring variety without overwhelming complexity
- Both versions rely on `Math.random()` to introduce unpredictability, making each click visually unique

## 🔄 Possible Enhancements

- Add a toggle between color and image modes in a single app
- Include a preview of the next color/image before applying
- Add transition animations for smoother changes
- Allow users to upload their own images
- Implement a history of recent backgrounds
- Add keyboard shortcuts for changing backgrounds
- Include a color picker alongside randomization

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- Manipulating DOM elements dynamically
- Using JavaScript for randomization
- Handling user interactions with event listeners
- Applying CSS styles programmatically
- Managing arrays and file paths
- Creating simple, interactive web applications

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Combine both color and image changers into one UI
- Add a slider to control color intensity
- Implement a favorites system for saving preferred backgrounds
- Add sound effects on background change
- Create a mobile-friendly layout

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 9 of 10 - Background Changer</p>
</div>

---