const themeSelector = document.querySelector('#theme');
const body = document.querySelector('body');
const logo = document.querySelector('#logo');

function changeTheme() {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_blue.webp'; // make sure you have this image
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; // make sure you have this image
  }
}

themeSelector.addEventListener('change', changeTheme);
