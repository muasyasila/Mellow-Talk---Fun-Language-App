document.addEventListener('DOMContentLoaded', function () {
  const flagsContainer = document.querySelector('.country-flags');
  const sideContainer = document.querySelector('.side-container');
  const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
  const menuBtn = document.querySelector('.menu-btn');
  const container = document.querySelector('.container');

  // Total width of all flags
  const flagWidth = flagsContainer?.firstElementChild?.clientWidth || 0;
  const containerWidth = flagWidth * (flagsContainer?.children?.length || 0);

  // Adjust this value for a slower animation
  const animationDuration = 50;

  // Adjust this value for slower or faster animation
  const speed = containerWidth / (animationDuration * 60);

  flagsContainer.style.animationDuration = `${animationDuration}s`;

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
    sideContainer.classList.remove('hidden');
  }

  function hideSidebar() {
    // Add the 'hidden' class to hide the sidebar
    sideContainer.classList.add('hidden');
  }

  sideContainer.addEventListener('mouseenter', function () {
    sideContainer.style.width = '30%';
  });

  sideContainer.addEventListener('mouseleave', function () {
    if (!sideContainer.classList.contains('hovered')) {
      sideContainer.style.width = '10%';
    }
  });

  sideContainer.addEventListener('transitionend', function () {
    if (!sideContainer.classList.contains('hovered')) {
      sideContainer.style.width = '10%';
    }
  });

  sideContainer.addEventListener('mouseover', function () {
    sideContainer.classList.add('hovered');
  });

  sideContainer.addEventListener('mouseout', function () {
    sideContainer.classList.remove('hovered');
  });

  function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    if (isDarkMode) {
      body.style.setProperty('--background-color', '#333333');
      body.style.setProperty('--text-color', '#ffffff');
    } else {
      body.style.setProperty('--background-color', '#ffffff');
      body.style.setProperty('--text-color', '#000000');
    }
  }

  if (darkModeToggleBtn) {
    darkModeToggleBtn.addEventListener('click', toggleDarkMode);
  } else {
    console.error('#darkModeToggleBtn not found');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  } else {
    console.error('.menu-btn not found');
  }

  function toggleMenu() {
    menuBtn.classList.toggle('menu-open');
    container.classList.toggle('menu-opened');
  }
});