// Comparison operators

const myButton = document.querySelector('.comparison_operator_conditionals > button');
const myParagraph = document.querySelector('.comparison_operator_conditionals > p');

myButton.addEventListener('click', updateButton);

function updateButton() {
    if (myButton.textContent === 'Start machine') {
        myButton.textContent = 'Stop machine';
        myParagraph.textContent = 'The machine has started!';
    } else {
        myButton.textContent = 'Start machine';
        myParagraph.textContent = 'The machine is stopped.';
    }
}

// Test your skills: Math

// Task 1

const number1Task1 = 4;
const number2Task1 = 8;
const number3Task1 = 12;
const number4Task1 = 8;

let additionResultTask1 = number1Task1 + number2Task1;
let subtractionResultTask1 = number3Task1 - number4Task1;

const finalResultTask1 = additionResultTask1 *= subtractionResultTask1;

const evenOddResultTask1 = finalResultTask1 % 2;

const task1 = document.querySelector('.task_1');

const task1Paragraph1 = document.createElement('p');

const finalResultCheckTask1 = finalResultTask1 === 48 ? `Yes, well done!` : `No, it is ${finalResultTask1}`;

task1Paragraph1.textContent = `Is the final result 48? ${finalResultCheckTask1}`;

task1.appendChild(task1Paragraph1);


// Task 2

// Final result should be 4633.33
// Add/update your code here

let result1Task2 = 7 + 13 / 9 + 7;
let result2Task2 = 100 / 2 * 6;

result1Task2 *= result2Task2;

const finalResultTask2 = result1Task2.toFixed(2);

const finalNumberTask2 = Number(finalResultTask2);

// Don't edit the code below here!

const task2 = document.querySelector('.task_2');

const task2Paragraph1 = document.createElement('p');
task2Paragraph1.textContent = `Your finalResult is ${finalResultTask2}`;
const task2Paragraph2 = document.createElement('p');
const finalNumberCheckTask2 = isNaN(finalNumberTask2) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
task2Paragraph2.textContent = finalNumberCheckTask2;

task2.appendChild(task2Paragraph1);
task2.appendChild(task2Paragraph2);


// Task 3 

// Statement 1: The elephant weighs less than the mouse
const elephantWeightTask3 = 1000;
const mouseWeightTask3 = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeightTask3 = 2;
const duckHeightTask3 = 0.3;

// Statement 3: The two passwords match
const password1Task3 = 'stromboli';
const password2Task3 = 'stROmBoLi';

// Add your code here

const weightComparisonTask3 = elephantWeightTask3 < mouseWeightTask3;

const heightComparisonTask3 = ostrichHeightTask3 > duckHeightTask3;

const passwordMatchTask3 = password1Task3 === password2Task3;

// Don't edit the code below here!

const task3 = document.querySelector('.task_3');

const paragraph1Task3 = document.createElement('p');
const paragraph2Task3 = document.createElement('p');
const paragraph3Task3 = document.createElement('p');

const weightTestTask3 = weightComparisonTask3 ? 'True — elephants do weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
const heightTestTask3 = heightComparisonTask3 ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
const passwordTestTask3 = passwordMatchTask3 ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

paragraph1Task3.textContent = weightTestTask3;
task3.appendChild(paragraph1Task3);
paragraph2Task3.textContent = heightTestTask3;
task3.appendChild(paragraph2Task3);
paragraph3Task3.textContent = passwordTestTask3;
task3.appendChild(paragraph3Task3);
