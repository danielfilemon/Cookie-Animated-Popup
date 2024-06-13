// script.js

document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptBtn');

    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 1000); // Show the popup after 1 second

    acceptBtn.addEventListener('click', () => {
        cookieConsent.classList.remove('show');
        // Here you can set a cookie to remember the user's choice
    });
});


