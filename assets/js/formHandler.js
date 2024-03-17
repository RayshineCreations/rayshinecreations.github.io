const form = document.querySelector('.gform');
const successMessage = document.querySelector('.success_text');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.add('show');
    setTimeout(() => form.submit(), 2000);
} );


//https://script.google.com/macros/s/AKfycbzib4ucM0Q_euLKiEPurGoGU-pl31Dm8HBsr08ObTDqEcWWUf-Qf3SWb5ryQAnXJBFQ/exec