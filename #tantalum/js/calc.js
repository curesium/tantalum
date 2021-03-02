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

  const factorialize = function(num) {
      if (num === 0 || num === 1) { return 1 };
      for (let i = num - 1; i >= 1; i--) { num *= i; };
      return num;
  }
  
  // Total amount of characters
  let total = lowercase + capital + numbers + characters;
  // Total amount of required characters
  let totalRequired = lowercaseRequired + capitalRequired + numbersRequired + charactersRequired;
  let notRequired = length - totalRequired
  
   function errorCheck() {
    const errors = [];
    //Errors if Required is longer then total
    if (lowercaseRequired > length) { errors.push('E1-1'); }
    if (capitalRequired > length) { errors.push('E1-2'); }
    if (numbersRequired > length) { errors.push('E1-3'); }
    if (charactersRequired > length) { errors.push('E1-4'); }
    if (totalRequired > length) { errors.push('E1-5'); };
  
    if (errors.length === 5) { console.log('Well done! You collected them all!') }  
    return errors;
  }
  
  const errors = errorCheck()
  console.log(errors.length)
  if (errors.length !== 0) {
    let content = 'Errors:';
    for (let i = 0; i < errors.length; i++) { content += ' ' + errors[i]; }
    return content;
  };
 
  //length - requires
  let lengthC = length - capitalRequired
  let lengthCL = lengthC - lowercaseRequired
  let lengthCLN = lengthCL - numbersRequired

  const capitalPositions = (factorialize(length) / (factorialize(capitalRequired ) * factorialize(length - capitalRequired)))
  const lowercasePositions = (factorialize(lengthC) / (factorialize(lowercaseRequired) * factorialize(lengthC - lowercaseRequired)))
  const numbersPositions = (factorialize(lengthCL) / (factorialize(numbersRequired) * factorialize(lengthCL - numbersRequired)))
  const charactersPositions = (factorialize(lengthCLN) / (factorialize(charactersRequired) * factorialize(lengthCLN - charactersRequired)))
  const formula = capitalPositions * capital * lowercasePositions * lowercase * numbersPositions * numbers * charactersPositions * characters * total ** notRequired
  
  // Return the output
  return formula;
}

// For the submit button
let submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', tantalum.run);