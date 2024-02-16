// Classes in JavaScript

// Classes and constructors

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    return (`Hi! I'm ${this.name}.`);
  }
}

const introductionParagraph = document.createElement('p');
const declareAClassDiv = document.querySelector('.declare_a_class_div');
const introduceYourselfButton = document.querySelector('#introduce_yourself_button');
introduceYourselfButton.addEventListener('click', () => {
  const myName = prompt('What\'s your name? ').trim();
  if (myName !== "") {
    const person = new Person(myName);
    introductionParagraph.textContent = person.introduceSelf();
    declareAClassDiv.appendChild(introductionParagraph);
  }
});


// Omitting constructors

class Animal {
  sleep() {
    return "zzzzzzz";
  }
}

const sleepParagraph = document.createElement('p');
const omittingConstructorsDiv = document.querySelector('.omitting_constructors_div');
const animalSleepButton = document.querySelector('#animal_sleep_button');
animalSleepButton.addEventListener('click', () => {
  const animal = new Animal();
  sleepParagraph.textContent = animal.sleep();
  omittingConstructorsDiv.appendChild(sleepParagraph);
});


// Inheritance

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    return `My name is ${this.name}, and I will be your ${this.teaches} professor.`;
  }

  grade(mark) {
    if (mark >= 0 && mark < 40) {
      return 'F';
    } else if (mark >= 40 && mark < 50) {
      return 'D';
    } else if (mark >= 50 && mark < 60) {
      return 'C';
    } else if (mark >= 60 && mark < 70) {
      return 'B';
    } else if (mark >= 70 && mark <= 100) {
      return 'A';
    }
  }
}

const inheritanceDiv = document.querySelector('.inheritance_div');
const olum = new Professor('Olum', 'Computer Science');
const professorIntroductionParagraph = document.querySelector('.professor_introduction_paragraph');
professorIntroductionParagraph.textContent = olum.introduceSelf();
const enterYourMarksButton = document.querySelector('#enter_your_mark_button');
const professorGradeParagraph = document.createElement('p');
enterYourMarksButton.addEventListener('click', () => {
  const mark = prompt('Enter your mark: ').trim();
  if (mark !== "" && parseFloat(mark) == mark && mark >= 0 && mark <= 100) {
    professorGradeParagraph.textContent = `Mark: ${mark} | Grade: ${olum.grade(mark)}`;
    inheritanceDiv.appendChild(professorGradeParagraph);
  } else {
    professorGradeParagraph.textContent = 'You entered an invalid mark.';
    inheritanceDiv.appendChild(professorGradeParagraph);
  }
});

// Encapsulation

class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }


  introduceSelf() {
    return `Hi! I'm ${this.name}, and I'm in year ${this.#year}.`;
  }

  canStudyArchery() {
    return (this.#year > 1);
  }
}

// Introduce yourself

const encapsulationIntroductionParagraph = document.createElement('p');
const encapsulationsDiv = document.querySelector('.encapsulation');
const encapsulationIntroduceYourselfButton = document.querySelector('#encapsulation_introduce_yourself_button');
encapsulationIntroduceYourselfButton.addEventListener('click', () => {
  const myName = prompt('What\'s your name? ').trim();
  const myYear = prompt('Which year are you? ').trim();
  if (myName !== "") {
    const student = new Student(myName, myYear);
    introductionParagraph.textContent = student.introduceSelf();
    encapsulationsDiv.appendChild(introductionParagraph);
    const canStudyArcheryButton = document.createElement('button');
    canStudyArcheryButton.textContent = 'Check if you can study archery';
    encapsulationsDiv.appendChild(canStudyArcheryButton);
    canStudyArcheryButton.addEventListener('click', () => {
      const canStudyArcheryParagraph = document.createElement('p');
      canStudyArcheryParagraph.textContent = student.canStudyArchery() ? 'Yes, you can study archery.' : 'No, you cannot study archery.';
      encapsulationsDiv.appendChild(canStudyArcheryParagraph);
    });
  }
});


// Encapsulation private methods

class Question {
  ask() {
    return this.#question1();
  }

  #question1() {
    return 'Did you call me?';
  }
}

const encapsulationPrivateMethods = document.querySelector('.encapsulation_private_methods');
const askAQuestionButton = document.querySelector('#ask_a_question_button');
askAQuestionButton.addEventListener('click', () => {
  const responseParagraph = document.createElement('p');
  const question = new Question();
  responseParagraph.textContent = question.ask();
  encapsulationPrivateMethods.appendChild(responseParagraph);
});

// Test your skills: Object-oriented JavaScript

// Task 1

const diameterInputBox = document.querySelector('#diameter_input_box');
const computeAreaButton = document.querySelector('#compute_area_button');
const computePerimeterButton = document.querySelector('#compute_perimeter_button');
const displayResultParagraph = document.querySelector('#display_result_paragraph');


computeAreaButton.addEventListener('click', (event) => {
  event.preventDefault();
  diameter = diameterInputBox.value;
  circle = new Circle(diameter);
  area = circle.computeArea(diameter)
  displayResultParagraph.textContent = `A circle of radius ${(circle.getRadius(diameter))} has an area of ${area.toFixed(3)}.`
});

computePerimeterButton.addEventListener('click', (event) => {
  event.preventDefault();
  diameter = diameterInputBox.value;
  circle = new Circle(diameter);
  perimeter = circle.computePerimeter(diameter)
  displayResultParagraph.textContent = `A circle of radius ${(circle.getRadius(diameter))} has a perimeter of ${perimeter.toFixed(3)}.`
});

class Circle {
  diameter;

  constructor(diameter) {
    this.diameter = diameter;
  }

  getRadius(diameter) {
    return diameter / 2
  }

  computeArea(diameter) {
    const radius = this.getRadius(diameter);
    return Math.PI * radius ** 2;
  }

  computePerimeter(diameter) {
    return Math.PI * diameter
  }
}