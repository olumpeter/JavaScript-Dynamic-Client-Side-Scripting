// Active learning: Printing those products

const printProductList = document.querySelector('.printing_those_products ul');
const totalBox = document.querySelector('.printing_those_products p');
let total = 0;
printProductList.innerHTML = '';
totalBox.textContent = '';

// number 1

products = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'
];

// number 2
for (const product of products) {
    // number 3
    productName = product.split(':')[0];
    productPrice = Number(product.split(':')[1]);
    // number 4
    total += productPrice;

    // number 5
    const printProductListItemText = `${productName} - \$${productPrice}`;

    const printProductListItem = document.createElement('li');
    printProductListItem.textContent = printProductListItemText;
    printProductList.appendChild(printProductListItem);
    // number 6
}

totalBox.textContent = 'Total: $' + total.toFixed(2);


// Active learning: Top 5 searches

const top5SearchesList = document.querySelector('.top_5_searches ul');
const searchInput = document.querySelector('.top_5_searches input');
const searchButton = document.querySelector('.top_5_searches button');

top5SearchesList.innerHTML = '';

const myHistory = [];
const MAX_HISTORY = 5;

searchButton.onclick = () => {
    // we will only allow a term to be entered if the search input isn't empty
    if (searchInput.value !== '') {
        // number 1
        myHistory.push(searchInput.value);
        // empty the list so that we don't display duplicate entries
        // the display is regenerated every time a search term is entered.
        top5SearchesList.innerHTML = '';

        // loop through the array, and display all the search terms in the list
        for (const itemText of myHistory) {
            const top5SearchesListItem = document.createElement('li');
            top5SearchesListItem.textContent = itemText;
            top5SearchesList.appendChild(top5SearchesListItem);
        }

        // If the array length is 5 or more, remove the oldest search term
        if (myHistory.length >= MAX_HISTORY) {
            // number 2
            myHistory.shift();
        }

        // empty the search input and focus it, ready for the next term to be entered
        searchInput.value = '';
        searchInput.focus();
    }
};

/* Test your skills: Arrays */

/* Task 1 */

// Add your code here

// Create an array of three items, stored inside a variable called myArrayTask1
const myArrayTask1 = ['Bananas', 'Apples', 'Oranges'];

// modify the first two items in the array using simple bracket notation and assignment.
myArrayTask1[0] = 'Melons';
myArrayTask1[1] = 'Grapes';

// add a new item to the beginning of the array.
myArrayTask1.unshift('Pineapple');

// Don't edit the code below here!

const task_1 = document.querySelector('.task_1');

let paragraph1Task1 = document.createElement('p');
paragraph1Task1.textContent = `Array: ${myArrayTask1}`;

task_1.appendChild(paragraph1Task1);


// Task 2

// Add your code here

const myStringTask2 = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// Convert the string into an array, removing the + characters in the process. 
// Save the result in a variable called myArrayTask2.
const myArrayTask2 = myStringTask2.split("+");

// Store the length of the array in a variable called arrayLengthTask2.
const arrayLengthTask2 = myArrayTask2.length;

// Store the last item in the array in a variable called lastItemTask1.
const lastItemTask2 = myArrayTask2[arrayLengthTask2 - 1];

// Don't edit the code below here!

const task_2 = document.querySelector('.task_2');

const paragraph1Task2 = document.createElement('p');
paragraph1Task2.textContent = `Array: ${myArrayTask2}`;

const paragraph2Task2 = document.createElement('p');
paragraph2Task2.textContent = `The length of the array is ${arrayLengthTask2}.`;

const paragraph3Task2 = document.createElement('p');
paragraph3Task2.textContent = `The last item in the array is "${lastItemTask2}".`;

task_2.appendChild(paragraph1Task2);
task_2.appendChild(paragraph2Task2);
task_2.appendChild(paragraph3Task2);

// Task 3

const myArrayTask3 = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];

// Add your code here

// Remove the last item in the array
myArrayTask3.pop();

// Add two new names to the end of the array.
myArrayTask3.push('Peter', 'Michael');

// Go over each item in the array and add its index number after the name inside 
// parentheses, for example Ryu (0).

/*
// Method 1
for (let i = 0; i < myArrayTask3.length; i++) {
    myArrayTask3[i] = `${myArrayTask3[i]} (${i})`;
}
*/

// Method 2
myArrayTask3.forEach(function (item, index) {
    let newItem = `${ item } (${ index })`;
    myArrayTask3[ index ] = newItem;
});


// Finally, join the array items together in a single string called myString, 
// with a separator of "-".
const myStringTask3 = myArrayTask3.join("-");


// Don't edit the code below here!

const task3 = document.querySelector('.task_3');

const paragraph1Task3 = document.createElement('p');
paragraph1Task3.textContent = myStringTask3;

task3.appendChild(paragraph1Task3);

// Task 4

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here

// Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
const eaglesIndex = birds.indexOf("Eagles")
birds.splice(eaglesIndex, 1);

// Make a new array from this one, called eBirds, that contains only birds from 
// the original array whose names begin with the letter "E". Note that 
// startsWith() is a great way to check whether a string starts with a given character.

function startsWithE(bird) {
    return bird.startsWith('E');
}

const eBirds = birds.filter(startsWithE);

const task4 = document.querySelector('.task_4')

// Don't edit the code below here!

// task4.innerHTML = ' ';

const paragraph1Task4 = document.createElement('p');
paragraph1Task4.textContent = eBirds;

task4.appendChild(paragraph1Task4);