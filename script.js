'use strict';

//SELECT DIFFERENT ELEMENTS
const title = document.querySelector('.header-title');
const btnReset = document.querySelector('.reset');
const btnRules = document.querySelector('.rules');
const choicesPrevious = document.querySelector('.choice-previous');
const choicesPrompt = document.querySelector('.choices-prompt');
const btnLeft = document.querySelector('.bnt-left');
const btnRight = document.querySelector('.btn-right');

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
