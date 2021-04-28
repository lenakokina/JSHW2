

let operator = prompt('What arithmetic action would you like to perfofm?','');

let firstNumber = +prompt('enter the first number', '');

let secondNumber = +prompt('enter the second number', '');
let result;
     
  // if (operator === '+') {
  //    alert( ` ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} ` );
  //    }
  // else if (operator === '-')
  //    {
  //   alert( ` ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber} ` );
  //    }
  // else if (operator === '*') { alert( ` ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} ` );
  //    }
  // else if (operator === '/')
  //    {
  //   alert( ` ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber} ` );
  //   };

  if (operator === '+') {
    result = firstNumber + secondNumber;
    }
 else if (operator === '-')
 {
  result = firstNumber - secondNumber;
  }
 else if (operator === '*') {
  result = firstNumber * secondNumber;
  }
 else if (operator === '/')
 {
  result = firstNumber / secondNumber;
  };

  alert( ` ${firstNumber}${operator}${secondNumber}=${result} ` );



