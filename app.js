document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
  
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  
    // Initialize EmailJS
    emailjs.init("eZymzdbHhI4uoKDmN");  
  
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const submitBtn = document.getElementById('submitBtn');
  
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
  
      // Name Validation
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        nameError.classList.remove('hidden');
        isValid = false;
      } else {
        nameError.classList.add('hidden');
      }
  
      // Email Validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.remove('hidden');
        isValid = false;
      } else {
        emailError.classList.add('hidden');
      }
  
      // Message Validation
      if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter a message';
        messageError.classList.remove('hidden');
        isValid = false;
      } else {
        messageError.classList.add('hidden');
      }
  
      if (isValid) {
        emailjs.send("service_x54uobb", "template_xzc92h6", {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        }, "eZymzdbHhI4uoKDmN")
        .then(() => {
          alert("Form submitted successfully!");
          contactForm.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        });
      }
      
    });
  });
  