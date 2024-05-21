document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirm-email');
    var emailMatchMessage = document.getElementById('email-match-message');

    form.addEventListener('submit', function (event) {
        if (email.value !== confirmEmail.value) {
            emailMatchMessage.style.display = 'block';
            alert('Emails do not match!');
            event.preventDefault(); // Prevent form submission
        } else {
            emailMatchMessage.style.display = 'none';
            alert('Email sent. Thank you!');
        }
    });

    confirmEmail.addEventListener('input', checkEmailMatch);

    function checkEmailMatch() {
        if (email.value !== confirmEmail.value) {
            emailMatchMessage.style.display = 'block';
        } else {
            emailMatchMessage.style.display = 'none';
        }
    }
});
