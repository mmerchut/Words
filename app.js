// app.js
import words from './words.js'; // Import the words array from the words.js file

// Select the DOM elements to display the word and translation, and buttons
const wordEl = document.querySelector('.word');
const translationEl = document.querySelector('.translation');
const showAnswerBtn = document.querySelector('.show-answer');
const nextWordBtn = document.querySelector('.next-word');

let currentWordIndex = 0; // Initialize the index to track the current word

// Function to display the current word
function showWord() {
  const currentWord = words[currentWordIndex]; // Get the current word from the words array
  wordEl.innerText = currentWord.word; // Set the word element text to the current word
  translationEl.innerText = ''; // Clear the translation display
}

// Function to show the translation of the current word
function showTranslation() {
  const currentWord = words[currentWordIndex]; // Get the current word
  translationEl.innerText = currentWord.translation; // Set the translation element text to the current translation
}

// Function to move to the next word
function nextWord() {
  currentWordIndex = (currentWordIndex + 1) % words.length; // Increment index and wrap around if at the end
  showWord(); // Call the showWord function to display the new word
}

// Event listeners for button clicks
showAnswerBtn.addEventListener('click', showTranslation); // Show translation when answer button is clicked
nextWordBtn.addEventListener('click', nextWord); // Move to the next word when next button is clicked

// Initialization: Show the first word on page load
showWord();
