// main.js

// TODO
// Volume grid container
const volumeImage = document.getElementById("volume-image");
const volumeNumber = document.getElementById("volume-number");
const volumeSlider = document.getElementById("volume-slider");

// Audio Selection
const airHornButton = document.getElementById("radio-air-horn");
const carHornButton = document.getElementById("radio-car-horn");
const partyHornButton = document.getElementById("radio-party-horn");

// Audio
const audio = document.getElementById("horn-sound");

// Honk Button
const honkButton = document.getElementById("honk-btn");

let volume = 100;

// Add Listeners
honkButton.setAttribute('type', 'button');
honkButton.addEventListener("click", () => {audio.play(); });
airHornButton.addEventListener('click', () => {
    audio.setAttribute('src', "./assets/media/audio/air-horn.mp3");
});
carHornButton.addEventListener('click', () => {
    audio.setAttribute('src', "./assets/media/audio/car-horn.mp3");
});
partyHornButton.addEventListener('click', () => {
    audio.setAttribute('src', "./assets/media/audio/party-horn.mp3");
});

/**
 * Changes image and button enabling based on volume
 */
const checkVolume = () => {
    if (volume > 66) {
        volumeImage.setAttribute('src', './assets/media/icons/volume-level-3.svg');
    } else if (volume > 34) {
        volumeImage.setAttribute('src', './assets/media/icons/volume-level-2.svg');
    } else if (volume > 1) {
        volumeImage.setAttribute('src', './assets/media/icons/volume-level-1.svg');
    } else {
        volumeImage.setAttribute('src', './assets/media/icons/volume-level-0.svg');
    }
    
    if (volume == 0) {
        honkButton.disabled = true;
    } else {
        honkButton.disabled = false;
    }
}

// Change the slider and number with each other, changing the actual volume
volumeSlider.oninput = () => {
    volume = volumeSlider.value;
    volumeNumber.value = volume;
    volumeSlider.value = volume;
    audio.volume = volume/100;
    checkVolume();
}

volumeNumber.oninput = () => {
    volume = volumeNumber.value;
    volumeNumber.value = volume;
    volumeSlider.value = volume;
    audio.volume = volume/100;
    checkVolume();
}

