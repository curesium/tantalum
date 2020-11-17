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
    // Total amount
  let length = parseInt(positionsInput.value);

    // Possible options
  let lowercase = parseInt(lowercaseInput.value);
  let capital = parseInt(capitalInput.value);
  let numbers = parseInt(numbersInput.value);
  let characters = parseInt(charactersInput.value);

  // Required characters
  let lowercaseRequired = parseInt(lowercaseRequiredInput.value);
  let capitalRequired = parseInt(capitalRequiredInput.value);
  let numbersRequired = parseInt(numbersRequiredInput.value);
  let charactersRequired = parseInt(numbersRequiredInput.value);


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

  if (capitalRequired === 0) {
      capitalPositions = 0;
  }
  if (capitalRequired === 1) {
      capitalPositions = length;
  }
  if (capitalRequired === 2 ) {
      capitalPositions = ((length) * (length - 1)) / ((capitalRequired) * (capitalRequired - 1));
  }
  if (lowercaseRequired === 0) {
      lowercasePositions = 0;
  }
  if (lowercaseRequired === 1) {
      lowercasePositions = length - capitalRequired;
  }
  if (lowercaseRequired === 2) {
      lowercasePositions = ((length - capitalRequired) * (length - capitalRequired - 1)) / ((lowercaseRequired) * (lowercaseRequired - 1));
  }
  if (numbersRequired === 0) {
      numbersPositions = 0;
  }
  if (numbersRequired === 1) {
      numbersPositions = length - capitalRequired - lowercaseRequired;
  }
  if (numbersRequired === 2) {
      numbersPositions = ((length - capitalRequired - lowercaseRequired) * (length - capitalRequired - lowercaseRequired - 1)) / ((numbersRequired) * (numbersRequired - 1));
  }
  if (charactersRequired === 0) {
      charactersPositions = 0;
  }
  if (charactersRequired === 1) {
      charactersPositions = length - capitalRequired - lowercaseRequired - numbersRequired;
  }
  if (charactersRequired === 2) {
      charactersPositions = ((length - capitalRequired - lowercaseRequired - numbersRequired) * (length - capitalRequired - lowercaseRequired - numbersRequired - 1)) / ((charactersRequired) * (charactersRequired - 1));
  }



  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions === 0) {
          combinations = numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = charactersPositions;
              if (charactersPositions === 0) {
                  combinations = 0;
              }
          }
      }
  }
  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions === 0) {
          combinations = numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = charactersPositions;
              }
          }
      }
  }
  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions === 0) {
          combinations = numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = numbersPositions * charactersPositions;
              if (charactersPositions === 0) {
                  combinations = numbersPositions;
              }
          }
      }
  }
  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions === 0) {
          combinations = numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = numbersPositions * charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = numbersPositions * charactersPositions;
              }
          }
      }
  }
  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = lowercasePositions * charactersPositions;
              if (charactersPositions === 0) {
                  combinations = lowercasePositions;
              }
          }
      }
  }
  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = lowercasePositions * charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = lowercasePositions * charactersPositions;
              }
          }
      }
  }
  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = lowercasePositions * numbersPositions * charactersPositions;
              if (charactersPositions === 0) {
                  combinations = lowercasePositions * numbersPositions;
              }
          }
      }
  }
  if (capitalPositions === 0) {
      combinations = lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = lowercasePositions * numbersPositions * charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = lowercasePositions * numbersPositions * charactersPositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions* charactersPositions;
      if (lowercasePositions === 0) {
          combinations = capitalPositions * numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = capitalPositions * charactersPositions;
              if (charactersPositions === 0) {
                  combinations = capitalPositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions === 0) {
          combinations = capitalPositions * numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = capitalPositions * charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = capitalPositions * charactersPositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions === 0) {
          combinations = capitalPositions * numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
              if (charactersPositions === 0) {
                  combinations = capitalPositions * lowercasePositions * numbersPositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions === 0) {
          combinations = capitalPositions * numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = capitalPositions * lowercasePositions * charactersPositions;
              if (charactersPositions === 0) {
                  combinations = capitalPositions * lowercasePositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions === 0) {
              combinations = capitalPositions * lowercasePositions * charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = capitalPositions * lowercasePositions * charactersPositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
              if (charactersPositions === 0) {
                  combinations = capitalPositions * lowercasePositions * numbersPositions;
              }
          }
      }
  }
  if (capitalPositions >= 1) {
      combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
      if (lowercasePositions >= 1) {
          combinations = capitalPositions	 * lowercasePositions * numbersPositions * charactersPositions;
          if (numbersPositions >= 1) {
              combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
              if (charactersPositions >= 1) {
                  combinations = capitalPositions * lowercasePositions * numbersPositions * charactersPositions;
              }
          }
      }
  }

  // The formula
  if (combinations === 0) {
      let formula = (lowercase ** lowercaseRequired) * (capital ** capitalRequired) * (numbers ** numbersRequired) *(characters ** charactersRequired) * (total ** (length - totalRequired));
  }
  else if (combinations >= 1) {
    let formula = combinations * (lowercase ** lowercaseRequired) * (capital ** capitalRequired) * (numbers ** numbersRequired) *(characters ** charactersRequired) * (total ** (length - totalRequired));
  }
  else {
    let formula = "error"
  }

  // Display the output
  document.querySelector('#outputText').innerHTML = formula
}


// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', calc)
