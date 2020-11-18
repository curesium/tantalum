// Function to calculate the numbers
function calc() {

  // The total amount of positions available
  let lengthInput = document.querySelector('[name="length"]');

  // All of the different kind of characters possible
    // Possible options
  let lowercaseInput = document.querySelector('[name="lowercase"]');
  let capitalInput = document.querySelector('[name="capital"]');
  let numbersInput = document.querySelector('[name="numbers"]');
  let charactersInput = document.querySelector('[name="characters"]');

  // Required characters
  let lowercaseRequiredInput = document.querySelector('[name="lowercaseRequired"]');
  let capitalRequiredInput = document.querySelector('[name="capitalRequired"]');
  let numbersRequiredInput = document.querySelector('[name="numbersRequired"]');
  let charactersRequiredInput = document.querySelector('[name="charactersRequired"]');

  // Parsing all of the variables to intergers
    // Total amount
  let length = parseInt(lengthInput.value);

    // Possible options
  let lowercase = parseInt(lowercaseInput.value);
  let capital = parseInt(capitalInput.value);
  let numbers = parseInt(numbersInput.value);
  let characters = parseInt(charactersInput.value);

  // Required characters
  let lowercaseRequired = parseInt(lowercaseRequiredInput.value);
  let capitalRequired = parseInt(capitalRequiredInput.value);
  let numbersRequired = parseInt(numbersRequiredInput.value);
  let charactersRequired = parseInt(charactersRequiredInput.value);


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
  if (combinations < 0){
    formula = "error"
  }

  // Display the output
  document.querySelector('#outputText').innerHTML = formula
}


// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', calc)
