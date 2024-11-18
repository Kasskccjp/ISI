// Display the start button after 10 seconds
setTimeout(() => {
    console.log('Displaying start button'); // Debugging output
    document.getElementById('start-button').classList.add('show');
}, 10000);

function startGame() {
    // Add explosion effect
    const startButton = document.getElementById('start-button');
    startButton.style.transition = 'transform 0.5s';
    startButton.style.transform = 'scale(5)';
    startButton.style.opacity = '0';

    // Wait for the explosion effect, then show the game page
    setTimeout(() => {
        document.getElementById('start-page').style.display = 'none';
        document.getElementById('game-page').style.display = 'block';
    }, 500);
}

function makeChoice(playerChoice) {
    // If the player chooses "Betray," show the custom confirmation dialog
    if (playerChoice === 'betray') {
        const confirmDialog = document.getElementById('custom-confirm');
        confirmDialog.style.display = 'flex';

        // Handle Yes and No button clicks
        document.getElementById('yes-button').onclick = () => {
            confirmDialog.style.display = 'none';
            proceedWithChoice(playerChoice);
        };

        document.getElementById('no-button').onclick = () => {
            confirmDialog.style.display = 'none';
        };

        return;
    }

    // Proceed with choice if it's "Cooperate" or if "Yes" was confirmed for "Betray"
    proceedWithChoice(playerChoice);
}

function proceedWithChoice(playerChoice) {
    // Reset button colors
    document.querySelector("button.cooperate").style.backgroundColor = "";
    document.querySelector("button.betray").style.backgroundColor = "";

    // Reset table row colors
    document.querySelectorAll("tr").forEach(row => {
        row.style.backgroundColor = "";
    });

    // Change button color based on player's choice
    if (playerChoice === 'cooperate') {
        document.querySelector("button.cooperate").style.backgroundColor = "blue";
    } else if (playerChoice === 'betray') {
        document.querySelector("button.betray").style.backgroundColor = "red";
    }

    // Set the computer's choice to always be "betray"
    const computerChoice = 'betray';

    // Determine the corresponding row to highlight
    let resultMessage = `You chose ${playerChoice}. The other prisoner chose ${computerChoice}.<br>`;
    let rowIndex;

    if (playerChoice === 'cooperate' && computerChoice === 'betray') {
        resultMessage += "You cooperated, but the other betrayed. You get a heavy sentence, and they go free.";
        rowIndex = 2;
    } else if (playerChoice === 'betray' && computerChoice === 'betray') {
        resultMessage += "Both of you betrayed. You both get a moderate sentence.";
        rowIndex = 4;
    }

    // Highlight the corresponding row in the table
    document.querySelectorAll("tr")[rowIndex].style.backgroundColor = "#ffff99"; // Light yellow

    // Display the outcome message
    document.getElementById('result').innerHTML = resultMessage;
}
