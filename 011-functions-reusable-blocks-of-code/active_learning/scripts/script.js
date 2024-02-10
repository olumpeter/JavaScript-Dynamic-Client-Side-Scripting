// Built-in browser functions

// Manipulating a text string
const builtInBrowserFunctionsDiv = document.querySelector('.manipulating_a_text_string');
const builtInMyText = 'I am a string';
const builtInParagraph1 = document.createElement('p');
builtInParagraph1.textContent = `Original text string: ${builtInMyText}`;
builtInBrowserFunctionsDiv.appendChild(builtInParagraph1);

const builtInParagraph2 = document.createElement('p');
builtInParagraph2.textContent = `Manipulated text string: ${String(builtInMyText).replace('string', 'sausage')}`;
builtInBrowserFunctionsDiv.appendChild(builtInParagraph2);

// Manipulating an array
const manipulatingAnArrayDiv = document.querySelector('.manipulating_an_array');

const manipulatingMyArray = ['I', 'love', 'chocolate', 'frogs'];
const manipulatingAnArrayParagraph1 = document.createElement('p');
manipulatingAnArrayParagraph1.textContent = `My Array: ${manipulatingMyArray}`;
manipulatingAnArrayDiv.appendChild(manipulatingAnArrayParagraph1);

const manipulatingAnArrayParagraph2 = document.createElement('p');
manipulatingAnArrayParagraph2.textContent = `Manipulated array 1: ${manipulatingMyArray.join(' ')}`;
manipulatingAnArrayDiv.appendChild(manipulatingAnArrayParagraph2);

const manipulatingAnArrayParagraph3 = document.createElement('p');
manipulatingAnArrayParagraph3.textContent = `Manipulated array 2: ${manipulatingMyArray.join(', ')}`;
manipulatingAnArrayDiv.appendChild(manipulatingAnArrayParagraph3);

// Generating a random number

const generatingARandomNumberDiv = document.querySelector('.generating_a_random_number');
const generatingARandomParagraph1 = document.createElement('p');
generatingARandomParagraph1.textContent = `A random number between 1 to 10: ${Math.round(Math.random() * 10)}`;
generatingARandomNumberDiv.appendChild(generatingARandomParagraph1);

// Invoking functions

const invokingFunctionsDiv = document.querySelector('.invoking_functions');
const sayHelloButton = document.querySelector('#say_hello');

sayHelloButton.addEventListener('click', sayHello);

// Hoisted function
function sayHello() {
    const sayHelloName = prompt("Who do you want to say hello to? ");
    alert(`Hello ${sayHelloName}!`);
}

// Function parameters

// Optional parameters

const optionalParametersDiv = document.querySelector('.optional_parameters');

const optionalParameterMyArray = ['I', 'love', 'chocolate', 'frogs'];
const optionalParametersParagraph1 = document.createElement('p');
optionalParametersParagraph1.textContent = `My Array: ${optionalParameterMyArray}`;
optionalParametersDiv.appendChild(optionalParametersParagraph1);

const optionalParametersParagraph2 = document.createElement('p');
optionalParametersParagraph2.textContent = `Manipulated array 2: ${optionalParameterMyArray.join()}`;
optionalParametersDiv.appendChild(optionalParametersParagraph2);

// Default parameter

const defaultParametersDiv = document.querySelector('.default_parameters');
const defaultParametersParagraph1 = document.querySelector('#default_parameters_paragraph_1');
const defaultParametersParagraph2 = document.querySelector('#default_parameters_paragraph_2');

function defaultParameterSayHello(defaultParametersSayHelloName = "Peter") {
    return `Hello ${defaultParametersSayHelloName}!`;
}

defaultParametersParagraph1.textContent = defaultParameterSayHello("Mike");
defaultParametersDiv.appendChild(defaultParametersParagraph1);

defaultParametersParagraph2.textContent = defaultParameterSayHello();
defaultParametersDiv.appendChild(defaultParametersParagraph2);

// Anonymous function example

const anonymousFunctionExampleDiv = document.querySelector('.anonymous_function_example');
const anonymousFunctionExampleParagraph = document.querySelector('.anonymous_function_example > p');
const anonymousFunctionExampleInput = document.querySelector('.anonymous_function_example > input');

anonymousFunctionExampleInput.addEventListener('keydown', function (event) {
    anonymousFunctionExampleParagraph.textContent = `You pressed "${event.key}".`;
});


// Arrow functions example 1

const arrowFunctionsExample1Div = document.querySelector('.arrow_functions_example_1');
const arrowFunctionsExample1Paragraph = document.querySelector('.arrow_functions_example_1 > p');
const arrowFunctionsExample1Input = document.querySelector('.arrow_functions_example_1 > input');

arrowFunctionsExample1Input.addEventListener('keydown', (event) => {
    arrowFunctionsExample1Paragraph.textContent = `You pressed "${event.key}".`;
});

// Arrow functions example 2

const arrowFunctionsExample2Div = document.querySelector('.arrow_functions_example_2');
const arrowFunctionsExample2Paragraph1 = document.querySelector('#arrow_functions_example_2_paragraph1');
const arrowFunctionsExample2Array = [2, 5, 7, 3, 9, 8, 4];
arrowFunctionsExample2Paragraph1.textContent = `Original Array: ${arrowFunctionsExample2Array}`;
const arrowFunctionsExample2Paragraph2 = document.querySelector('#arrow_functions_example_2_paragraph2');
arrowFunctionsExample2Paragraph2.textContent = `Square of the Original Array: ${arrowFunctionsExample2Array.map(x => x ** 2)}`;

// Function scope and conflicts

const companyNameButton = document.querySelector('#company_name_button');
const greetingParagraph = document.querySelector('#greeting_paragraph');
const companyNameParagraph = document.querySelector('#company_name_paragraph');

companyNameButton.addEventListener('click', () => {
    greetingParagraph.textContent = `${greeting()} ${sayCompanyName()}`
    
    function greeting() {
        const name = prompt("What's your name? ")
        return `Hello ${name}, welcome to our company.`
    }
    
    function sayCompanyName() {
        const name = prompt("Which company do you work?")
        return `Our company is called ${name}.`
    }
});

// Test your skills: Functions

// Task 1

const task1Names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const testYourSkillsFunctionsTask1Paragraph1 = document.createElement('p');
const testYourSkillsFunctionsTask1Paragraph2 = document.createElement('p');

// Add your code here
function chooseName() {
    const randomNumber = Math.floor(Math.random() * task1Names.length);
    const choice = task1Names[randomNumber];
    return choice;
    
}
  
// Don't edit the code below here!

const pickARandomNameTask1Button = document.querySelector('#pick_a_random_name')

const testYourSkillsFunctionsTask1 = document.querySelector('.test_your_skills_functions_task_1');
testYourSkillsFunctionsTask1Paragraph1.textContent = `Provided array of names: ${task1Names}`
testYourSkillsFunctionsTask1.appendChild(testYourSkillsFunctionsTask1Paragraph1);

pickARandomNameTask1Button.addEventListener('click', () => {
    testYourSkillsFunctionsTask1Paragraph2.textContent = `Random name picked from the list: ${chooseName()}`
    testYourSkillsFunctionsTask1.appendChild(testYourSkillsFunctionsTask1Paragraph2);
})


// Task 2

const task2Names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const testYourSkillsFunctionsTask2Paragraph1 = document.createElement('p');
const testYourSkillsFunctionsTask2Paragraph2 = document.createElement('p');

// Add your code here
function isShort(name) {
    return name.length < 5;
  }
  
// Don't edit the code below here!

const filterShortNamesTask2Button = document.querySelector('#filter_short_names')

const testYourSkillsFunctionsTask2 = document.querySelector('.test_your_skills_functions_task_2');
testYourSkillsFunctionsTask2Paragraph1.textContent = `Provided array of names: ${task1Names}`
testYourSkillsFunctionsTask2.appendChild(testYourSkillsFunctionsTask2Paragraph1);

filterShortNamesTask2Button.addEventListener('click', () => {
    testYourSkillsFunctionsTask1Paragraph2.textContent = `Short names less than or equal to 5 characters: ${task2Names.filter(isShort)}`
    testYourSkillsFunctionsTask2.appendChild(testYourSkillsFunctionsTask1Paragraph2);
})

