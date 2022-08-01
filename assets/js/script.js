let clockId;
let time = 60;
let qI = 0;
let prompt = document.querySelector('main');
let right = document.querySelector('.right');
let wrong = document.querySelector('.wrong');

startTimer = () => {
    if(time<1) {
        clearInterval(clockId);
        time = 1;
        // return scoreboard
    };

    time--;
    document.querySelector('.time').innerText = time;
};

const isCorrect = () => {
    displayQuestion();
    right.style.display = 'block';

    setTimeout(()=> right.style.display = 'none', 2000)
};

const handleButton = correctAns => {
    correctAns == questions[qI].C ? isCorrect() : console.log('Is bad!!! Need function here.');;
};

const displayQuestion = () => {

    const { Q, A, C } = questions[qI];
    prompt.innerHTML = `<h1>${Q}</h1>`;
    
    A.forEach(ans => {
        prompt.innerHTML += `<button onclick = 'handleButton("${ans}")'>${ans}</button>`
    });

    qI++;
}; 

const gameOver = () =>{
    if(questions == 0)
    console.log("Game Over")
};

handleClick = () => {
    clockId = setInterval(startTimer, 1000);
    displayQuestion();
};

document.querySelector('.start').addEventListener('click',handleClick);