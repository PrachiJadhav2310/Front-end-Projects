const scriptURL = 'https://script.google.com/macros/s/AKfycbwOB-5pBjbK1uWn6O2kL3NlWBQGJvmZweUCvDvhUnrm2tQ-5RKzBZ_KhHGiqGJ9jvWWtg/exec';
const form = document.forms['reservation-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(reservation-form);
  fetch(scriptURL, { 
    method: 'POST', 
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    console.log('Form submission successful:', data);
    alert("Thank you! Your form has been submitted successfully.");
    form.reset(); // Optional: Reset the form after successful submission
  })
  .catch(error => {
    console.error('Error during form submission:', error);
    alert("An error occurred while submitting the form. Please try again later.");
  });
});
