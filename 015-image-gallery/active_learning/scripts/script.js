const displayedImage = document.querySelector('.displayed_image');
const thumbBar = document.querySelector('.thumb_bar');

const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const alternativeTexts = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg' : 'Large moth on a leaf'
  }

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternativeTexts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }
/* Wiring up the Darken/Lighten button */

button.addEventListener('click', () => {
    const buttonClass = button.getAttribute('class');
    if (buttonClass === 'dark') {
      button.setAttribute('class','light');
      button.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      button.setAttribute('class','dark');
      button.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });