// Looping through a collection

// The for...of loop

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const forOfLoopParagraph1 = document.createElement('p');

const forOfLoopDiv = document.querySelector('#the_for_of_loop');

forOfLoopParagraph1.textContent = `Collection: ${cats}`;

forOfLoopDiv.appendChild(forOfLoopParagraph1);

const forOfLoopList = document.createElement('ul');

forOfLoopDiv.appendChild(forOfLoopList);

for (const cat of cats) {
    const forOfLoopListItem = document.createElement('li');
    forOfLoopListItem.textContent = cat;
    forOfLoopList.append(forOfLoopListItem);
}

// map() and filter()


// map

function convertToUpperCase(text) {
    const textUpperCase = String(text).toUpperCase();
    return textUpperCase;
}

const mapFilterParagraph1 = document.createElement('p');

const catsUpperCase = cats.map(convertToUpperCase);
mapFilterParagraph1.textContent = `Collection (upper case): ${catsUpperCase}`;

const mapAndFilterDiv = document.querySelector('#map_and_filter');
mapAndFilterDiv.appendChild(mapFilterParagraph1);

const mapAndFilterList1 = document.createElement('ul');

mapAndFilterDiv.appendChild(mapAndFilterList1);

for (const cat of catsUpperCase) {
    const mapAndFilterListItem = document.createElement('li');
    mapAndFilterListItem.textContent = cat;
    mapAndFilterList1.append(mapAndFilterListItem);
}

// Filter

function startsWithL(text) {
    const result = String(text).trim().toUpperCase().startsWith('L');
    return result;
}

const mapFilterParagraph2 = document.createElement('p');

const catsStartsWithL = cats.filter(startsWithL);
mapFilterParagraph2.textContent = `Collection starting with L: ${catsStartsWithL}`;
mapAndFilterDiv.appendChild(mapFilterParagraph2);

const mapAndFilterList2 = document.createElement('ul');

mapAndFilterDiv.appendChild(mapAndFilterList2);

for (const cat of catsStartsWithL) {
    const mapAndFilterListItem = document.createElement('li');
    mapAndFilterListItem.textContent = cat;
    mapAndFilterList2.append(mapAndFilterListItem);
}

// The standard for loop

// Calculating squares

const computeSquaresFrom1To10Button = document.querySelector('#compute_squares_from_1_to_10_button');

const calculatingSquaresDiv = document.querySelector('.calculating_squares');

const computingSquaresResultsParagraph = document.querySelector('#computing_squares_results_paragraph');

computeSquaresFrom1To10Button.onclick = () => {
    for (i = 1; i < 11; i++) {
        const computeSquaresResultParagraph = document.createElement('p');
        computeSquaresResultParagraph.textContent += `${i} x ${i} = ${i * i}`;
        computingSquaresResultsParagraph.appendChild(computeSquaresResultParagraph);
    }
    const computeSquaresFinishParagraph = document.createElement('p');
    computeSquaresFinishParagraph.textContent = 'Finished!';
    computingSquaresResultsParagraph.appendChild(computeSquaresFinishParagraph);
};

const clearCalculatingSquaresDivButton = document.querySelector('#clear_calculating_squares_div_button');

function clearCalculatingSquaresDiv() {
    computingSquaresResultsParagraph.textContent = '';
}

clearCalculatingSquaresDivButton.onclick = () => {
    clearCalculatingSquaresDiv();
};


// Looping through collections with a for loop

// Using method 1

const loopingThroughCollectionForLoop = document.querySelector('.looping_through_collection_for_loop');

const loopingThroughCollectionForLoopHeading1 = document.createElement('h4');
loopingThroughCollectionForLoopHeading1.textContent = 'Using method 1:';
loopingThroughCollectionForLoop.appendChild(loopingThroughCollectionForLoopHeading1);

for (const cat of cats) {
    const loopingThroughCollectionForLoopParagraph1 = document.createElement('p');
    loopingThroughCollectionForLoopParagraph1.textContent = cat;
    loopingThroughCollectionForLoop.appendChild(loopingThroughCollectionForLoopParagraph1);
}

// Using method 2

const loopingThroughCollectionForLoopHeading2 = document.createElement('h4');
loopingThroughCollectionForLoopHeading2.textContent = 'Using method 2:';
loopingThroughCollectionForLoop.appendChild(loopingThroughCollectionForLoopHeading2);

