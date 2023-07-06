// main.js

// Auto slide the banner images
// main.js

// Auto slide the banner images
// main.js

// Auto slide the banner images
function autoSlide() {
    const images = document.querySelectorAll('#home img.center-image');
    let currentIndex = 0;
  
    setInterval(() => {
      // Hide current image
      images[currentIndex].style.display = 'none';
  
      // Increment index or reset to 0 if the last image is reached
      currentIndex = (currentIndex + 1) % images.length;
  
      // Show next image
      images[currentIndex].style.display = 'block';
    }, 3000);
  }
  
  // Call the autoSlide function when the page is loaded
  window.addEventListener('load', autoSlide);
  
  // Call the autoSlide function when the page is loaded
  window.addEventListener('load', autoSlide);
  
  
  // Call the autoSlide function when the page is loaded
  window.addEventListener('load', autoSlide);
  
  // Validate the Contact Us form
  function validateForm(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return false;
    }
  
    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      emailInput.focus();
      return false;
    }
  
    if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      messageInput.focus();
      return false;
    }
  
    // Submit the form if all inputs are valid
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
  }
  