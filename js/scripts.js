// Project Data
const projects = {
    1: { title: "Project Title 1", image: "assets/project1.jpg", description: "Detailed description of Project 1." },
    2: { title: "Project Title 2", image: "assets/project2.jpg", description: "Detailed description of Project 2." },
    3: { title: "Project Title 3", image: "assets/project3.jpg", description: "Detailed description of Project 3." }
};

// Tile Interaction
const tiles = document.querySelectorAll('.tile');
const projectDetails = document.getElementById('project-details');
const detailTitle = document.getElementById('detail-title');
const detailImage = document.getElementById('detail-image');
const detailDescription = document.getElementById('detail-description');
const closeBtn = document.querySelector('.close-btn');

// Tile Selection
tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const id = tile.getAttribute('data-id');
        const project = projects[id];
        
        detailTitle.textContent = project.title;
        detailImage.src = project.image;
        detailDescription.textContent = project.description;
        
        projectDetails.style.display = 'block';
        tiles.forEach(t => t.classList.remove('active'));
        tile.classList.add('active');
    });
});

// Close Details
closeBtn.addEventListener('click', () => {
    projectDetails.style.display = 'none';
    tiles.forEach(t => t.classList.remove('active'));
});
