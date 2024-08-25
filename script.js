const endDate = new Date("2024-12-31T23:59:59-05:00"); // December 31, 2024, 11:59:59 PM Eastern Time

function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("voting-box").innerHTML = "Voting has ended, no more votes.";
        clearInterval(countdownInterval); // Stop the countdown when time is up
        document.getElementById("vote-form").style.display = 'none'; // Hide the voting form
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `
        Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}

// Handle vote submission
document.getElementById("submit-vote").addEventListener("click", function() {
    const now = new Date();
    if (now > endDate) {
        alert("Voting has ended, no more votes.");
        return;
    }

    const form = document.getElementById("vote-form");
    const formData = new FormData(form);
    const vote = formData.get("vote");

    if (vote) {
        // Process the vote (this is where you would typically send the vote data to a server)
        document.getElementById("vote-result").innerText = `You voted for ${vote}!`;
    } else {
        alert("Please select an option before submitting your vote.");
    }
});

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately
