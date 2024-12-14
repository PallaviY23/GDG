const targetDate = new Date("January 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h2>Happy New Year!</h2>";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

const quotes = [
    '"Approach the New Year with resolve to find the opportunities hidden in each new day."',
    '"Learn from yesterday, live for today, hope for tomorrow."',
    '"This years book, at midnight turns to footnote in the next"',
    '"You are never too old to set another goal or to dream a new dream."',
    '"New year is the glittering light to brighten the dream-lined pathway of future."'
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

function updateQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
}

setInterval(updateQuote, 4000); // Change quotes every 4 seconds