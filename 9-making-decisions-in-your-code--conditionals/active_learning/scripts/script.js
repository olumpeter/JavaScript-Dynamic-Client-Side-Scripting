// if...else statements real example

const ifElseCheckBox = document.querySelector('.if_else_real_example input');
const ifElseParagraph = document.querySelector('.if_else_real_example p');
let shoppingDone = false;

ifElseCheckBox.checked = false;


ifElseCheckBox.addEventListener('change', () => {
    ifElseCheckBox.disabled = true;
    shoppingDone = true;
    updateAllowance();
});

function updateAllowance() {
    let childAllowance;
    if (shoppingDone === true) {
        childAllowance = 10;
    } else {
        childAllowance = 5;
    }

    ifElseParagraph.textContent = `Child has earned \$${childAllowance} this week.`;
}

updateAllowance();


// else if statements real example

const elseIfSelect = document.querySelector('#elseIfWeatherSelectBox');
const elseIfParagraph = document.querySelector('#elseIfWeatherParagraph');

elseIfSelect.onchange = elseIfSetWeather;

function elseIfSetWeather() {
    const elseIfChoice = elseIfSelect.value;

    if (elseIfChoice === 'sunny') {
        elseIfParagraph.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (elseIfChoice === 'rainy') {
        elseIfParagraph.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
    } else if (elseIfChoice === 'snowing') {
        elseIfParagraph.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (elseIfChoice === 'overcast') {
        elseIfParagraph.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        elseIfParagraph.textContent = '';
    }
}


// A switch example

const switchSelect = document.querySelector('#switchWeatherSelectBox');
const switchParagraph = document.querySelector('#switchWeatherParagraph');

switchSelect.addEventListener('change', switchSetWeather);

function switchSetWeather() {
    const switchChoice = switchSelect.value;

    switch (switchChoice) {
        case 'sunny':
            switchParagraph.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
            break;
        case 'rainy':
            switchParagraph.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
            break;
        case 'snowing':
            switchParagraph.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            break;
        case 'overcast':
            switchParagraph.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
        default:
            switchParagraph.textContent = '';
    }
}


// Ternary operator example

ternaryOperatorSelect = document.querySelector('.ternary_operator_example select');
ternaryOperatorExampleDiv = document.querySelector('.ternary_operator_example');

ternaryOperatorExampleDiv.style.padding = '10px';
ternaryOperatorExampleDiv.style.border = '5px solid black';
ternaryOperatorExampleDiv.style.height = '500px';

function ternaryOperatorUpdate(backgroundColor, textColor) {
    ternaryOperatorExampleDiv.style.backgroundColor = backgroundColor;
    ternaryOperatorExampleDiv.style.color = textColor;
}

ternaryOperatorSelect.addEventListener('change', () =>
    ternaryOperatorSelect.value === 'black' ?
        ternaryOperatorUpdate('black', 'white') : ternaryOperatorUpdate('white', 'black')
);


// Active learning: A simple calendar

const activeLearningASimpleCalendarASimpleCalendarSelect = document.querySelector('.active_learning_a_simple_calendar > select');
const activeLearningASimpleCalendarList = document.querySelector('.active_learning_a_simple_calendar > ul');
const activeLearningASimpleCalendarH1 = document.querySelector('.active_learning_a_simple_calendar > h1');

activeLearningASimpleCalendarASimpleCalendarSelect.addEventListener('change', () => {
    const activeLearningASimpleCalendarChoice = activeLearningASimpleCalendarASimpleCalendarSelect.value;

    // ADD CONDITIONAL HERE

    if (activeLearningASimpleCalendarChoice === 'January' || activeLearningASimpleCalendarChoice === 'March' ||
        activeLearningASimpleCalendarChoice === 'May' || activeLearningASimpleCalendarChoice === 'July' ||
        activeLearningASimpleCalendarChoice === 'August' || activeLearningASimpleCalendarChoice === 'October' ||
        activeLearningASimpleCalendarChoice === 'December') {
        const days = 31;
        createCalendar(days, activeLearningASimpleCalendarChoice);
    } else if (activeLearningASimpleCalendarChoice === 'February') {
        const days = 28;
        createCalendar(days, activeLearningASimpleCalendarChoice);
    } else {
        const days = 30;
        createCalendar(days, activeLearningASimpleCalendarChoice);
    }


});

function createCalendar(days, activeLearningASimpleCalendarChoice) {
    activeLearningASimpleCalendarList.innerHTML = '';
    activeLearningASimpleCalendarH1.textContent = activeLearningASimpleCalendarChoice;
    for (let i = 1; i <= days; i++) {
        const activeLearningASimpleCalendarListItem = document.createElement('li');
        activeLearningASimpleCalendarListItem.textContent = i;
        activeLearningASimpleCalendarList.appendChild(activeLearningASimpleCalendarListItem);
    }
}

createCalendar(31, 'January');


// Active learning: More color choices

const activeLearningMoreColorChoicesSelect = document.querySelector('.active_learning_more_color_choices > select');
const activeLearningMoreColorChoicesDiv = document.querySelector('.active_learning_more_color_choices');

activeLearningMoreColorChoicesDiv.style.padding = '10px';
activeLearningMoreColorChoicesDiv.style.border = '5px solid black';
activeLearningMoreColorChoicesDiv.style.height = '500px';

activeLearningMoreColorChoicesSelect.addEventListener('change', () => {
    const activeLearningMoreColorChoicesChoice = activeLearningMoreColorChoicesSelect.value;

    // ADD SWITCH STATEMENT

    switch (activeLearningMoreColorChoicesChoice) {
        case 'white':
            activeLearningMoreColorChoicesUpdate('white', 'black');
            break;
        case 'black':
            activeLearningMoreColorChoicesUpdate('black', 'white');
            break;
        case 'purple':
            activeLearningMoreColorChoicesUpdate('purple', 'white');
            break;
        case 'yellow':
            activeLearningMoreColorChoicesUpdate('yellow', 'black');
            break;
        case 'psychedelic':
            activeLearningMoreColorChoicesUpdate('black', 'green');
            break;
    }
});

function activeLearningMoreColorChoicesUpdate(bgColor, textColor) {
    activeLearningMoreColorChoicesDiv.style.backgroundColor = bgColor;
    activeLearningMoreColorChoicesDiv.style.color = textColor;
}


// Test your skills: Conditionals

// Task 1

const task1Select = document.querySelector('.task_1 > select');

task1Select.onchange = () => {
    let task1Season = task1Select.value;
    let task1Response;

    // Add your code here

    if (task1Season === 'summer') {
        task1Response = 'It\'s probably nice and warm where you are; enjoy the sun!';
    } else if (task1Season === 'winter') {
        task1Response = 'I hope you are not too cold. Put some warm clothes on!';
    } else {
        task1Response = 'I don\'t know what the season is where you are. Hope you are well.';
    }

    // Don't edit the code below here!

    const task1Paragraph1 = document.querySelector('.task_1 > p');
    task1Paragraph1.textContent = task1Response;
};


// Task 2

const task2MachineStatusSelect = document.querySelector('.task_2_machine_status > select');
const machineStatusParagraph = document.querySelector('.task_2_machine_status > p');
const task2ScoreForm = document.querySelector('#task_2_score_form');
const task2ScoreInput = document.querySelector('#task_2_score_input');
const task2ScoreInputButton = document.querySelector('#task_2_score_input_button');

const machineStatus = task2MachineStatusSelect.value;

let task2MachineActive = false;
task2ScoreInput.setAttribute('disabled', true);
task2ScoreInputButton.setAttribute('disabled', true);
machineStatusParagraph.textContent = 'You\'ve not made a decision whether to turn the machine ON or OFF';
machineStatusParagraph.style.color = 'black';

task2MachineStatusSelect.onchange = () => {
    const machineStatus = task2MachineStatusSelect.value;
    if (machineStatus === 'no') {
        let task2MachineActive = false;
        task2ScoreInput.disabled = true;
        task2ScoreInputButton.disabled = true;
        machineStatusParagraph.textContent = 'The machine is OFF';
        machineStatusParagraph.style.color = 'red';
    } else if (machineStatus === 'yes') {
        let task2MachineActive = true;
        task2ScoreInput.disabled = false;
        task2ScoreInputButton.disabled = false;
        machineStatusParagraph.textContent = 'The machine is ON';
        machineStatusParagraph.style.color = 'green';
    } else {
        let task2MachineActive = false;
        task2ScoreInput.disabled = true;
        task2ScoreInputButton.disabled = true;
        machineStatusParagraph.textContent = 'You\'ve not made a decision whether to turn the machine ON or OFF';
        machineStatusParagraph.style.color = 'black';
    }
}

task2ScoreForm.addEventListener('submit', (task2Event) => {
    const task2Paragraph1 = document.querySelector('#task_2_paragraph_1');
    const task2Paragraph2 = document.querySelector('#task_2_paragraph_1');

    const task2Score = task2ScoreInput.value
    task2Paragraph1.textContent = `Your score is ${task2Score}`;

    if (task2Score < 0 || task2Score > 100) {
        task2Paragraph2.textContent = 'This is not possible, an error has occurred.'
    } else if (task2Score >= 0 && task2Score <= 19) {
        task2Paragraph2.textContent = 'That was a terrible score — total fail'
    } else if (task2Score >= 20 && task2Score <= 39){
        task2Paragraph2.textContent = 'You know some things, but it\'s a pretty bad score. Needs improvement.'
    } else if (task2Score >= 40 && task2Score <= 69) {
        task2Paragraph2.textContent = 'You did a passable job, not bad!'
    } else if (task2Score >= 70 && task2Score <= 89) {
        task2Paragraph2.textContent = 'That\'s a great score, you really know your stuff.'
    } else {
        task2Paragraph2.textContent = 'What an amazing score! Did you cheat? Are you for real?'
    }

    task2Event.preventDefault(); // Prevents the form from submitting and the page from reloading 
})


// Task 3

const task3Form = document.querySelector('.task_3_form')

const task3MachineActiveSelect = document.querySelector('#task_3_machine_active')

const task3LoginPasswordInput = document.querySelector('#task_3_login_password')
const task3LoginPassword = task3LoginPasswordInput.value

const task3LoginPasswordButton = document.querySelector('#task_3_login_password_button')

const task3Paragraph1 = document.querySelector('#task_3_paragraph_1');

const task3Paragraph2 = document.querySelector('#task_3_paragraph_2');

task3LoginPasswordInput.setAttribute('disabled', true);
task3LoginPasswordButton.setAttribute('disabled', true);

task3MachineActiveSelect.onchange = () => {
    const task3MachineActive = task3MachineActiveSelect.value
    if (task3MachineActive === "yes") {
        task3LoginPasswordInput.disabled = false;
        task3LoginPasswordButton.disabled = false;
        task3Paragraph1.textContent = 'The machine is ON';
        task3Paragraph1.style.color = 'green'; 
    }
   
    if (task3MachineActive === "no") {
        task3LoginPasswordInput.disabled = true;
        task3LoginPasswordButton.disabled = true;
        task3Paragraph1.textContent = 'The machine is OFF';
        task3Paragraph1.style.color = 'red'; 
    }
}

task3Form.onsubmit = (task3Event) => {

    const task3MachineActiveSelect = document.querySelector('#task_3_machine_active')
    const task3MachineActive = task3MachineActiveSelect.value
    const task3LoginPasswordInput = document.querySelector('#task_3_login_password')
    const task3LoginPassword = task3LoginPasswordInput.value
    
    if (task3MachineActive === 'yes' && task3LoginPassword === 'cheese') {
        task3Paragraph2.textContent = 'You are logged in success'
    } else {
        task3Paragraph2.textContent = 'Your login attempt was not successful';
    }

    task3Event.preventDefault();
}

