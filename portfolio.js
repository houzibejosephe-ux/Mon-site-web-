// Animation scroll
const elements = document.querySelectorAll(".hidden");

function showOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Formulaire
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").textContent = "Message envoyé ✅";
});

// Mode sombre / clair
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        toggle.textContent = "🌞";
    } else {
        toggle.textContent = "🌙";
    }
});