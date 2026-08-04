const audio = document.getElementById("birthdayAudio");

const playButton = document.getElementById("playButton");


playButton.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        playButton.textContent = "❚❚";

    } else {

        audio.pause();

        playButton.textContent = "▶";

    }

});


audio.addEventListener("ended", () => {

    playButton.textContent = "▶";

});