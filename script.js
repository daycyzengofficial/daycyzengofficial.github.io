const words = ["a Java Developer ", "a Backend Engineer ", "a Code Lover "];
let i = 0, j = 0;
let isDeleting = false;

function typeEffect() {
    const el = document.getElementById("typewriter");
    const word = words[i];
    el.textContent = word.substring(0, j);
    if (!isDeleting && j < word.length) j++;
    else if (isDeleting && j > 0) j--;
    else if (!isDeleting && j === word.length) {
        isDeleting = true;
        setTimeout(typeEffect, 600);
        return;
    } else {
        isDeleting = false;
        i = (i + 1) % words.length;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", typeEffect);
