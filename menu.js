var rainAudio = document.getElementById('rain-audio');
var thunderAudio = document.getElementById('thunder-audio');
var fireplaceAudio = document.getElementById('fireplace-audio');
var waveAudio = document.getElementById('wave-audio');
var highwayAudio = document.getElementById('highway-audio');
var libraryAudio = document.getElementById('library-audio');
var natureAudio = document.getElementById('nature-audio');
var windChimesAudio = document.getElementById('Wind Chimes-audio');
var birdsAudio = document.getElementById('birds-audio');
var coffeeAudio = document.getElementById('coffee-audio');
var barAudio = document.getElementById('bar-audio');
var restaurantAudio = document.getElementById('restaurant-audio');

var volumeControl = document.getElementById('volume-control');

volumeControl.addEventListener('input', function() {
    var volume = parseFloat(this.value);
    
    // voulume set
    rainAudio.volume = volume;
    thunderAudio.volume = volume;
    fireplaceAudio.volume = volume;
    waveAudio.volume = volume;
    highwayAudio.volume = volume;
    libraryAudio.volume = volume;
    natureAudio.volume = volume;
    windChimesAudio.volume = volume;
    birdsAudio.volume = volume;
    coffeeAudio.volume = volume;
    barAudio.volume = volume;
    restaurantAudio.volume = volume;
});

// play-pause
document.getElementById('rainy-button').addEventListener('click', function() {
    togglePlay(rainAudio, this);
});

document.getElementById('thunder-button').addEventListener('click', function() {
    togglePlay(thunderAudio, this);
});

document.getElementById('fireplace-button').addEventListener('click', function() {
    togglePlay(fireplaceAudio, this);
});

document.getElementById('wave-button').addEventListener('click', function() {
    togglePlay(waveAudio, this);
});

document.getElementById('highway-button').addEventListener('click', function() {
    togglePlay(highwayAudio, this);
});

document.getElementById('library-button').addEventListener('click', function() {
    togglePlay(libraryAudio, this);
});

document.getElementById('Nature-button').addEventListener('click', function() {
    togglePlay(natureAudio, this);
});

document.getElementById('WindChimes-button').addEventListener('click', function() {
    togglePlay(windChimesAudio, this);
});

document.getElementById('Birds-button').addEventListener('click', function() {
    togglePlay(birdsAudio, this);
});

document.getElementById('Coffee-button').addEventListener('click', function() {
    togglePlay(coffeeAudio, this);
});

document.getElementById('Bar-button').addEventListener('click', function() {
    togglePlay(barAudio, this);
});

document.getElementById('Restaurant-button').addEventListener('click', function() {
    togglePlay(restaurantAudio, this);
});

// Function to toggle play/pause
function togglePlay(audio, button) {
    if (audio.paused) {
        audio.play();
        button.textContent = '⬛';
    } else {
        audio.pause();
        audio.currentTime = 0;
        button.textContent = 'PLAY';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var waveAudio = document.getElementById("wave-audio");
    waveAudio.volume = 0.1;
});

document.addEventListener("DOMContentLoaded", function() {
    var waveAudio = document.getElementById("thunder-audio");
    thunderAudio.volume = 0.25;
});

document.addEventListener("DOMContentLoaded", function() {
    var waveAudio = document.getElementById("fireplace-audio");
    fireplaceAudio.volume = 0.5;
});

document.addEventListener("DOMContentLoaded", function() {
    var waveAudio = document.getElementById("highway-audio");
    highwayAudio.volume = 0.2;
});

