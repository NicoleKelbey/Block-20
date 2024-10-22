//create a variable that is the user input
//create an event for the button 
//when button is clicked the user input is pushed to the number bank



const addNumberButton = document.querySelector(`#numberbutton`);
addNumberButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  const userInput = document.querySelector(`#number`);



  if (userInput.value === `` || isNaN(userInput.value)) {
    return;
  }


  const numberOutput = document.querySelector(`#numberoutput`);




  const numberLI = document.createElement(`li`)
numberLI.id = `numberLI-${userInput.value}`;
numberLI.innerText = userInput.value;
numberOutput.append(numberLI);



  inputNumberArray.push( {value: userInput.value, element: numberLI });

  userInput.value = ``;

  
  const sortButtons = document.querySelector(`#sortButtons`);



  sortButtons.replaceWith(sortButtons.cloneNode(true));
  const newSortButtons = document.querySelector(`#sortButtons`);



  newSortButtons.addEventListener(`click`, (event) => {
  if (event.target.innerText === `Sort 1`) {



  if (inputNumberArray.length > 0) {
        const { value: currentNumber, element: currentElement } = inputNumberArray[0]
  


  if (currentNumber % 2 === 0) {
          const numberEvenOutput = document.querySelector('#evensoutput');
          const numberEvenLI = document.createElement('li');
          numberEvenLI.classList.add('evenNumber');
          numberEvenLI.innerText = currentNumber;
          numberEvenOutput.append(numberEvenLI);
    } else
    
    {
          const numberOddOutput = document.querySelector('#oddsoutput');
          const numberOddLI = document.createElement('li');
          numberOddLI.classList.add('oddNumber');
          numberOddLI.innerText = currentNumber;
          numberOddOutput.append(numberOddLI);
 }


  
        inputNumberArray.shift();
        currentElement.remove();
  
  } 



  } else if (event.target.innerText === `Sort All`) {
    


     while (inputNumberArray.length > 0) {
      const { value: currentNumber, element: currentElement } = inputNumberArray[0];
  

      
       if (currentNumber % 2 === 0) {
          const numberEvenOutput = document.querySelector('#evensoutput');
          const numberEvenLI = document.createElement('li');
          numberEvenLI.classList.add('evenNumber');
          numberEvenLI.innerText = currentNumber;
          numberEvenOutput.append(numberEvenLI);

  });

});