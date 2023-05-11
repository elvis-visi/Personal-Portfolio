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