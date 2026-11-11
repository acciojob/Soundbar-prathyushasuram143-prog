//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopbutton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const sound = button.textContent.trim();

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });
});

// Stop button functionality
stopbutton.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});