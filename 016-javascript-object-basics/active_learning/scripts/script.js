// Object basics

// Creating an empty object
const creatingAnEmptyObjectDiv = document.querySelector('.creating_an_empty_object');
const emptyObject = {};
const emptyObjectParagraph = document.createElement('p');
emptyObjectParagraph.textContent = ('Empty Object: ' + emptyObject);
creatingAnEmptyObjectDiv.appendChild(emptyObjectParagraph);

// Updating an object

const updatingAnObjectDiv = document.querySelector('.updating_an_object');
const updatedObject = {
  name: ['Peter', 'Olum'],
  age: 33,
  profession: 'Software engineer',
  workPlace: 'Olum Code Camp',
  yearAtCurrentWorkPlace: 3,
  bio: function () {
    const updatingAnObjectParagraph1 = document.createElement('p');
    updatingAnObjectParagraph1.innerHTML = ` <b>Biography</b>:<br/>
    <b>First name</b>: ${this.name[0]}<br/>
    <b>Last name</b>: ${this.name[1]}<br/>
    <b>Age</b>: ${this.age} years<br/>
    <b>Profession</b>:${this.profession}<br/>
    <b>Work place</b>: ${this.workPlace}<br/>
    <b>Years worked at current work place</b>: ${this.yearAtCurrentWorkPlace} years`;
    updatingAnObjectParagraph1.style.lineHeight = 1.5;
    updatingAnObjectDiv.appendChild(updatingAnObjectParagraph1);
  },
  introduceSelf: function () {
    const updatingAnObjectParagraph2 = document.createElement('p');
    updatingAnObjectParagraph2.innerHTML = `<b>Introduction</b>:<br/>
    Hi! I'm ${this.name[0]} and I'm a ${this.profession}. I've been working at ${this.workPlace} for ${this.yearAtCurrentWorkPlace} years now.`;
    updatingAnObjectDiv.appendChild(updatingAnObjectParagraph2);
  }
};

updatedObject.bio();
updatedObject.introduceSelf();

const updatingAnObjectParagraph1 = document.createElement('p');
updatingAnObjectParagraph1.innerHTML = ` <b>Biography</b>:<br/>
<b>First name</b>: ${updatedObject.name[0]}<br/>
<b>Last name</b>: ${updatedObject.name[1]}<br/>
<b>Age</b>: ${updatedObject.age} years<br/>
<b>Profession</b>:${updatedObject.profession}<br/>
<b>Work place</b>: ${updatedObject.workPlace}<br/>
<b>Years worked at current work place</b>: ${updatedObject.yearAtCurrentWorkPlace} years`;
updatingAnObjectParagraph1.style.lineHeight = 1.5;
updatingAnObjectDiv.appendChild(updatingAnObjectParagraph1);


// Implementing functions using shorter syntax - Instead of bio: <code>function ()</code> we can write <code>bio()</code>
const implementingFunctionsUsingShorterSyntaxDiv = document.querySelector('.implementing_functions_using_shorter_syntax');
const updatedObjectUsingShorterSyntax = {
  name: ['Peter', 'Olum'],
  age: 33,
  profession: 'Software engineer',
  workPlace: 'Olum Code Camp',
  yearAtCurrentWorkPlace: 3,
  bio() {
    const usingShorterSyntaxParagraph1 = document.createElement('p');
    usingShorterSyntaxParagraph1.innerHTML = ` <b>Biography</b>:<br/>
    <b>First name</b>: ${this.name[0]}<br/>
    <b>Last name</b>: ${this.name[1]}<br/>
    <b>Age</b>: ${this.age} years<br/>
    <b>Profession</b>:${this.profession}<br/>
    <b>Work place</b>: ${this.workPlace}<br/>
    <b>Years worked at current work place</b>: ${this.yearAtCurrentWorkPlace} years`;
    usingShorterSyntaxParagraph1.style.lineHeight = 1.5;
    implementingFunctionsUsingShorterSyntaxDiv.appendChild(usingShorterSyntaxParagraph1);
  },
  introduceSelf() {
    const usingShorterSyntaxParagraph2 = document.createElement('p');
    usingShorterSyntaxParagraph2.innerHTML = `<b>Introduction</b>:<br/>
    Hi! I'm ${this.name[0]} and I'm a ${this.profession}. I've been working at ${this.workPlace} for ${this.yearAtCurrentWorkPlace} years now.`;
    implementingFunctionsUsingShorterSyntaxDiv.appendChild(usingShorterSyntaxParagraph2);
  }
};

updatedObjectUsingShorterSyntax.bio();
updatedObjectUsingShorterSyntax.introduceSelf();

// Accessing the object's properties and methods using dot notation

const dotNotationDiv = document.querySelector('.dot_notation');

