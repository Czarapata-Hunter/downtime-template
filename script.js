'use strict';

//SELECT DIFFERENT ELEMENTS
const title = document.querySelector('.header-title');
//BUTTONS
const btnReset = document.querySelector('.btn-reset');
const btnRules = document.querySelector('.btn-rules');
const btnStart = document.querySelector('.btn-start');
const btnShoot = document.querySelector('.btn-shoot');
const btnShootAgain = document.querySelector('.btn-shoot-again');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');
const btnRiver = document.querySelector('.btn-river');
const btnMtn = document.querySelector('.btn-mtn');
const btnFast = document.querySelector('.btn-fast');
const btnSlow = document.querySelector('.btn-slow');
const btnCrouch = document.querySelector('.btn-crouch');
const btnClimb = document.querySelector('.btn-climb');
const btnCapture = document.querySelector('.btn-capture');
const btnKill = document.querySelector('.btn-kill');

//CHOICES
const choicesPrevious = document.querySelector('.choices-previous');
const choicesPrompt = document.querySelector('.choices-prompt');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//PICTURES

//SETUP
let successCount, failCount, playing, rewardsArray, animal; // <= NamingChange

const tiny = ['Rat', 'Frog', 'Lizard', 'Weasel', 'Mouse'];

const small = ['Rabbit', 'Grouse', 'Badger', 'Giant Rat', 'Small Fox'];

const medium = ['Deer', 'Goat', 'Ram', 'Cougar', 'Large Fox'];

const large = ['Black Bear', 'Wolf', 'Elk', 'Boar', 'Giant Goat'];

const huge = ['Giant Elk', 'Moose', 'Giant Boar', 'Kodiak Bear', 'Dire Wolf'];

//RESET
const reset = () => {
  successCount = 0;
  failCount = 0;
  rewardsArray = [];
  playing = true;
  animal = '';
};

reset();

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

//BEGIN MINI-GAME
btnStart.addEventListener('click', function () {
  btnStart.classList.add('hidden');
  btnLeft.classList.remove('hidden');
  btnRight.classList.remove('hidden');
  choicesPrompt.classList.remove('hidden');
  choicesPrompt.textContent =
    //CHANGE LINE DEPENDING
    'You reach the first split in the path. Do you take the LEFT or RIGHT?';
});

// CHOICES 1
// LEFT
btnLeft.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 2) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - Taking the LEFT path, you quickly spot some tracks';
    choicesPrevious.classList.remove('hidden');
    choicesPrompt.textContent =
      'The path up ahead splits, do you continue UP the path, or head DOWN?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - Taking the LEFT path, you do not spot any tracks';
    choicesPrevious.classList.remove('hidden');
    choicesPrompt.textContent =
      'The path up ahead splits, do you continue UP the path, or head DOWN?';
  }

  btnLeft.classList.add('hidden');
  btnRight.classList.add('hidden');
  btnUp.classList.remove('hidden');
  btnDown.classList.remove('hidden');
});

// RIGHT
btnRight.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 2) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - Taking the RIGHT path, you quickly spot some tracks.';
    choicesPrevious.classList.remove('hidden');
    choicesPrompt.textContent =
      'The path up ahead splits, do you continue UP the path, or head DOWN?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - Taking the RIGHT path, you do not spot any tracks.';
    choicesPrevious.classList.remove('hidden');
    choicesPrompt.textContent =
      'The path up ahead splits, do you continue UP the path, or head DOWN?';
  }

  btnLeft.classList.add('hidden');
  btnRight.classList.add('hidden');
  btnUp.classList.remove('hidden');
  btnDown.classList.remove('hidden');
});

// CHOICES 2
// UP
btnUp.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 2) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - Taking the path leading UP, you spot some snapped branches. Something has passed through here.';
    choicesPrompt.textContent =
      'Unfortunately, you do not pick up any other tracks. Did the animal head towards the RIVER or go up the MOUNTAIN?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - You take the path UP, but do not spot any animal tracks.';
    choicesPrompt.textContent =
      'Having no tracks to follow, do you think your luck will be better near the RIVER, or up the MOUNTAIN?';
  }

  btnUp.classList.add('hidden');
  btnDown.classList.add('hidden');
  btnRiver.classList.remove('hidden');
  btnMtn.classList.remove('hidden');
});

// DOWN
btnDown.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 2) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - Taking the path leading DOWN, you spot thick fur. Something has passed through here.';
    choicesPrompt.textContent =
      'Unfortunately, you do not see anymore fur as you continue. Did the animal head towards the RIVER or go up the MOUNTAIN?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - You take the path DOWN, but see no signs of animals passing through.';
    choicesPrompt.textContent =
      'Having no tracks to follow, do you think your luck will be better near the RIVER, or up the MOUNTAIN?';
  }

  btnUp.classList.add('hidden');
  btnDown.classList.add('hidden');
  btnRiver.classList.remove('hidden');
  btnMtn.classList.remove('hidden');
});

//CHOICES 3
// RIVER
btnRiver.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 2) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - Heading towards the RIVER, you smell an animal that passed through here not long ago.';
    choicesPrompt.textContent =
      'As you approach the River, smell quickly dissipates. Do you proceed FAST to follow the animal, or take it SLOW incase it is close?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - You head towards the river, but any chance of smelling an animal is blocked by the smell of fish.';
    choicesPrompt.textContent =
      'With nothing to go off of, do you move FAST in hopes of catching up to something, or take it SLOW as to not scare anything that may be close?';
  }

  btnRiver.classList.add('hidden');
  btnMtn.classList.add('hidden');
  btnFast.classList.remove('hidden');
  btnSlow.classList.remove('hidden');
});

