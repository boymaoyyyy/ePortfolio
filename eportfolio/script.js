// Project data
const projects = [
    {
        title: "Inventory Management System",
        description: "A comprehensive inventory management solution developed to streamline stock tracking and business operations. Key features include real-time stock updates, low inventory alerts, product categorization, and detailed reporting capabilities. Built with a focus on user-friendly interface and efficient data management.",
        
        image: "eportfolio/images/inventory.jpg"
    },
    {
        title: "Interactive Python Game",
        description: "An engaging Python-based game that demonstrates object-oriented programming principles. Features include dynamic gameplay mechanics, score tracking, and interactive user interface. The game showcases my ability to implement game logic, handle user input, and create an entertaining user experience.",
        
        image: "eportfolio/images/pythongme.jpg"
    },
    {
        title: "Enhanced Dijkstra Algorithm Implementation",
        description: "An optimized version of Dijkstra's shortest path algorithm with additional features for route optimization. This implementation includes improvements such as path visualization, multiple waypoint support, and performance enhancements. Demonstrates strong algorithmic thinking and optimization skills.",
        image: "eportfolio/images/dijkstra.jpg"
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
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', { name, email, message });
    
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Smooth scrolling
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
