// Show message when Apply Now button is clicked
function showMessage() {
    alert('Thank you for your interest! Please fill the contact form below to apply.');
    const contactSection = document.querySelector('.contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Scroll to contact from featured section
function scrollToContact() {
    const contactSection = document.querySelector('.contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Handle form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && phone && message) {
            alert(`Thank you ${name}! We have received your message. We'll contact you soon at ${email}`);
            
            // Reset form
            contactForm.reset();
            
            // You can add additional logic here like sending to a backend server
        } else {
            alert('Please fill in all fields!');
        }
    });
}

// Add smooth scroll behavior for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add 3D mouse tracking effect to elements
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.showcase, .course-box, .footer-box');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        const rotateX = (mouseY / rect.height) * 5;
        const rotateY = (mouseX / rect.width) * 5;
        
        // Only apply the effect on hover
        if (card.isHovered) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
});

// Track hover state for 3D effect
document.querySelectorAll('.showcase, .course-box, .footer-box').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.isHovered = true;
    });
    
    card.addEventListener('mouseleave', function() {
        this.isHovered = false;
        this.style.transform = '';
    });
});

// Parallax effect on scroll for hero and featured sections
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const featured = document.querySelector('.featured');
    const opportunities = document.querySelector('.opportunities');
    
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroOffset = hero.getBoundingClientRect().top + window.pageYOffset;
        const parallaxAmount = (scrolled - heroOffset) * 0.5;
        if (Math.abs(parallaxAmount) < 2000) {  // Limit parallax to prevent extreme values
            hero.style.backgroundPosition = `center ${parallaxAmount}px`;
        }
    }
    
    if (featured) {
        const scrolled = window.pageYOffset;
        const featuredOffset = featured.getBoundingClientRect().top + window.pageYOffset;
        const parallaxAmount = (scrolled - featuredOffset) * 0.5;
        if (Math.abs(parallaxAmount) < 2000) {  // Limit parallax to prevent extreme values
            featured.style.backgroundPosition = `center ${parallaxAmount}px`;
        }
    }
    
    if (opportunities) {
        const scrolled = window.pageYOffset;
        const opportunitiesOffset = opportunities.getBoundingClientRect().top + window.pageYOffset;
        const parallaxAmount = (scrolled - opportunitiesOffset) * 0.5;
        if (Math.abs(parallaxAmount) < 2000) {  // Limit parallax to prevent extreme values
            opportunities.style.backgroundPosition = `center ${parallaxAmount}px`;
        }
    }
});

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.showcase, .course-box, .footer-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    observer.observe(el);
});

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 100, 255, 0.3)';
    } else {
        navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(100, 100, 255, 0.2)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Console message for fun
console.log('%cWelcome to Gemzle School! 🎓', 'font-size: 20px; color: #64b5f6; font-weight: bold;');
console.log('%cBuilt with 3D CSS Effects ✨', 'font-size: 14px; color: #ffd700;');
