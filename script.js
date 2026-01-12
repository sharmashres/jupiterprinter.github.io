

// Function for Smooth Scrolling
function scrollToContact() {
    const contact = document.getElementById('contact');
    if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize on page load
window.onload = initSlideshow;

function openWhatsApp() {
    // Company WhatsApp number with country code (no +, no spaces)
    var phoneNumber = "919811632064";  // Example: Indian number

    // Optional pre-filled message
    var message = "Hello,i just went through your website and I want to know more about your services.";

    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
// 2. Slideshow Logic
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Check if slides exist to prevent errors
    if (slides.length === 0) {
        console.error("No slides found! Check your HTML class names.");
        return;
    }

    function showNextSlide() {
        // Remove active class from the current slide
        slides[currentSlide].classList.remove('active');
        
        // Calculate next slide index (loops back to 0 at the end)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to the new current slide
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds (5000ms)
    setInterval(showNextSlide, 5000);
}