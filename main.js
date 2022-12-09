const buttons = document.querySelectorAll('.btn-circle');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset')
const mreset = document.getElementById('mreset')
const choices = ['paper', 'rock', 'scissor'];
const user_select = document.getElementById('user_select')
const computer_select = document.getElementById('computer_select')
const winner = document.getElementById('winner')
// const header = document.getElementById('.container')



let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {                           // adding event listioner to each button
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('data-choice');

    checkWinner();                                      // checking the winner after selection
  });
});

reset.addEventListener('click', () => {                 // adding event listener to play button
  main.style.display = 'flex';
  selection.style.display = 'none';
})

mreset.addEventListener('click', () => {                 // adding event listener to play button
  main.style.display = 'flex';
  main.style.marginTop = '100px';
  selection.style.display = 'none';
  mreset.style.display = 'none';
})



function checkWinner() {
  const computerChoice = pickRandomChoice();
  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);
  if (userChoice === computerChoice) {
    winner.innerText = 'Draw'
  }
  else if (
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    updateScore(1);
    winner.innerText = 'win'
  } else {
    winner.innerText = 'lose'
    updateScore(-1);
  }

  main.style.display = 'none';
  // mbtn.style.display = 'inline-block';
  selection.style.display = 'flex';
  mreset.style.display = 'flex';

}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}

function updateSelection(selectionEl, choic) {
  selectionEl.classList.remove('btn-paper');
  selectionEl.classList.remove('btn-scissor');
  selectionEl.classList.remove('btn-rock');

  const img = selectionEl.querySelector('img');
  selectionEl.classList.add(`btn-${choic}`);
  selectionEl.querySelector('img').src = `./images/icon-${choic}.svg`
  img.alt = choic
}
