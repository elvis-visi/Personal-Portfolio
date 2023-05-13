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

const toggleButton = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme'); //initially null
console.log(currentTheme);  //  current theme stored in local storage

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
}

toggleButton.addEventListener('click', function () {
  //If the <body> currently has the dark class, it's removed; if it doesn't
  // have the class, it's added.
    document.body.classList.toggle('dark');

  let theme = 'light';
  if (document.body.classList.contains('dark')) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);  //store current theme in localStorage

  console.log(document.body.classList);  //  log the classes on the body, including 'dark' if it's been added
});



