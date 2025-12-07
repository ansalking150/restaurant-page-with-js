
document.getElementById("contactForm").addEventListener("submit", function (e) {e.preventDefault();

// Get input values
var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var subject = document.getElementById("subject").value.trim();
var message = document.getElementById("message").value.trim();

// Get error elements
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");

// Clear old messages



nameError.textContent = "";
emailError.textContent = "";
subjectError.textContent = "";
messageError.textContent = "";

var valid = true;

// Name validation
if (name === "") {
nameError.textContent = "Please enter your name.";
valid = false;
} else if (name.length < 3 || name.length > 15) {
nameError.textContent = "Name must be 3–15 characters.";
valid = false;
}

// Email validation
if (email === "") {
emailError.textContent = "Please enter your email.";
valid = false;
}
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email !== "" && !emailPattern.test(email)) {
emailError.textContent = "Please enter a valid email.";
valid = false;
}
if (subject === "") {
subjectError.textContent = "Please enter a subject.";
valid = false;
}

// Subject validation (optional)
if (subject !== "" && subject.length < 3) {
subjectError.textContent = "Subject must be at least 3 characters.";
valid = false;
}


// Message validation (optional)
if (message !== "" && message.length < 5) {
messageError.textContent = "Message must be at least 5characters.";
valid = false;
}

// If all valid
if (valid) {
alert("Form submitted successfully!");
// e.target.submit(); // uncomment if you want real submission
}
});





let btnLeft = document.querySelector('.left');
let btnRight = document.querySelector('.right');

let boxes = [
    document.getElementById('box1'),
    document.getElementById('box2'),
    document.getElementById('box3')
];

let currentIndex = 1;

function showBox(index) {
    boxes.forEach((box, i) => {
        box.style.opacity = (i === index) ? '1' : '0';
    });
}

btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length;
    showBox(currentIndex);
});

btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    showBox(currentIndex);
});

start
showBox(currentIndex);
