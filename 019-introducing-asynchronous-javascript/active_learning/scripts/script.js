// Introducing asynchronous JavaScript

// Synchronous programming

const synchronousProgrammingDiv = document.querySelector('.synchronous_programming_div');
const synchronousProgrammingButton = document.querySelector('.synchronous_programming_div button');
const paragraph = document.createElement('p');
synchronousProgrammingButton.addEventListener('click', makeGreeting);

function makeGreeting() {
  const name = prompt('Enter your name? ');
  const greeting = `Hi ${name}, nice to meet you?`;
  paragraph.textContent = greeting;
  synchronousProgrammingDiv.appendChild(paragraph);
}


// A long-running synchronous function

const reloadButton = document.querySelector("#reload")
const finishMessageParagraph = document.querySelector('#finish_message_paragraph');
const primeNumbersParagraph = document.querySelector('#prime_numbers_paragraph');
const primeNumbersHowMany = document.querySelector('#prime_numbers_how_many');
const primeNumbersStart = document.querySelector('#prime_numbers_start');
const primeNumbersSubmit = document.querySelector('#prime_numbers_submit');

primeNumbersSubmit.addEventListener('click', printOutPrimes);

reloadButton.addEventListener("click", () => {
  document.location.reload();
});


function printOutPrimes() {
  const primes = [];
  i = primeNumbersStart.value;
  while (primes.length < primeNumbersHowMany.value) {
    if (isPrime(i)) {
      primes.push(i);
      console.log(i);
    }
    i++;
  }

  finishMessageParagraph.textContent = 'Finished generating 1000000 primes!'

  if (i < 100) {
    for (i = 0; i < primes.length; i++) {
      (i === 0) ? primeNumbersParagraph.textContent += ` ${primes[i]}` : primeNumbersParagraph.textContent += `, ${primes[i]}`;
    }
  } else {
    for (i = primes.length - 100; i < primes.length; i++) {
      finishMessageParagraph.textContent = 'Finished generating 1000000 primes!'
    }
  }
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (const i = 2; i <= Math.round(Math.sqrt(n)) + 1; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
}

// Event handlers

const reload = document.querySelector("#reload")
const eventLog = document.querySelector('#event_log')
const xmlHttpRequest = document.querySelector('#xml_http_request')

xmlHttpRequest.addEventListener('click', () => {
  eventLog.textContent = '';

  const xmlHttpRequest = new XMLHttpRequest()

  xmlHttpRequest.addEventListener('loadend', () => {
    eventLog.textContent += `Finished with status: ${xmlHttpRequest.status}`;
  })

  
  xmlHttpRequest.open('Get','https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json')

  xmlHttpRequest.send()
  eventLog.textContent += `${eventLog.textContent}Started XHR request\n`;

  reload.addEventListener("click", () => {
    eventLog.textContent = "";
    document.location.reload();
  })
})