for (let i = 0; i < cats.length; i++) {
    const loopingThroughCollectionForLoopParagraph2 = document.createElement('p');
    loopingThroughCollectionForLoopParagraph2.textContent = cats[i];
    loopingThroughCollectionForLoop.appendChild(loopingThroughCollectionForLoopParagraph2);
}


// Printing out a message listing our cats using method 1 

const myCats = ['Pete', 'Biggles', 'Jasmine'];

const messageListingOurCatsMethod1 = document.querySelector('.message_listing_our_cats .using_method_1');

const messageListingOurCatsMethod1Paragraph1 = document.createElement('p');
messageListingOurCatsMethod1Paragraph1.textContent = 'My cats are called ';

for (const myCat of myCats) {
    messageListingOurCatsMethod1Paragraph1.textContent += `${myCat}, `;
}

messageListingOurCatsMethod1.appendChild(messageListingOurCatsMethod1Paragraph1);

const messageListingOurCatsMethod1Paragraph2 = document.createElement('p');
messageListingOurCatsMethod1Paragraph2.textContent = 'The final output sentence \
isn\'t very well-formed. We\'d prefer it to handle the last cat differently, like \
this: My cats are called Pete, Biggles, and Jasmine.';
messageListingOurCatsMethod1.appendChild(messageListingOurCatsMethod1Paragraph2);
messageListingOurCatsMethod1Paragraph2.style.color = 'red';

// Printing out a message listing our cats using method 2

const messageListingOurCatsMethod2 = document.querySelector('.message_listing_our_cats .using_method_2');

const messageListingOurCatsMethod2Paragraph1 = document.createElement('p');
messageListingOurCatsMethod2Paragraph1.textContent = 'My cats are called ';

for (let i = 0; i < myCats.length; i++) {
    if (i < myCats.length - 1) {
        messageListingOurCatsMethod2Paragraph1.textContent += `${myCats[i]}, `;
    } else {
        messageListingOurCatsMethod2Paragraph1.textContent += `${myCats[i]}.`;
    }
}

messageListingOurCatsMethod2.appendChild(messageListingOurCatsMethod2Paragraph1);


// Exiting loops with break

const contacts = [
    'Chris:2232322',
    'Sarah:3453456',
    'Bill:7654322',
    'Mary:9998769',
    'Dianne:9384975',
];

const exitingLoopsWithBreakSearchButton = document.querySelector('.exiting-loops-with-break #search_button');
const exitingLoopsWithBreakSearchInputBox = document.querySelector('.exiting-loops-with-break #search_input_box');

const searchResultParagraph1 = document.createElement('p');

exitingLoopsWithBreakSearchButton.addEventListener('click', () => {
    searchResultParagraph1.textContent = '';

    const searchName = String(exitingLoopsWithBreakSearchInputBox.value).toLowerCase();
    exitingLoopsWithBreakSearchInputBox.value = '';
    exitingLoopsWithBreakSearchInputBox.focus();


    for (const contact of contacts) {
        const splitContact = String(contact).trim().split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            searchResultParagraph1.textContent = `${splitContact[0]}'s number is ${splitContact[1]}`;
            searchResultParagraph1.style.color = 'green';
            break;
        }
    }

    if (!searchResultParagraph1.textContent) {
        searchResultParagraph1.textContent = 'Contact not found.';
        searchResultParagraph1.style.color = 'red';
    }

    const exitingLoopsWithBreakDiv = document.querySelector('.exiting-loops-with-break');
    exitingLoopsWithBreakDiv.appendChild(searchResultParagraph1);
});


// Skipping iterations with continue

const skippingIterationsParagraph = document.querySelector('.skipping_iterations_with_continue > p');
const skippingIterationsInput = document.querySelector('.skipping_iterations_with_continue #number');
const skippingIterationsButton = document.querySelector('.skipping_iterations_with_continue > button');

skippingIterationsButton.addEventListener('click', () => {
    const number = skippingIterationsInput.value;
    skippingIterationsInput.value = '';
    skippingIterationsInput.focus();

    skippingIterationsParagraph.textContent = 'Output: ';
    for (let i = 1; i <= number; i++) {
        let squareRootNumber = Math.sqrt(i);
        if (Math.floor(squareRootNumber) !== squareRootNumber) {
            continue;
        }

        skippingIterationsParagraph.textContent += `${i} `;
    }
});

// while and do...while

const whileAndDoWhileDiv = document.querySelector('.while_and_do_while');
const whileLoopCats = ['Pete', 'Biggles', 'Jasmine'];
const whileLoopParagraph = document.createElement('p');

