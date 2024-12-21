// Project data
const projects = [
    {
        title: "Project 1",
        description: "Description of your first project. Add details about what technologies you used and what problems you solved.",
        github: "https://github.com/username/project1"
    },
    {
        title: "Project 2",
        description: "Description of your second project. Explain the challenges you faced and how you overcame them.",
        github: "https://github.com/username/project2"
    },
    {
        title: "Project 3",
        description: "Description of your third project. Highlight the key features and your role in development.",
        github: "https://github.com/username/project3"
    }
];

// Load projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-placeholder"></div>
            <div class="content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button onclick="openModal('${project.title}')">Learn More</button>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// Modal functionality
const modal = document.getElementById('projectModal');
const closeButton = document.querySelector('.close-button');

function openModal(projectTitle) {
    const project = projects.find(p => p.title === projectTitle);
    if (project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalLink').href = project.github;
        modal.style.display = 'block';
    }
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

closeButton.onclick = closeModal;

// Form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Reset form
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});
