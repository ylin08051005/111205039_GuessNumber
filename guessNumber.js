// Global variables
let secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {
  // Local variable
  let userGuess = parseInt(document.getElementById("userGuess").value, 10);
  let resultElement = document.getElementById("result");

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    // Correct guess
    resultElement.innerText = "Congratulations! You guessed the correct number!";
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");

    // Generate a new random number for the next round
    secretNumber = generateRandomNumber();

    // Clear the input field for the next guess
    document.getElementById("userGuess").value = "";
  } else {
    // Incorrect guess
    resultElement.innerText = "Sorry, try again!";
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
  }
}

// Function to show image and play sound
function showImageAndPlaySound(imageFileName, soundFileName) {
  let imageElement = document.createElement("img");
  imageElement.src = imageFileName;

  let soundElement = document.createElement("audio");
  soundElement.src = soundFileName;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
