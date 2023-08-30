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