const dotNotationObject = {
  name: {
    firstName: 'Peter',
    lastName: 'Olum'
  },
  greeting() {
    const dotNotationParagraph1 = document.createElement('p');
    dotNotationParagraph1.textContent = `Hi ${this.name.firstName}!`;
    dotNotationDiv.append(dotNotationParagraph1);
  }
};

dotNotationObject.greeting();

const dotNotationParagraph2 = document.createElement('p');
dotNotationParagraph2.textContent = `My name is ${dotNotationObject.name.firstName} ${dotNotationObject.name.lastName}.`;
dotNotationDiv.append(dotNotationParagraph2);

// Accessing the object's properties and methods using bracket notation

const bracketNotationDiv = document.querySelector('.bracket_notation');

const bracketNotationObject = {
  name: {
    firstName: 'Peter',
    lastName: 'Olum'
  },
  age: 33,
  greeting() {
    const bracketNotationParagraph1 = document.createElement('p');
    bracketNotationParagraph1.textContent = `Hi ${this['name']['firstName']}!`;
    bracketNotationDiv.append(bracketNotationParagraph1);
  }
};

bracketNotationObject.greeting();

const bracketNotationParagraph2 = document.createElement('p');
bracketNotationParagraph2.textContent = `My name is ${bracketNotationObject['name']['firstName']} ${bracketNotationObject['name']['lastName']}. I'm ${bracketNotationObject['age']} years old.`;
bracketNotationDiv.append(bracketNotationParagraph2);

// Setting object members

const settingObjectMembersDiv = document.querySelector('.setting_object_members');

const settingObjectMembersObject = {};

settingObjectMembersObject.name = {
  'firstName': 'Peter',
  'lastName': 'Olum'
};

settingObjectMembersObject.heightMeters = 1.72;

settingObjectMembersObject.sayYourHeight = function () {
  const settingObjectMembersParagraph1 = document.createElement('p');
  settingObjectMembersParagraph1.textContent = `My name is ${this.name.firstName} ${this.name.lastName}. I'm ${this.heightMeters} meters tall.`;
  settingObjectMembersDiv.appendChild(settingObjectMembersParagraph1);
};

settingObjectMembersObject.sayYourHeight();


// What is "this"
const whatIsThisDiv = document.querySelector('.what_is_this');

const whatIsThisPerson1 = {
  name: 'Peter',
  profession: 'Software Engineer',
  introduceSelf() {
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `Hi! I'm ${this.name}. I'm a ${this.profession}.`;
    whatIsThisDiv.appendChild(paragraph1);
  }
};

const whatIsThisPerson2 = {
  name: 'Martin',
  profession: 'Civil Engineer',
  introduceSelf() {
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `Hi! I'm ${this.name}. I'm a ${this.profession}.`;
    whatIsThisDiv.appendChild(paragraph1);
  }
};

whatIsThisPerson1.introduceSelf();
whatIsThisPerson2.introduceSelf();


// Introducing constructors

// First version of an object which is just a function

function createPerson(firstName, lastName, profession) {
  const Person = {};
  Person.name = { firstName: firstName, lastName: lastName };
  Person.profession = profession;
  Person.introduceSelf = function () {
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `Hi! I'm ${this.name.firstName}. I'm a ${this.profession}.`;
    return paragraph1;
  };
  return Person;
}

const firstVersionDiv = document.querySelector('.first_version');

const martin = createPerson('Martin', 'Njoroge', 'Civil Engineer');
firstVersionDiv.appendChild(martin.introduceSelf());

const peter = createPerson('Peter', 'Olum', 'Software Engineer');
firstVersionDiv.appendChild(peter.introduceSelf());

// Using a constructor

function Person(firstName, lastName, profession) {
  this.name = { firstName: firstName, lastName: lastName },
    this.profession = profession;
  this.introduceSelf = function () {
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `Hi! I'm ${this.name.firstName}. I'm a ${this.profession}.`;
    return paragraph1;
  };
}

const usingAConstructorDiv = document.querySelector('.using_a_constructor');

const martin2 = new Person('Martin', 'Njoroge', 'Civil Engineer');
usingAConstructorDiv.appendChild(martin2.introduceSelf());

const peter2 = new Person('Peter', 'Olum', 'Software Engineer');
usingAConstructorDiv.appendChild(peter2.introduceSelf());


// Test your skills: Object basics

// Task 1

const cat = {
  name: 'Pee',
  gender: 'female',
  color: 'white',
  greeting: function () {
    console.log('Meow!');
  }
};

const task1Div = document.querySelector('.task_1');
const task1Paragraph1 = document.createElement('p');
task1Paragraph1.textContent = `Peter's cat is called ${cat['name']}. It is a ${cat['gender']} cat and it is ${cat['color']} in color.`;
task1Div.appendChild(task1Paragraph1);

