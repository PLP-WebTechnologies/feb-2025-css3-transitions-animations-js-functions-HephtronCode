// Select elements
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

// Check localStorage for animation preference
const isAnimated = localStorage.getItem('isAnimated');
if (isAnimated === 'true') {
  box.classList.add('animate');
}

// Add event listener to button
animateBtn.addEventListener('click', () => {
  box.classList.toggle('animate');
  // Save animation state to localStorage
  const animationState = box.classList.contains('animate');
  localStorage.setItem('isAnimated', animationState);
});