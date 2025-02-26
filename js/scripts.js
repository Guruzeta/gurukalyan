// Project Detail Logic
if (window.location.pathname.includes("project-detail.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    const projects = {
        1: { title: "Project Title 1", image: "assets/project1.jpg", description: "Detailed description of Project 1." },
        2: { title: "Project Title 2", image: "assets/project2.jpg", description: "Detailed description of Project 2." },
        3: { title: "Project Title 3", image: "assets/project3.jpg", description: "Detailed description of Project 3." }
    };

    const project = projects[projectId];
    if (project) {
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-image").src = project.image;
        document.getElementById("project-description").textContent = project.description;
    }
}

// Slider Logic
const slider = document.querySelector('.slide-track');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 30; // Card width + margin

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

if (prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 3) { // Show 3 cards at a time
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
}
