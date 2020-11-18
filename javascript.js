
const signUpButton = document.getElementById('signup');
const signInButton = document.getElementById('signin');
const container = document.getElementById('container1');
signUpButton.addEventListener('click', () =>
  container1.classList.add("right-panel-active")
);
signInButton.addEventListener('click', () =>
  container1.classList.remove('right-panel-active')
);