// MOUNTAIN
btnMtn.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 2) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - Heading up the MOUNTAIN, you hear rocks shifting above you. Something is definitely up there!';
    choicesPrompt.textContent =
      'As you climb the MOUNTAIN, do you move FAST to close the distance between whatever is above you, or do you move SLOW as to not scare it?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - You head up the MOUNTAIN, but only hear the sounds of the wind rushing through the trees. Hopefully your scent is not carried too far on the wind.';
    choicesPrompt.textContent =
      'With the wind drowning out any sounds, do you move FAST to try and get clear of the wind, or do you move SLOW as to not startle anything that might be close by?';
  }

  btnRiver.classList.add('hidden');
  btnMtn.classList.add('hidden');
  btnFast.classList.remove('hidden');
  btnSlow.classList.remove('hidden');
});

// CHOICES 4
// FAST
btnFast.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 3) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - You move FAST up the mountain taking care not to slip. You see birds take flight off in the distance. Something definitely moved up ahead!';
    choicesPrompt.textContent =
      'Knowing something is ahead, do you continue at a CROUCH as to remain more hidden, or do you CLIMB the nearest tree and wait for it to come to you?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - You slip and slide your way up the mountain as rocks shift under your feet. Hopefully you did not scare any potential animals that were ahead.';
    choicesPrompt.textContent =
      'Hoping something is around you, do you CROUCH and continue forward, or do you CLIMB the nearest tree and wait for something to approach you?';
  }

  btnFast.classList.add('hidden');
  btnSlow.classList.add('hidden');
  btnCrouch.classList.remove('hidden');
  btnClimb.classList.remove('hidden');
});

// SLOW
btnSlow.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);

  if (dice > 3) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - You move SLOW up slowly55, listening intently for any signs of animal life. Luckily, you hear some twigs snap up ahead!';
    choicesPrompt.textContent =
      'Hearing the footsteps of an animal ahead, do you CROUCH and continue forward, or do you CLIMB the nearest tree, incase it is approaching you?';
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - You fear you may have moved to SLOW for your own good, and you hear no signs of life around you, besides your own beating heart.';
    choicesPrompt.textContent =
      'Do you CROUCH and continue forward, hoping to hear something over your own heart beat, or do you CLIMB the nearest tree and hope something passes below you soon enough?';
  }

  btnFast.classList.add('hidden');
  btnSlow.classList.add('hidden');
  btnCrouch.classList.remove('hidden');
  btnClimb.classList.remove('hidden');
});

// CHOICES 5
// GIVE ANIMAL
const giveAnimal = () => {
  if (successCount === 5) {
    animal = huge[Math.floor(Math.random() * huge.length)];
  } else if (successCount === 4) {
    animal = large[Math.floor(Math.random() * large.length)];
  } else if (successCount === 3) {
    animal = medium[Math.floor(Math.random() * medium.length)];
  } else if (successCount === 2) {
    animal = small[Math.floor(Math.random() * small.length)];
  } else {
    animal = tiny[Math.floor(Math.random() * tiny.length)];
  }
};

// CROUCH
btnCrouch.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);
  giveAnimal();

  if (dice > 4) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - You CROUCH your way forward, and you see the animal! Are you skilled enough to get the kill?';
    choicesPrompt.classList.add('hidden');
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - As you CROUCH, you barely see the animal as it takes off!';
    choicesPrompt.classList.add('hidden');
  }

  btnCrouch.classList.add('hidden');
  btnClimb.classList.add('hidden');
  btnShoot.classList.remove('hidden');
});

// CLIMB
btnClimb.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 5);
  giveAnimal();

  if (dice > 4) {
    successCount++;
    choicesPrevious.textContent =
      'SUCCESS - You CLIMB the nearest tree, and it does not take long for the animal to approach!';
    choicesPrompt.classList.add('hidden');
  } else {
    failCount++;
    choicesPrevious.textContent =
      'FAILURE - You almost lose your grip on the branch as you CLIMB, but you see the animal running away in fear. Shoot before it is too late!';
    choicesPrompt.classList.add('hidden');
  }

  btnCrouch.classList.add('hidden');
  btnClimb.classList.add('hidden');
  btnShoot.classList.remove('hidden');
  console.log(dice);
  console.log(successCount, failCount);
});

// SHOOT 1st
btnShoot.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 20);
  if (dice === 20) {
    choicesPrevious.textContent =
      'CRITICAL STRIKE! - Your shot was so skilled you can either choose to incapacitate the animal enough to CAPTURE it, or strike to for an immediate KILL!';
    btnCapture.classList.remove('hidden');
    btnKill.classList.remove('hidden');
    btnShoot.classList.add('hidden');
  } else if (dice > 15) {
    choicesPrevious.textContent =
      'Your is aim true, and you successfully kill the animal!';
    btnShoot.classList.add('hidden');
  } else if (dice > 1) {
    choicesPrevious.textContent =
      'You hit the animal, but it is not enough to get a clean kill! Take a shot before it disappears!';
    btnShoot.classList.add('hidden');
    btnShootAgain.classList.remove('hidden');
  } else {
    choicesPrevious.textContent =
      'CRITICAL FAILURE! - You miss by more than you care to admit, and the animal immediately leaves before you can even react.';
    btnShoot.classList.add('hidden');
  }
});

// SHOOT 2nd
btnShootAgain.addEventListener('click', function () {
  const dice = Math.ceil(Math.random() * 20);
  if (dice >= 7) {
    choicesPrevious.textContent =
      'Success! You manage to hit the animal as it sprints away, dropping it immediately.';
    btnShootAgain.classList.add('hidden');
  } else {
    choicesPrevious.textContent =
      'Unfortunately, your second shot misses and the animal escapes. No meat today for you.';
    btnShootAgain.classList.add('hidden');
  }
});
