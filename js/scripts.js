// Project Data
const projects = {
    1: { title: "Project Title 1", image: "assets/project1.jpg", description: "Detailed description of Project 1." },
    2: { title: "Project Title 2", image: "assets/project2.jpg", description: "Detailed description of Project 2." },
    3: { title: "Project Title 3", image: "assets/project3.jpg", description: "Detailed description of Project 3." }
};

// Stack Interaction
const stackContainer = document.querySelector('.stack-container');
const cards = document.querySelectorAll('.card');
const projectDetails = document.getElementById('project-details');
const detailTitle = document.getElementById('detail-title');
const detailImage = document.getElementById('detail-image');
const detailDescription = document.getElementById('detail-description');
const closeBtn = document.querySelector('.close-btn');

function updateStack() {
    const scrollPos = stackContainer.scrollTop;
    cards.forEach((card, index) => {
        const cardOffset = index * 100 - scrollPos / 2; // Adjusts spacing and scroll sensitivity
        card.style.transform = `rotate(-10deg) translateZ(${cardOffset}px) translateY(${cardOffset}px)`;
        card.style.opacity = Math.max(0.3, 1 - Math.abs(cardOffset) / 200);
    });
}

stackContainer.addEventListener('scroll', updateStack);
updateStack(); // Initial positioning

// Card Selection
cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const project = projects[id];
        
        detailTitle.textContent = project.title;
        detailImage.src = project.image;
        detailDescription.textContent = project.description;
        
        projectDetails.style.display = 'block';
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Close Details
closeBtn.addEventListener('click', () => {
    projectDetails.style.display = 'none';
    cards.forEach(c => c.classList.remove('active'));
});
