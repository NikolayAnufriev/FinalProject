const formEl = document.querySelector('.signUpOrRegistration');
const ratingBtnsEl = formEl.querySelectorAll('.ratingSignInput');
const inputPasswordEl = formEl.querySelector('.passwordForm');
const inputReTypePasswordEl = formEl.querySelector('.retypePassword');

inputReTypePasswordEl.addEventListener('input', () => {
    if (inputReTypePasswordEl.value !== inputPasswordEl.value) {
        inputPasswordEl.classList.add('invalid');
        inputReTypePasswordEl.classList.add('invalid');
        inputPasswordEl.classList.remove('valid');
        inputReTypePasswordEl.classList.remove('valid');
    } else {
        inputPasswordEl.classList.add('valid');
        inputReTypePasswordEl.classList.add('valid'); inputPasswordEl.classList.remove('invalid');
        inputReTypePasswordEl.classList.remove('invalid');
    };
});

formEl.addEventListener('submit', (e) => {
    if (inputPasswordEl.classList.contains('invalid') || inputReTypePasswordEl.classList.contains('invalid')) {
        e.preventDefault();
    } else {
        inputPasswordEl.classList.remove('invalid');
        inputReTypePasswordEl.classList.remove('invalid');
        inputPasswordEl.classList.remove('valid');
        inputReTypePasswordEl.classList.remove('valid');
    };
});

ratingBtnsEl.forEach(elem => {
    elem.addEventListener('change', () => {
        checkedNumber = document.querySelector('.ratingSignInput:checked').value || undefined;
        ratingBtnsEl.forEach(item => {
            const currentLabel = item.previousElementSibling;
            (item.value <= checkedNumber) ? currentLabel.classList.add('check') : currentLabel.classList.remove('check');
        });
    });
});