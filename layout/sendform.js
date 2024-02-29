const scriptURL = 'https://script.google.com/macros/s/AKfycbwJsXJverqP6QPgetzD53rVW9DPunt2XdTIrJv7_6n7AZXKOm3PA0lCmxWsFWjJ84qPng/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})