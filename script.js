'use strict';

const modalOpenButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalExitButton = document.querySelector('.close-modal');

for (let i = 0; i < modalOpenButtons.length; i++) {
    modalOpenButtons[i].addEventListener('click', function () {
        setModalState('remove');
    });
}
modalExitButton.addEventListener('click', function () {
    setModalState('add');
});

overlay.addEventListener('click', function () {
    setModalState('add');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        setModalState('add');
});

function setModalState(state) {
    modal.classList[`${state}`]('hidden');
    overlay.classList[`${state}`]('hidden');
}