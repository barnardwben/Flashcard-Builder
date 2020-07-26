
// Buttons
const addBtn = document.querySelector('.addBtn');
const xBtn = document.querySelector('.xBtn');
const sbmBtn = document.querySelector('.sbmBtn');
const editBtn = document.querySelector('.editBtn');
const dltBtn = document.querySelector('.dltBtn');

// Elements
const dvc = document.querySelector('.dvc');
const fc = document.querySelector('.fc');
const bc = document.querySelector('.bc');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

// Show/hide link
const sha = document.querySelector('.sha');

// Text input
const que = document.querySelector('.que');
const ans = document.querySelector('.ans');

// Event Listeners
addBtn.addEventListener('click', newCard);
xBtn.addEventListener('click', hideContainer);
sbmBtn.addEventListener('click', submitCard);
sha.addEventListener('click', revealAnswer);

function newCard() {
  if (dvc.classList.contains('hd1')) {
    dvc.classList.remove('hd1');
  } else {
    console.log("Doesn't contain class");
  }
}

function hideContainer() {
  if (dvc.classList.contains('hd1')) {
    console.log("Doesn't contain class");
  } else {
    dvc.classList.add('hd1');
  }
}

function submitCard(e) {
  if (que.value && ans.value) {
    cardFront.innerHTML = que.value;
    cardBack.innerHTML = ans.value;
    if (fc.classList.contains('hd2')) {
      fc.classList.remove('hd2');
    }
    que.value = "";
    ans.value = "";
  } else {
    console.log(false);
  }

  e.preventDefault();
}

function revealAnswer() {
 if (bc.classList.contains('hd3')) {
   bc.classList.remove('hd3');
 } else if (!bc.classList.contains('hd3')) {
   bc.classList.add('hd3');
 }
}