// Function to calculate the numbers
function calc() {

  // The total amount of positions available
  let positions = document.querySelector('[name="positions"]');
  let slots = parseInt(positions.value);
//  let positions = 10

  // All of the different kind of characters possible
  let lowercase = document.querySelector('[name="lowercase"]');
  let capital = document.querySelector('[name="capital"]');
  let number = document.querySelector('[name="number"]');
  let characters = document.querySelector('[name="characters"]');

  // Total amount of characters
  let total = parseInt(lowercase.value) + parseInt(capital.value) + parseInt(number.value) + parseInt(characters.value)
//  let total = 2

  // The formula
  let count = Math.pow(slots, total);

  // Display the output
  document.querySelector('#outputText').innerHTML = count
}



// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', calc)
