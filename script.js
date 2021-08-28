const form = document.getElementById('form');
const email = document.getElementById('email');
// const submit = document.getElementById('submit');

form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    checkinputs();
});


function checkinputs() {
    const emailvalue = email.value.trim();

    if (emailvalue == '') {

        setErrorFor(email, 'Whoops! It looks like you forgot to add your email');
    }
    else if(!isEmail(email.value)){
        setErrorFor(email, 'Check your email please');
    }
    else {
        print("its ok");
    }

}

function setErrorFor(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    
    small.innerText = message;

    formcontrol.className = 'error';
}

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}  