whileLoopParagraph.textContent = 'My cats are called ';

var i = 0;
while (i < whileLoopCats.length) {
    // Using ternary operator instead of the normal else if statement
    ((i + 1) < whileLoopCats.length) ? whileLoopParagraph.textContent += `${whileLoopCats[i]}, ` : whileLoopParagraph.textContent += `${whileLoopCats[i]}.`;
    i++;
}

whileAndDoWhileDiv.appendChild(whileLoopParagraph);

// Active learning: Launch countdown

const activeLearningLaunchCountdownOutput = document.querySelector('.active_learning_launch_countdown .output');
activeLearningLaunchCountdownOutput.innerHTML = '';

var i = 10;
while (i >= 0) {
    const activeLearningLaunchCountdownParagraph = document.createElement('p');
    if (i > 0) {
        activeLearningLaunchCountdownParagraph.textContent = `Countdown ${i}`;
        activeLearningLaunchCountdownOutput.appendChild(activeLearningLaunchCountdownParagraph);
        i--;
        continue;
    }
    activeLearningLaunchCountdownParagraph.textContent = `Blast off!`;
    activeLearningLaunchCountdownOutput.appendChild(activeLearningLaunchCountdownParagraph);
    i--;
}

// Active learning: Filling in a guest list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admittedParagraph = document.querySelector('.admitted');
const refusedParagraph = document.querySelector('.refused');

admittedParagraph.textContent = 'Admit: ';
refusedParagraph.textContent = 'Refuse: ';

// loop starts here
const admittedPeople = [];
const refusedPeople = [];
for (const name of people) {
    ((String(name).toLowerCase() === 'phil') || (String(name).toLowerCase() === 'lola')) ? refusedPeople.push(name) : admittedPeople.push(name);

}

for (i = 0; i < admittedPeople.length; i++) {
    (i < (admittedPeople.length - 1)) ? admittedParagraph.textContent += `${admittedPeople[i]}, ` : admittedParagraph.textContent += `${admittedPeople[i]}.`;
}

for (i = 0; i < refusedPeople.length; i++) {
    (i < (refusedPeople.length - 1)) ? refusedParagraph.textContent += `${refusedPeople[i]}, ` : refusedParagraph.textContent += `${refusedPeople[i]}.`;
}

// Test your skills: Loops

// Task 1

const myArrayTask1 = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const listTask1 = document.createElement('ul');

// Add your code here
for (const myItem of myArrayTask1) {
    const listItemTask1 = document.createElement('li');
    listItemTask1.textContent = myItem;
    listTask1.appendChild(listItemTask1);
}

// Don't edit the code below here!

const task1DIv = document.querySelector('.test_your_skills_loops .task1');
task1DIv.appendChild(listTask1);


// Task 2

const searchNameTask2 = 'Mustafa';
const paragraphTask2 = document.createElement('p');

const phonebookTask2 = [
    { name: 'Chris', number: '1549' },
    { name: 'Li Kang', number: '9634' },
    { name: 'Anne', number: '9065' },
    { name: 'Francesca', number: '3001' },
    { name: 'Mustafa', number: '6888' },
    { name: 'Tina', number: '4312' },
    { name: 'Bert', number: '7780' },
    { name: 'Jada', number: '2282' },
];

// Add your code here

for (i = 0; i < phonebookTask2.length; i++) {
    if (String(phonebookTask2[i]['name']).toLowerCase() === String(searchNameTask2).toLowerCase()) {
        paragraphTask2.textContent = `${searchNameTask2}'s phone number is ${phonebookTask2[i]['number']}.`;
        break;
    }

    if (i === phonebookTask2.length - 1) {
        paragraphTask2.textContent = 'Name not found in the phonebook'
    }
}

// Don't edit the code below here!
const task2DIv = document.querySelector('.test_your_skills_loops .task2');
task2DIv.appendChild(paragraphTask2);


// Task 3

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Add your code here

var i = 500;
const paragraphTask3 = document.createElement('p');
prime_numbers = []
while (i > 1){
    if (isPrime(i)) {
        prime_numbers.push(i)
    }
    i--
}
for (let i = 0; i < prime_numbers.length; i++) {
    (i < prime_numbers.length - 1) ? paragraphTask3.textContent += `${i}, ` : paragraphTask3.textContent += `${i}.`
}

// Don't edit the code below here!
const task3Div = document.querySelector('.test_your_skills_loops .task3');
task3Div.appendChild(paragraphTask3);