let phoneForm = document.getElementById('phone_form');
let emailForm = document.getElementById('email_form');
let nameForm = document.getElementById('name_form');


nameForm.addEventListener('change', (event) =>{
    const nameFormValue = nameForm.value;
    const hasDigitsAndAlphabet =/[a-zA-Zа-яА-Я\s]+$/.test(nameFormValue);
    if (nameFormValue.length > 15 || nameFormValue.length < 3 || !hasDigitsAndAlphabet) {
        event.target.classList.add('invalid');
    } else {
        event.target.classList.remove('invalid');
    }
})
emailForm.addEventListener ('change', (event) =>{
    const emailValue = emailForm.value;
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
    if (emailValue.length > 15 || emailValue.length < 3 || !validation) {
        event.target.classList.add('invalid');
    } else {
        event.target.classList.remove('invalid');
    }
});
phoneForm.addEventListener('change', (event) =>{
    const phoneValue = phoneForm.value;
    const validatePhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(phoneValue);
    if (phoneValue.length > 10 || !validatePhone) {
        event.target.classList.add('invalid');
    } else {
        event.target.classList.remove('invalid');
    }
})
