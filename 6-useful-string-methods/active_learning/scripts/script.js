// Filtering greeting messages

const listItems1 = document.querySelectorAll('.filtering_greeting_messages ul li');

const greetings = [];

for (const listItem of listItems1) {
    greetings.push(listItem.innerHTML);
}

// This manual way of creating a list in js was replaced by the for loop above

// const greetings = [
//     'Happy Birthday!',
//     'Merry Christmas my love',
//     'A happy Christmas to all the family',
//     'You\'re all I want for Christmas',
//     'Get well soon'];

const list1 = document.querySelector('.filtering_greeting_messages ul');

list1.innerHTML = '';

for (const greeting of greetings) {
    // Your conditional test needs to go inside the parentheses
    // in the line below, replacing what's currently there
    if (greeting.toLowerCase().includes("christmas")) {
        const listItem = document.createElement('li');
        listItem.textContent = greeting;
        list1.appendChild(listItem);
    }
}

// Fixing capitalization

// const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// Creating a list dynamically

const listItems2 = document.querySelectorAll('.fixing_capitalization ul li');

const cities = [];

for (const listItem of listItems2) {
    cities.push(listItem.innerHTML);
}

const list2 = document.querySelector('.fixing_capitalization ul');

list2.innerHTML = '';

for (const city of cities) {
    // write your code just below here

    const result = city.toLocaleLowerCase();
    const listItem = document.createElement('li');
    listItem.textContent = `${result[0].toLocaleUpperCase()}${result.slice(1)}`;
    list2.appendChild(listItem);
}

// Making new strings from old parts


// const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                   'GNF576746573fhdg4737dh4;Greenfield',
//                   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                   'SYB4f65hf75f736463;Stalybridge',
//                   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];


// This replace the above code

const listItems3 = document.querySelectorAll('.making_new_strings ul li');

const stations = [];

for (const listItem of listItems3) {
    stations.push(listItem.innerHTML);
}

const list3 = document.querySelector('.making_new_strings ul');

list3.innerHTML = '';

for (const station of stations) {
    // write your code just below here
    const stationCode = station.slice(0, 4);
    const stationName = station.slice(station.indexOf(';') + 1, station.length + 1);
    const result = `${stationCode}: ${stationName}`;
    const listItem = document.createElement('li');
    listItem.textContent = result;
    list3.appendChild(listItem);
}


// Test your skills!

// Task 1

const quoteStart = 'Don\'t judge each day by the harvest you reap';
const quoteEnd = 'but by the seeds that you plant.'
const finalQuote = `${quoteStart} ${quoteEnd}`

const task_1 = document.querySelector('.task_1')

task_1.innerHTML = ' ';
const paragraph1Task1 = document.createElement('p');
paragraph1Task1.textContent = finalQuote;

task_1.appendChild(paragraph1Task1);


// Task 2

const quoteTask2 = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

quoteTask2Length = quoteTask2.length
subStringLength = substring.length
index = quoteTask2.indexOf(substring)
revisedQuoteTask2 = quoteTask2.slice(0, index + subStringLength + 1)

task_2 = document.querySelector(".task_2")
task_2.innerHTML = ' ';
const paragraph1Task2 = document.createElement('p');
paragraph1Task2.textContent = `The quote is ${ quoteTask2Length } characters long.`;
const paragraph2Task2 = document.createElement('p');
paragraph2Task2.textContent = revisedQuoteTask2;

task_2.appendChild(paragraph1Task2);
task_2.appendChild(paragraph2Task2);


// Task 3

const quoteTask3 = 'I dO nOT lIke gREen eGgS anD HAM';

const fixedQuoteTask3 = `${quoteTask3[0].toUpperCase()}${quoteTask3.toLocaleLowerCase().slice(1, quoteTask3.length)}`

const finalQuoteTask3 = `${fixedQuoteTask3.replace('green eggs and ham', 'pumpkin and spaghetti')}.`

task_3 = document.querySelector('.task_3')
task_3.innerHTML = ' ';
const paragraph1Task3 = document.createElement('p');
paragraph1Task3.textContent = fixedQuoteTask3;
const paragraph2Task3 = document.createElement('p');
paragraph2Task3.textContent = finalQuoteTask3;

task_3.appendChild(paragraph1Task3);
task_3.appendChild(paragraph2Task3);


// Task 4

const a = 5;
const b = 8;
const theorem = 'Pythagorean theorem';
const myString = `Using ${ theorem }, we can work out that that if the two shortest 
sides of a right-angled triangle have lengths of ${ a } and 
${ b }, the length of the hypotenuse is ${ (Math.sqrt((a**2) + (b**2))).toFixed(2) }.`;

const task_4 = document.querySelector('.task_4')
task_4.innerHTML = ' ';
const paragraph1Task4 = document.createElement('p');
paragraph1Task4.textContent = myString;

task_4.appendChild(paragraph1Task4);
