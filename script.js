//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopbutton=document.querySelector(".stop")
const currentAudio=null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Stop previously playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play selected sound
        const sound = button.textContent.trim();

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });
});

// Stop button functionality
stopButton.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});