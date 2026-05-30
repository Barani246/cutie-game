const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");
const finalScreen = document.getElementById("final-screen");

const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

welcomeScreen.addEventListener("click", () => {

    welcomeScreen.classList.add("hidden");  
    gameScreen.classList.remove("hidden");

});

function moveButton() {

    const x = Math.random() * (
        window.innerWidth - noBtn.offsetWidth - 20
    );

    const y = Math.random() * (
        window.innerHeight - noBtn.offsetHeight - 20
    );

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("click", moveButton);

const timerScreen = document.getElementById("timer-screen");

yesBtn.addEventListener("click", () => {

    gameScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");

    setTimeout(() => {

        finalScreen.classList.add("hidden");

        timerScreen.classList.remove("hidden");

    }, 6000);

}); 
const meetingDate = new Date("2026-06-04T18:00:00");

function updateCountdown() {

    const now = new Date();

    const difference = meetingDate - now;

    if(difference <= 0){

        document.getElementById("countdown-container").innerHTML = `
            <h1>❤️ It's Finally Time ❤️</h1>
        `;

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();  
