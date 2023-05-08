
const firstname = document.querySelector('#firstNameInput');
const lastname = document.querySelector('#lastNameInput');
const email = document.querySelector('#emailInput');


signupForm.addEventListener('submit', function(e){

    if(this.firstname.value.trim() === ""){
    document.querySelector('.firstname-error').innerHTML = 'Please enter a Firstname';
    e.preventDefault();
    } else  {
        document.querySelector('.firstname-error').innerHTML = '';
    }

    if(this.lastname.value.trim() === ""){
    document.querySelector('.lastname-error').innerHTML = 'Please enter a Lastname';
    e.preventDefault();
    } else  {
        document.querySelector('.lastname-error').innerHTML = '';
    }

    if(this.email.value.trim() === ""){
    document.querySelector('.email-error').innerHTML = 'Please enter a email';
    e.preventDefault();
    } else  {
        document.querySelector('.email-error').innerHTML = '';
    }
    
})	
