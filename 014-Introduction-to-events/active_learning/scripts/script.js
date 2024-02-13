// An example: handling a click event

const anExampleHandlingAClickEventDiv = document.querySelector('.an_example_handling_a_click_event');
const handlingAClickEventChangeColorButton = document.querySelector('.an_example_handling_a_click_event button');

handlingAClickEventChangeColorButton.addEventListener('click', () => {
    anExampleHandlingAClickEventDiv.style.backgroundColor = `rgb(${generateRandomNumber(255)} ${generateRandomNumber(255)} ${generateRandomNumber(255)})`;
});

function generateRandomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Using Event handler properties

const usingEventHandlerPropertiesDiv = document.querySelector('.using_event_handler_properties');
const usingEventHandlerPropertiesChangeColorButton = document.querySelector('.using_event_handler_properties button');

usingEventHandlerPropertiesChangeColorButton.onclick = () => {
    usingEventHandlerPropertiesDiv.style.backgroundColor = `rgb(${generateRandomNumber(255)} ${generateRandomNumber(255)} ${generateRandomNumber(255)})`;
};

function generateRandomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Inline event handlers — don't use these

const inlineEventHandlersExample1 = document.querySelector('.inline_event_handlers #example_1');
const inlineEventHandlersButton = document.querySelector('.inline_event_handlers #example_1 > button');

function inlineEventHandlersBackgroundChange() {
    inlineEventHandlersExample1.style.backgroundColor = `rgb(${generateRandomNumber(255)} ${generateRandomNumber(255)} ${generateRandomNumber(255)})`;
}

// Event objects

// Event objects example

const eventObjectsExample1 = document.querySelector('.event_objects #example_1 ');
const eventObjectsExample1Button = document.querySelector('.event_objects #example_1  > button');

eventObjectsExample1Button.addEventListener('click', eventObjectsExample1BackgroundChange);

function eventObjectsExample1BackgroundChange(event) {
    // The target property of the event object is always a reference to the 
    // element the event occurred upon. So, in this example, we are setting a 
    // random background color on the button, not the page.
    event.target.style.backgroundColor = `rgb(${generateRandomNumber(255)} ${generateRandomNumber(255)} ${generateRandomNumber(255)})`;
}


// Preventing default behavior

const preventingDefaultBehaviorForm = document.querySelector('.preventing_default_behavior > form');
const preventingDefaultBehaviorFirstName = document.getElementById('first_name');
const preventingDefaultBehaviorLastName = document.getElementById('last_name');
const preventingDefaultBehaviorParagraph1 = document.getElementById('form_submission_message');

preventingDefaultBehaviorForm.addEventListener('submit', (event) => {
    if (preventingDefaultBehaviorFirstName.value == '' || preventingDefaultBehaviorLastName.value == '') {
        event.preventDefault();
        preventingDefaultBehaviorParagraph1.textContent = 'You need to fill in both names!';
    } else {
        alert('You\'ve submitted both names successfully.');
    }
});

// Setting a listener on a parent element

const settingAListenerOnAParentElementDiv = document.querySelector('.event_bubbling > #setting_a_listener_on_a_parent_element');
const settingAListenerOnAParentElementOutputParagraph = document.querySelector('#event_bubbling_output');

settingAListenerOnAParentElementDiv.addEventListener('click', (event) => {
    settingAListenerOnAParentElementOutputParagraph.textContent += `You clicked on a ${event.currentTarget.tagName} element\n`;
});

// Bubbling example

const eventBubblingDiv = document.querySelector('.event_bubbling');
const bubblingExampleDiv = document.querySelector('#bubbling_example');
const bubblingExampleButton = document.querySelector('#bubbling_example > button');
const bubblingExampleParagraph = document.querySelector('#event_bubbling_output');

eventBubblingDiv.addEventListener('click', bubblingEventHandleClick);
bubblingExampleDiv.addEventListener('click', bubblingEventHandleClick);
bubblingExampleButton.addEventListener('click', bubblingEventHandleClick);

function bubblingEventHandleClick(event) {
    bubblingExampleParagraph.textContent += `You clicked on a ${event.currentTarget.tagName} element\n`;
}

// Event delegation

const eventDelegationDiv = document.querySelector('.event_delegation');
eventDelegationDiv.addEventListener('click', (event) => {
    // we're using event.target to get the element that was the target of the 
    // event (that is, the innermost element). If we wanted to access the element 
    // that handled this event (in this case the container) we could use event.currentTarget.
    event.target.style.backgroundColor = `rgb(${generateRandomNumber(255)} ${generateRandomNumber(255)} ${generateRandomNumber(255)})`;
});

// Test your skills: Events

// Task 1

const task1Button = document.querySelector('.task_1 > button');

task1Button.addEventListener('click', () => {
    if (task1Button.className === 'off') {
        task1Button.className = 'on';
        task1Button.textContent = 'Machine is on';
        task1Button.style.backgroundColor ='green'
    } else {
        task1Button.className = 'off';
        task1Button.textContent = 'Machine is off';
        task1Button.style.backgroundColor ='red'
    }
})

// Task 2

const task2Div = document.querySelector('.task_2')

task2Div.addEventListener('click', (event) => {
    task2Div.style.backgroundColor = event.target.getAttribute('data-color')
    event.target.style.color = event.target.getAttribute('data-color')
    event.target.style.backgroundColor = 'black'
    event.target.style.borderColor = 'black'
})

