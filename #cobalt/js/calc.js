// Function to calculate the numbers
function calc() {
  let slots = document.querySelector('[name="slots"]');
  let characters = document.querySelector('[name="characters"]');

  let count = Math.pow(parseInt(slots.value), parseInt(characters.value));
//  let count = parseInt(slots.value) + parseInt(characters.value);
//  let count = Math.pow(5, 2)

  document.querySelector('#outputText').innerHTML = count
}

// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', calc)
