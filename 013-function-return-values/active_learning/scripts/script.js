const enterANumberInput =  document.querySelector('#enter_a_number')
const computeSquareButton = document.querySelector('#compute_square')
const computeCubeButton = document.querySelector('#compute_cube')
const computeFactorialButton = document.querySelector('#compute_factorial')
const outputResultParagraph = document.querySelector('#output_result')

const number = enterANumberInput.value

computeSquareButton.addEventListener('click', () => {
    (number.length !== 0) ?  outputResultParagraph.textContent = `Result: Square of ${number} is ${squared(number)}` : outputResultParagraph.textContent = 'Result: Invalid result. Number cannot be empty'
})

computeCubeButton.addEventListener('click', () => {
    if (number.length !== 0) {
        outputResultParagraph.textContent = `Result: Cube of ${number} is ${cubed(number)}`
    } else {
        outputResultParagraph.textContent = 'Result: Invalid result. Number cannot be empty'
    }
})

computeFactorialButton.addEventListener('click', () => {
    if (number.length !== 0) {
        outputResultParagraph.textContent = `Result: Factorial of ${number} is ${factorial(number)}`
    } else {
        outputResultParagraph.textContent = 'Result: Invalid result. Number input cannot be empty'
    }
})


function squared(num) {
    return num * num;
}
  
function cubed(num) {
    return num * num * num;
}
  
function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
}