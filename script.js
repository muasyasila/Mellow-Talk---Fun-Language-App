const flagsContainer = document.querySelector('.country-flags');
const flagWidth = flagsContainer.firstElementChild.clientWidth;
const containerWidth = flagWidth * flagsContainer.children.length; // Total width of all flags
const animationDuration = 50; // Adjust this value for a slower animation

flagsContainer.style.animationDuration = `${animationDuration}s`;

// Adjust this value for slower or faster animation
const speed = containerWidth / (animationDuration * 60);

function adjustAnimationSpeed() {
  flagsContainer.style.animationDuration = `${animationDuration}s`;
  flagsContainer.style.animationTimingFunction = 'linear';
  flagsContainer.style.animationIterationCount = 'infinite';
  flagsContainer.style.animationPlayState = 'running';
}

function moveFlags() {
  adjustAnimationSpeed();
}

moveFlags();

function logout() {
  // Redirect to the login page
  window.location.href = "login.html"; // Replace "login.html" with the actual login page URL
}

function showSidebar() {
  // Remove the 'hidden' class to show the sidebar
  document.querySelector('.side-container').classList.remove('hidden');
}

function hideSidebar() {
  // Add the 'hidden' class to hide the sidebar
  document.querySelector('.side-container').classList.add('hidden');
}

const sideContainer = document.querySelector('.side-container');
let isHovered = false; // Track if the sidebar is currently being hovered

sideContainer.addEventListener('mouseenter', function() {
  isHovered = true;
  sideContainer.style.width = '30%'; // Adjust the width to reveal more of the sidebar
});

sideContainer.addEventListener('mouseleave', function() {
  if (!isHovered) {
    sideContainer.style.width = '10%'; // Set the width back to the default when not hovered
  }
});

// Additional event listener to keep the sidebar visible after it slides back in
sideContainer.addEventListener('transitionend', function() {
  if (!isHovered) {
    sideContainer.style.width = '10%'; // Set the width back to the default after the transition ends
  }
});

// Toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');

  // Update CSS variables based on the mode
  if (isDarkMode) {
    body.style.setProperty('--background-color', '#333333');
    body.style.setProperty('--text-color', '#ffffff');
  } else {
    body.style.setProperty('--background-color', '#ffffff');
    body.style.setProperty('--text-color', '#000000');
  }
}

// Example: Add a button to toggle dark mode
const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
darkModeToggleBtn.addEventListener('click', toggleDarkMode);

// Add this function to your existing JavaScript
function toggleMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const container = document.querySelector('.container');

  menuBtn.classList.toggle('menu-open');
  container.classList.toggle('menu-opened');
}

// Add this line only once
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);