// Update cat information
catName = 'Mee';
catGender = 'male';
catColor = 'black';

cat.name = catName;
cat.gender = catGender;
cat.color = catColor;

const task1Paragraph2 = document.createElement('p');
task1Paragraph2.textContent = 'Update cat information';
task1Div.appendChild(task1Paragraph1);

const task1Paragraph3 = document.createElement('p');
task1Paragraph3.textContent = `Mike's cat is called ${cat['name']}. It is a ${cat['gender']} cat and it is ${cat['color']} in color.`;
task1Div.appendChild(task1Paragraph3);


// Task 2

const band = {
  name: 'Sauti Sol',
  nationality: 'Kenyan',
  genres: ['African popular music (Afro-pop)', 'Boomba music (kapuka)'],
  members: [
    { name: 'Polycarp Otieno', role: ['vocalist', 'guitar', 'piano'] },
    { name: 'Savara Mudigi', role: ['vocalist', 'record producer', 'drums', 'bass guitar'] },
    { name: 'Willis Chimano', role: ['baritone', 'performer', 'guitar'] },
    { name: 'Bien-Aimé Baraza', role: ['vocalist', 'guitar', 'piano'] }
  ],
  cityFormed: 'Nairobi',
  yearFormed: 2005,
  albums: [
    { name: 'mwanzo', yearReleased: 2008 },
    { name: 'Sol Filosofia', yearReleased: 2011 },
    { name: 'Live and Die in Afrika', yearReleased: 2015 },
    { name: 'Afrikan Sauce', yearReleased: 2019 },
    { name: 'Midnight Train', yearReleased: 2020 }
  ]

};

const task2Div = document.querySelector('.task_2');

const task2Paragraph1 = document.createElement('p');

function generateGenresText() {
  if (band.genres.length === 2) {
    return `${band.genres.join(' and ')}`;
  }

  let genresText = '';
  for (let i = 0; i < band.genres.length; i++) {
    if (i < band.genres.length - 1) {
      genresText += `${band.genres[i]}, `;
    } else {
      genresText += `and ${band.genres[i]}.`;
    }
  }
  return genresText;
}

function generateMembersText() {
  if (band.members.length === 2) {
    return `${band.members.join(' and ')}`;
  }

  let membersText = '';
  for (let i = 0; i < band.members.length; i++) {
    if (i < band.members.length - 1) {
      membersText += `${band.members[i].name} (${band.members[i].role.join(', ')}), `;
    } else {
      membersText += `and ${band.members[i].name} (${band.members[i].role.join(', ')})`;
    }
  }
  return membersText;
}

function generateAlbumText() {
  let albumText = '';
  for (let i = 0; i < band.albums.length; i++) {
    if (i < band.albums.length - 1) {
      albumText += `${band.albums[i].name} on ${band.albums[i].yearReleased}, `;
    } else {
      albumText += ` and ${band.albums[i].name} on ${band.albums[i].yearReleased}.`;
    }
  }
  return albumText;
}

task2Paragraph1.innerHTML = `${band.name} is a ${band.nationality} 
${generateGenresText()} that was formed in ${band.cityFormed} in 
${band.yearFormed} by ${generateMembersText()}. They released their album ${generateAlbumText()}`;

task2Div.appendChild(task2Paragraph1);


// Task 3

const cat1 = {
  name: 'Pee',
  gender: 'male',
  color: 'black',
  greeting: function () {
    const text = `Hello, said ${this.name} the ${this.gender} ${this.color} cat.`;
    return text;
  }
};

const cat2 = {
  name: 'Mee',
  gender: 'female',
  color: 'white',
  greeting: function () {
    const text = `Hello, said ${this.name} the ${this.gender} ${this.color} cat.`;
    return text;
  }
};

const task3Div = document.querySelector('.task_3');

const task3Paragraph1 = document.createElement('p');
task3Paragraph1.textContent = cat1.greeting();
task3Div.appendChild(task3Paragraph1);

const task3Paragraph2 = document.createElement('p');
task3Paragraph2.textContent = cat2.greeting();
task3Div.appendChild(task3Paragraph2);

// Task 4

function Cat(name, gender, color) {
  this.name = name,
    this.gender = gender,
    this.color = color,
    this.greeting = function() {
      const text = `Hello, said ${this.name} the ${this.gender} ${this.color} cat.`;
      return text;
    }
}

const task4Div = document.querySelector('.task_4');

const task4Paragraph1 = document.createElement('p');
pee = new Cat('Pee', 'male', 'black')
task4Paragraph1.textContent = pee.greeting();
task4Div.appendChild(task4Paragraph1);

const task4Paragraph2 = document.createElement('p');
mee = new Cat('Mee', 'female', 'white')
task4Paragraph2.textContent = mee.greeting();
task4Div.appendChild(task4Paragraph2);