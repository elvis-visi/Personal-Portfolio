window.addEventListener('DOMContentLoaded', (event) => {
    const gifs = document.querySelectorAll('.project-gif');

    gifs.forEach((gif) => {
        const staticSrc = gif.src;
        const gifSrc = gif.dataset.gif;

        gif.addEventListener('mouseover', () => {
            gif.src = gifSrc;
        });

        gif.addEventListener('mouseout', () => {
            gif.src = staticSrc;
        });
    });
});




const lightThemeIcon = document.getElementById('light-theme-icon');
const darkThemeIcon = document.getElementById('dark-theme-icon');

let currentTheme = localStorage.getItem('theme');
console.log("Initial currentTheme: ", currentTheme);  // current theme when the page loads

if (!currentTheme) {
  localStorage.setItem('theme', 'light');
  currentTheme = 'light';
  console.log("No theme set, so setting currentTheme to: ", currentTheme); 
}

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  lightThemeIcon.style.display = "none";
  darkThemeIcon.style.display = "block";
  console.log("Setting to dark theme."); 
} else {
  darkThemeIcon.style.display = "none";
  lightThemeIcon.style.display = "block";
  console.log("Setting to light theme."); 
}

lightThemeIcon.addEventListener('click', function () {
  document.body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  lightThemeIcon.style.display = "none";
  darkThemeIcon.style.display = "block";
  console.log("Clicked on light theme icon. Changing to dark theme."); 
});

darkThemeIcon.addEventListener('click', function () {
  document.body.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  darkThemeIcon.style.display = "none";
  lightThemeIcon.style.display = "block";
  console.log("Clicked on dark theme icon. Changing to light theme."); 
});



