document.addEventListener('DOMContentLoaded', function() {
    // Simple animation on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Alert on form submission
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from actually submitting
        alert('Thank you for contacting me! I will get back to you soon.');
        
        // Optionally, clear the form fields after the alert
        contactForm.reset();
    });
});
