// Function to calculate the numbers
function calc() {

  // The total amount of positions available
  let lengthInput = document.querySelector('[name="positions"]');

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
  let charactersRequired = document.querySelector('[name="charactersRequired"]');

  // Parsing all of the variables to intergers
  let length = parseInt(positionsInput.value);

  let lowercase = parseInt(lowercaseInput.value);
  let capital = parseInt(capitalInput.value);
  let numbers = parseInt(numbersInput.value);
  let characters = parseInt(charactersInput.value);


  // Total amount of characters
  let total = lowercase + capital + numbers + characters;

  // Possible combinations
  let capitalPositions = ;
  let normalPositions = ;
  let numbersPositions = ;
  let charactersPositions = ;



  // 1112
  if (capitalRequired === 1) {
      capitalPositions = length;
      if (normalRequired === 1) {
          normalPositions = length - 1;
          if (numbersRequired === 1) {
              numbersPositions = length - 2;
               if (charactersRequired === 2) {
                      charactersPositions = ((lengt - 3) * (length - 4)) / ((charactersRequired) * (charactersRequired - 1))
              }
          }
      }
  }
  //1111
  if (capitalRequired === 1) {
      capitalPositions = length;
      if (normalRequired === 1) {
          normalPositions = length - 1;
          if (numbersRequired === 1) {
              numbersPositions = length - 2;
               if (charactersRequired === 1) {
                  charactersPositions= length - 3;
              }
          }
      }
  }
  //1121
  if (capitalRequired === 1) {
      capitalPositions = length;
      if (normalRequired === 1) {
          normalPositions = length - 2;
          if (numbersRequired === 2) {
              numbersPositions = ((length - 2) * (length - 3))/ ((number) * (number - 1))
              if (charactersRequired === 1) {
                  charactersPositions = length - 4;
              }
          }
      }
  }
  //1122
  if (capitalRequired === 1) {
      capitalPositions = length;
      if (normalRequired ===1) {
          normalPositions = length - 1;
          if (numbersRequired === 2) {
              numbersPositions = ((length - 2) * (length - 3))/ ((number) * (number - 1))
              if (charactersRequired === 2) {
                  charactersPositions = ((length - 4) * (length - 5)) / ((character) * (character - 1))
              }
          }
      }
  }
  //1211
  if (capitalRequired === 1) {
      capitalPositions = length;
      if (normalRequired === 2) {
          normalPositions = ((length - 1) * (length - 2)) / ((normal) * (normal -1))
          if (numbersRequired === 1) {
              numbersPositions = length - 3;
              if (charactersRequired === 1) {
                  charactersPositions = length - 4;
              }
          }
      }
  }
  //1221
  if (capitalRequired === 1) {
      capitalPositions = length;
      if (normalRequired === 2) {
           normalPositions = ((length - 1) * (length - 2)) / ((normal) * (normal -1))
           if (numbersRequired === 2) {
               numbersPositions = ((length - 3) * (length - 4)) / ((number) * (number - 1))
               if (charactersRequired === 1) {
                   charactersPositions = length - 5;
               }
           }
      }
  }
  //1222
  if (capitalRequired === 1) {
      capitalPositions = length;
      if (normal === 2) {
           norPos = ((length - 1) * (length - 2)) / ((normal) * (normal -1))
           if (number === 2) {
               numPos = ((length - 3) * (length - 4)) / ((number) * (number - 1))
               if (character === 2) {
                   chaPos = ((length - 5) * (length - 6)) / ((character) * (character - 1))
               }
           }
      }
  }

  // The formula
  let combinations = positions * (positions - 1) * (positions - 2) * (positions - 3);

  let formula = combinations * (lowercase ** lowercaseRequired) * (capital ** capitalRequired) * (numbers ** numbersRequired) *(characters ** charactersRequired) * (total ** totalRequired);


  // Display the output
  document.querySelector('#outputText').innerHTML = formula
}


// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', calc)
