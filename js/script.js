// Example for a typewriter effect on the header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('#header h1');
    const text = "Welcome to My Manga Portfolio";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            header.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here
        }
    }

    typeWriter();
});
