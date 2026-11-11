//your JS code here. If required.
const btn=document.getElementById("btn")
const stopbutton=document.querySelector("stop")
const currentAudio=null;

btn.addEventListerner("click",()=>{
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

    // Stop button functionality
       stopButton.addEventListener("click", () => {
       if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
});
