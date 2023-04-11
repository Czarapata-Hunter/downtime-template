'use strict';

//SELECT DIFFERENT ELEMENTS
const title = document.querySelector('.header-title');
const btnReset = document.querySelector('.reset');
const btnRules = document.querySelector('.rules');
const choicesPrevious = document.querySelector('.choice-previous');
const choicesPrompt = document.querySelector('.choices-prompt');
const btnLeft = document.querySelector('.bnt-left');
const btnRight = document.querySelector('.btn-right');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//PICTURES

//SETUP
let successCount, failCount, playing, rewardsArray; // <= NamingChange

//RESET
const reset = () => {
  successCount = 0;
  failCount = 0;
  rewardsArray = [];
  playing = true;
};

//RULES
btnRules.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const closeRules = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', function () {
  closeRules();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeRules();
  }
});
