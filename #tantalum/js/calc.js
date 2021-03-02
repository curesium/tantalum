let tantalum = [];

tantalum.run = function() {

  // The total amount of positions available
  let length = parseInt(document.querySelector('[name="length"]').value);

  // All of the different kind of characters possible
    // Possible options
  let lowercase = parseInt(document.querySelector('[name="lowercase"]').value);
  let capital = parseInt(document.querySelector('[name="capital"]').value);
  let numbers = parseInt(document.querySelector('[name="numbers"]').value);
  let characters = parseInt(document.querySelector('[name="characters"]').value);

  // Required characters
  let lowercaseRequired = parseInt(document.querySelector('[name="lowercaseRequired"]').value);
  let capitalRequired = parseInt(document.querySelector('[name="capitalRequired"]').value);
  let numbersRequired = parseInt(document.querySelector('[name="numbersRequired"]').value);
  let charactersRequired = parseInt(document.querySelector('[name="charactersRequired"]').value);

  // Replace empty strings with predetermined values
  if (isNaN(length)) {
    length = 8
    console.log('Length is empty')
  }

  if (isNaN(lowercase)) {
    lowercase = 26
    console.log('Lowercase is empty')
  }

  if (isNaN(capital)) {
    capital = 26
    console.log('Capital is empty')
  }

  if (isNaN(numbers)) {
    numbers = 10
    console.log('Numbers is empty')
  }

  if (isNaN(characters)) {
    characters = 19
    console.log('Characters is empty')
  }

  if (isNaN(lowercaseRequired)) {
    lowercaseRequired = 1
    console.log('Required lowercase is empty')
  }

  if (isNaN(capitalRequired)) {
    capitalRequired = 1
    console.log('Required capital is empty')
  }

  if (isNaN(numbersRequired)) {
    numbersRequired = 1
    console.log('Required numbers is empty')
  }

  if (isNaN(charactersRequired)) {
    charactersRequired = 1
    console.log('Required characters is empty')
  }

  const output = tantalum.calc(length, lowercase, capital, numbers, characters, lowercaseRequired, capitalRequired, numbersRequired, charactersRequired);
  document.querySelector('#outputText').innerHTML = output;
}

