// We start by creating an audioContext instance inside which to manipulate our track
const audioContext = new window.AudioContext;


// create constants that store references to our <audio>, <button>, and <input> elements
const audioElement = document.querySelector(".audio_element");
const pausedPlayButton = document.querySelector("#paused_play_button");
const volumeSlider = document.querySelector(".volume_slider");

// create a constant representing the source of our audio
const audioSource = audioContext.createMediaElementSource(audioElement);

/*  
include a couple of event handlers that serve to toggle between play and pause 
when the button is pressed and reset the display back to the beginning when the 
song has finished playing
*/
pausedPlayButton.addEventListener('click', () => {
  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // if track is stopped, play it
  if (pausedPlayButton.getAttribute('class') === 'paused') {
    audioElement.play();
    pausedPlayButton.setAttribute('class', 'playing');
    pausedPlayButton.textContent = 'Pause';
    // if track is playing, stop it
  } else if (pausedPlayButton.getAttribute('class') === 'playing') {
    audioElement.pause();
    pausedPlayButton.setAttribute("class", "paused");
    pausedPlayButton.textContent = "Play";
  }
});
// if track ends
audioElement.addEventListener("ended", () => {
  pausedPlayButton.setAttribute("class", "paused");
  pausedPlayButton.textContent = "Play";
});

// create a GainNode object using the AudioContext.createGain() method, which 
// can be used to adjust the volume of audio fed through it

const gainNode = audioContext.createGain();

// changes the value of the audio graph's gain (volume) whenever the slider 
// value is changed:
volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});

// Connect the different nodes in the audio graph up, which is done using the 
// AudioNode.connect() method available on every node type:

audioSource.connect(gainNode).connect(audioContext.destination);