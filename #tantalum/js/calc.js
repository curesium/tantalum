// Function to calculate the numbers
function calc() {

  // The total amount of positions available
  let positionsInput = document.querySelector('[name="positions"]');

  // All of the different kind of characters possible
  let lowercaseInput = document.querySelector('[name="lowercase"]');
  let capitalInput = document.querySelector('[name="capital"]');
  let numbersInput = document.querySelector('[name="numbers"]');
  let charactersInput = document.querySelector('[name="characters"]');

  // Parsing all of the variables to intergers
  let positions = parseInt(positionsInput.value);

  let lowercase = parseInt(lowercaseInput.value);
  let capital = parseInt(capitalInput.value);
  let numbers = parseInt(numbersInput.value);
  let characters = parseInt(charactersInput.value);

  // Total amount of characters
  let total = lowercase + capital + numbers + characters;

  // The formula
  let combinations = positions * (positions - 1) * (positions - 2) * (positions - 3);

  let formula = combinations * lowercase * capital * numbers * characters * total ** 4;


  // Display the output
  document.querySelector('#outputText').innerHTML = formula
}



// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', calc)
