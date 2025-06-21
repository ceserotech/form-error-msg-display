string = "helLLlo";
regex = /[a-z]/;

console.log(regex.test(string))

let myForm = document.querySelector(".myform");
let fName = myForm.querySelector(".fname");
let span = myForm.querySelector(".span");

// console.log(span)
let lName = myForm.querySelector(".lname");
let gender = document.getElementsByName("gender");
console.log(gender)



myForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let isValid = true;

    function resetErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));
    }

    resetErrors();

    const firstName = document.getElementById('fname');
    if (!firstName.value.trim()) {
        document.getElementById('firstNameError').textContent = 'This field is required';
        firstName.classList.add('error');
        isValid = false;
    }

    const lastName = document.getElementById('lname');
    if (!lastName.value.trim()) {
        document.getElementById('lastNameError').textContent = 'This field is required';
        lastName.classList.add('error');
        isValid = false;
    }

    const email = document.getElementById('email');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        email.classList.add('error');
        isValid = false;
    }

    const queryType = document.querySelector('input[name="gender"]:checked');
    if (!queryType) {
        document.getElementById('queryTypeError').textContent = 'Please select a query type';
        isValid = false;
    }

    const message = document.getElementById('message');
    if (!message.value.trim()) {
        document.getElementById('messageError').textContent = 'This field is required';
        message.classList.add('error');
        isValid = false;
    }

    const consent = document.getElementById('consent');
    if (!consent.checked) {
        document.getElementById('consentError').textContent = 'To submit this form, please consent to being contacted';
        isValid = false;
    }
})
