// Display the start button after 10 seconds
setTimeout(() => {
    console.log('Displaying start button'); // Debugging output
    document.getElementById('start-button').classList.add('show');
    document.getElementById('gif-image').classList.remove('hidden');
    document.getElementById('gif-image2').classList.remove('hidden');
    document.getElementById('gif-image3').classList.remove('hidden');
    document.getElementById('gif-image4').classList.remove('hidden');
    document.getElementById('gif-image5').classList.remove('hidden');
    document.getElementById('gif-image6').classList.remove('hidden');
}, 10000);

function startGame() {
    // Add explosion effect
    const startButton = document.getElementById('start-button');
    startButton.style.transition = 'transform 0.5s';
    startButton.style.transform = 'scale(5)';
    startButton.style.opacity = '0';


    // Prompt the student to input the partner's name
    const partnerName = prompt("クラスメイトの名前を入力してください:");

    // If a name is entered, update all elements with the class 'partner-name'
    if (partnerName) {
        document.querySelectorAll('.partner-name').forEach(element => {
            element.textContent = `${partnerName}の行動`;
        });
    }
    if (partnerName) {
        document.querySelectorAll('.partner-name1').forEach(element => {
            element.innerHTML = `あなたと${partnerName}さんが結託し、試験にカンニングした噂が担任の先生の耳に入れた。<img src="play.gif" alt="abomb Animation" />`;
        });
    }

    if (partnerName) {
        document.querySelectorAll('.partner-name2').forEach(element => {
            element.innerHTML = `あなたは後藤先生に軟禁されて尋問を受けている。同時に、${partnerName}さんも渡邊先生に同じ仕打ちを受けている<img src="whip.gif" alt="abomb Animation" /></strong>`;
        });
    }


    if (partnerName) {
        document.querySelectorAll('.partner-name3').forEach(element => {
            element.innerHTML = `確たる証拠がないので、後藤先生が${partnerName}さんもうすでにあなたを売ってたよと言うブラフをふっかけた。<img src="rpg7.gif" alt="abomb Animation" /><</strong>`;
        });
    }
    if (partnerName) {
        document.querySelectorAll('.partner-name4').forEach(element => {
            element.innerHTML = `あなたが留年、${partnerName}さんが無事`;
        });
    }
    if (partnerName) {
        document.querySelectorAll('.partner-name5').forEach(element => {
            element.innerHTML = `あなたが無事、${partnerName}さんが留年`;
        });
    }
    if (partnerName) {
        document.querySelectorAll('.partner-name6').forEach(element => {
            element.innerHTML = `裏切り：${partnerName}さんを告発し、すべての罪を${partnerName}さんに押しつける<img src="fight_connect.gif" alt="abomb Animation" />`;
        });
    }
    
    if (partnerName) {
        document.querySelectorAll('.partner-name7').forEach(element => {
            element.innerHTML = `裏切り：${partnerName}さん(満足度)`;
        });
    }
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
let resultMessage = ``;
let rowIndex;


if (playerChoice === 'cooperate' && computerChoice === 'betray') {
    // Increase the font size and GIF size
    resultMessage += `<span style="font-size: 2rem;">いい人って、早死にするよ。</span><img src='surviving.gif' alt='abomb Animation' style='width: 200px;' />`;
    rowIndex = 2;
} else if (playerChoice === 'betray' && computerChoice === 'betray') {
    resultMessage += `<span style="font-size: 2rem;">おめでとう、二人は心通じ合ってるね。仲良く地獄に落ちよう。</span><img src='agree.gif' alt='abomb Animation' style='width: 200px;' />`;
    rowIndex = 4;
}

// Display the result message
document.getElementById('result').innerHTML = resultMessage;


    // Highlight the corresponding row in the table
    document.querySelectorAll("tr")[rowIndex].style.backgroundColor = "#ffff99"; // Light yellow

    // Display the outcome message
    document.getElementById('result').innerHTML = resultMessage;
}

// Display the explosion 3 seconds before the start button appears
setTimeout(() => {
    document.getElementById('explosion').style.opacity = '1';
    document.getElementById('explosion').classList.remove('hidden');
}, 7000); // Explosion appears at 7 seconds (3 seconds before the start button)
