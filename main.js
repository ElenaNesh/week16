const form=document.forms.userInfo;
const nameform=form.elements.userName;
const emailform=form.elements.userEmail;
const ageform=form.elements.userAge;
const genderform=document.querySelectorAll('input[name="gender"]');
const professionform=form.elements.profession;
const passwordform=form.elements.password;
const agreementform=form.elements.agree;
const userNameError=document.getElementById('usernameError');
const userEmailError=document.getElementById('userEmailError');
const userAgeError=document.getElementById('userAgeError');
const genderError=document.getElementById('genderError');
const passwordError=document.getElementById('passwordError');
const professionError=document.getElementById('professionError');
const agreementError=document.getElementById('agreeError')
const submitBtn=document.getElementById('submitBtn');
const nameRegex=/^[a-zA-Zа-яА-ЯЁё\s]+$/;
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

let checkName=false;
let checkEmail=false;
let checkAge=false;
let checkGender=false;
let checkProfession=false;
let checkPassword=false;
let checkAgreement=false;
submitBtn.disabled = true;


function validateFormName() {
    const userName=nameform.value.trim();
    if (!nameRegex.test(userName)) {
    userNameError.style.display='block';
    checkSubmit();
    } else {userNameError.style.display='none'
    checkName=true;
    checkSubmit();
    };
}

function validateFormEmail() {
    const userEmail=emailform.value.trim();
    if (!emailRegex.test(userEmail)) {
    userEmailError.style.display='block';
    checkSubmit();
    } else {userEmailError.style.display='none';
    checkEmail=true;
    checkSubmit();
    }
}
function validateFormAge() {
    if (ageform.value==='') {
        userAgeError.style.display='block';
        checkSubmit();
    } else {userAgeError.style.display='none';
    checkAge=true;
    checkSubmit();
    }
}

function validateFormGender() {
    const gender=document.querySelectorAll('input[name="gender"]:checked');
    if (gender.length===0) {
        genderError.style.display='block';
        checkSubmit();
    } 
    else {genderError.style.display='none'
    checkGender=true;
    checkSubmit();
    };
}

function validateProfessionForm() {
    if (professionform.value==='') {
        professionError.style.display='block';
        checkSubmit();
    } else {professionError.style.display='none';
        checkProfession=true;
        checkSubmit();
    }
}

function validatePasswordForm() {
    const userpassword=passwordform.value.trim();
    if (userpassword===''||!passwordRegex.test(userpassword)) {
        passwordError.style.display='block';
        checkSubmit();
    } else {
        passwordError.style.display='none';
        checkPassword=true;
        checkSubmit();
    }
}

function validateAgreementForm() {
    const agreement=agreementform.checked;
    if (!agreement) {
        agreementError.style.display='block';
        checkAgreement=false;
        checkSubmit();
    } else {agreementError.style.display='none';
    checkAgreement=true;
    checkSubmit();
    }
}

nameform.addEventListener('input', validateFormName);
emailform.addEventListener('input', validateFormEmail);
ageform.addEventListener('input', validateFormAge);
passwordform.addEventListener('input', validatePasswordForm);
professionform.addEventListener('input', validateProfessionForm);
genderform.forEach(function(radio) {
    radio.addEventListener('change', validateFormGender)
});

agreementform.addEventListener('change', validateAgreementForm);

agreementform.addEventListener('input', function(){
    validateFormGender();
    validateProfessionForm();
    validatePasswordForm();
    validateFormName();
    validateFormEmail();
    validateFormAge();
    validateAgreementForm();
});



function checkSubmit() {
    if (checkName&&checkEmail&&checkAge&&checkGender&&checkProfession&&checkPassword&&checkAgreement) {
    submitBtn.disabled = false;
} else {submitBtn.disabled=true}
}

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    console.log(nameform.value, emailform.value, ageform.value, selectedGender.value, professionform.value, passwordform.value, agreementform.value);
    alert('Форма успешно отправлена!')
    form.reset();
    checkName = false;
    checkEmail = false;
    checkAge = false;
    checkGender = false;
    checkProfession = false;
    checkPassword = false;
    checkAgreement = false;
    submitBtn.disabled = true;
    })