// Variable example

const withVariableButtonA = document.querySelector('.variable_example #button_a');
const withVariableHeadingA = document.querySelector('.variable_example #heading_a');

withVariableButtonA.onclick = () => {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to meet you!`);
    withVariableHeadingA.textContent = `Welcome ${name}`;
};


// Variable example

const withoutVariableButtonA = document.querySelector('.without_variable_example #button_a');
const withoutVariableHeadingA = document.querySelector('.without_variable_example #heading_a');

withoutVariableButtonA.onclick = () => {
    alert(`Hello ${prompt('What is your name?')}, nice to meet you!`);
    withoutVariableHeadingA.textContent = `Welcome ${prompt('What is your name?')}`;
};

// Test your skills: variables

// Task 1

let task1MyName = prompt("What is your name?");
let task1MyAge = Number(prompt("How old are you?"));

const task1Paragraph1 = document.createElement('p');
task1Paragraph1.textContent = `Name: ${task1MyName}`;

const task1Paragraph2 = document.createElement('p');
task1Paragraph2.textContent = `Age: ${task1MyAge}`;

const task1Section = document.querySelector('.task-1 > section');
task1Section.appendChild(task1Paragraph1);
task1Section.appendChild(task1Paragraph2);

// Task 2

const task2Paragraph1 = document.createElement('p');

const task2Section = document.querySelector('.task-2 > section');

let currentYear = new Date().getFullYear();
task2Paragraph1.innerHTML = `Hi ${task1MyName}, in the year 2050 you'll be ${task1MyAge + 2050 - currentYear}!`;
task2Section.appendChild(task2Paragraph1)


// Task 3

const task3Paragraph1 = document.createElement('p');
task3Paragraph1.innerHTML = `Hi ${task1MyName},`

const task3Paragraph2 = document.createElement('p');
task3Paragraph2.innerHTML = `Right now you're ${task1MyAge}. In 20 years you'll be ${task1MyAge + 20}.`

const task3Section = document.querySelector('.task-3 > section');
task3Section.appendChild(task3Paragraph1)
task3Section.appendChild(task3Paragraph2)