// Function to calculate the numbers
tantalum.calc = function(length, lowercase, capital, numbers, characters, lowercaseRequired, capitalRequired, numbersRequired, charactersRequired) {


  // Total amount of characters
  let total = lowercase + capital + numbers + characters;

  // Total amount of required characters
  let totalRequired = lowercaseRequired + capitalRequired + numbersRequired + charactersRequired;

  // Possible combinations
  let capitalPositions;
  let lowercasePositions;
  let numbersPositions;
  let charactersPositions;

  let combinations;

  let formula;

  let capitalPositionsDef;
  let lowercasePositionsDef;
  let numbersPositionsDef;
  let charactersPositionsDef;

  //Errors if Required is longer then total
  if (lowercaseRequired > length) { formula = "Error: E1-1"; }
  if (capitalRequired > length) { formula = "Error: E1-2"; }
  if (numbersRequired > length) { formula = "Error: E1-3"; }
  if (charactersRequired > length) { formula = "Error: E1-4"; }
  if (totalRequired > length) { formula = "Error: E1-5"; };

  // Errors if Required is more than 2
  if (lowercaseRequired > 3) { formula = "Error: E2-1"; }
  if (capitalRequired > 3) { formula = "Error: E2-2"; }
  if (numbersRequired > 3) { formula = "Error: E2-3"; }
  if (charactersRequired > 3) { formula = "Error: E2-4"; }

  if (capitalRequired === 0) {
    capitalPositions = 0;
    capitalPositionsDef = 0;
  }

  if (capitalRequired === 1) {
    capitalPositions = length;
    capitalPositionsDef = 1;
  }
  if (capitalRequired === 2 ) {
    capitalPositions = ((length) * (length - 1)) / ((capitalRequired) * (capitalRequired - 1));
    capitalPositionsDef = 1;
  }
  if (capitalRequired === 3) {
    capitalPositions = ((length) * (length - 1) * (length - 2)) / ((capitalRequired) * (capitalRequired - 1) * (capitalRequired - 2));
    capitalPositionsDef = 1;
  }
  if (lowercaseRequired === 0) {
    lowercasePositions = 0;
    lowercasePositionsDef = 0;
  }
  if (lowercaseRequired === 1) {
    lowercasePositions = length - capitalRequired;
    lowercasePositionsDef = 1;
  }
  if (lowercaseRequired === 2) {
    lowercasePositions = ((length - capitalRequired) * (length - capitalRequired - 1)) / ((lowercaseRequired) * (lowercaseRequired - 1));
    lowercasePositionsDef = 1;
  }
  if (lowercaseRequired === 3) {
    lowercasePositions = ((length - capitalRequired) * (length- capitalRequired - 1) * (length - capitalRequired - 2)) / ((lowercaseRequired) * (lowercaseRequired - 1) * (lowercaseRequired - 2));
    lowercasePositionsDef = 1;
  }
  if (numbersRequired === 0) {
    numbersPositions = 0;
    numbersPositionsDef = 0;
  }
  if (numbersRequired === 1) {
    numbersPositions = length - capitalRequired - lowercaseRequired;
    numbersPositionsDef = 1;
  }
  if (numbersRequired === 2) {
    numbersPositions = ((length - capitalRequired - lowercaseRequired) * (length - capitalRequired - lowercaseRequired - 1)) / ((numbersRequired) * (numbersRequired - 1));
    numbersPositionsDef = 1;
  }
  if (numbersRequired === 3) {
    numbersPositions = ((length - capitalRequired - lowercaseRequired) * (length - capitalRequired - lowercaseRequired - 1) * (length - capitalRequired - lowercaseRequired - 2)) / ((numbersRequired) * (numbersRequired - 1) * (numbersRequired - 2));
    numbersPositionsDef = 1;
  }
  if (charactersRequired === 0) {
    charactersPositions = 0;
    charactersPositionsDef = 0;
  }
  if (charactersRequired === 1) {
    charactersPositions = length - capitalRequired - lowercaseRequired - numbersRequired;
    charactersPositionsDef = 1;
  }
  if (charactersRequired === 2) {
    charactersPositions = ((length - capitalRequired - lowercaseRequired - numbersRequired) * (length - capitalRequired - lowercaseRequired - numbersRequired - 1)) / ((charactersRequired) * (charactersRequired - 1));
    charactersPositionsDef = 1;
  }
  if (charactersRequired === 3) {
    charactersPositions = ((length - capitalRequired - lowercaseRequired - numbersRequired) * (length - capitalRequired - lowercaseRequired - numbersRequired - 1) * (length - capitalRequired - lowercaseRequired - numbersRequired - 2)) / ((charactersRequired) * (charactersRequired - 1) * (charactersRequired - 2));
    charactersPositionsDef = 1;
  }

  combinations = (capitalPositions ** capitalPositionsDef) * (lowercasePositions ** lowercasePositionsDef) * (numbersPositions ** numbersPositionsDef) * (charactersPositions ** charactersPositionsDef)


  // The formula
  if (combinations === 0) {
      formula = (lowercase ** lowercaseRequired) * (capital ** capitalRequired) * (numbers ** numbersRequired) *(characters ** charactersRequired) * (total ** (length - totalRequired));
  }
  if (combinations >= 1) {
    formula = combinations * (lowercase ** lowercaseRequired) * (capital ** capitalRequired) * (numbers ** numbersRequired) *(characters ** charactersRequired) * (total ** (length - totalRequired));
  }
  if (combinations < 0){ formula = "error"; }

  // Return the output
  return formula;
}


// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', tantalum.run);
