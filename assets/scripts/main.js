// Mobile menu btn
const burgerMenu = document.querySelector('.burger-menu');

//close menu btn
const closeMenu = document.querySelector('.close-link');

//mobile nav
const mobileNav = document.querySelector('.mobile-nav');

//show mobile nav
burgerMenu.addEventListener('click', toggleNav);

//hide mobile nav

closeMenu.addEventListener('click', toggleNav);

function toggleNav(e) {
    e.preventDefault();
    e.stopPropagation();
    mobileNav.classList.toggle('open');
}

document.querySelector('body').addEventListener('click', function(){
    mobileNav.classList.remove('open');
    signupModal.classList.remove('open');
});

document.querySelector('.mobile-nav ul').addEventListener('click', function(e){
    e.stopPropagation();
})

//Signup Modal Form

const signupButtons = document.querySelectorAll('.signup-btn');
const signupModal = document.querySelector('#signupModal');
const modalClose = document.querySelector('.modal-close');
const signupForm = document.querySelector('.signup-form');
const formInputs = document.querySelectorAll('.form-input')

//Add event listeners for sign up buttons

for (button of signupButtons) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        signupModal.classList.add('open');
        mobileNav.classList.remove('open');
    })
}

//Add event listeners for modal close button

modalClose.addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.remove('open');

});

signupForm.addEventListener('click', function(e) {
    e.stopPropagation();
});


document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape') {
        signupModal.classList.remove('open');
    }
})

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    /*
        Zadatak:
        Uraditi validaciju forme, tako da ukoliko neko od polja forma nema unetu vrednost,
        ispod input polja dodati paragraf element sa tekstom ('Polje mora imati vrednost').
        Tekst greske treba da ima crvenu boji.
    */

    clerErrors();

    for (formInput of formInputs) {
        if(!formInput.value) {
         showError(formInput);  
    }
}});

function showError(formInput) {
    const inputError = document.createElement('p');
    inputError.innerText = 'Polje mora imati vrednost';
    inputError.style.color = 'red';

    formInput.parentElement.appendChild(inputError);
}

function clerErrors() {
    const inputErrors = document.querySelectorAll('.input-wrapper p');

    for(inputError of inputErrors) {
        inputError.remove();
    }   
}


    