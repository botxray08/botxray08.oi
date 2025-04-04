
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading delay
    setTimeout(function() {
      // Add the 'loaded' class to animate in elements with fade-in class
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(function(element, index) {
        setTimeout(function() {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 300 * index);
      });
    }, 500);
  
    // Add hover effects to cards
    const cards = document.querySelectorAll('.hazard-card');
    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.card-icon i');
        icon.style.animation = 'rotate 0.5s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.card-icon i');
        icon.style.animation = '';
      });
      
      // Add click effect to buttons
      const button = card.querySelector('.card-button');
      button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
      });
      
      button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
    
    // CTA button animation
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
      });
      
      ctaButton.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
      });
      
      ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    }
    
    // Add scroll animation
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        const screenPosition = scrollPosition + window.innerHeight * 0.8;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    });
    
  });