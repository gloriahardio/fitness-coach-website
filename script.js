// script.js

// Function to toggle login modal
function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Function to select a plan
function selectPlan(plan) {
    const selectedPlan = document.getElementById('selectedPlan');
    selectedPlan.innerText = `You have selected: ${plan}`;
}

// Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
