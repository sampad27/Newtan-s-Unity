// Navigation
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show clicked section
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add to the navigation list in header
const sections = ['home', 'question-pattern', 'notes', 'payment', 'about', 'contact'];

// Notes Data
const notes = [
    { 
        title: 'Geomorphology Basics', 
        date: '2023-10-15', 
        category: 'Physical Geography', 
        link: '#',
        description: 'Fundamental concepts of landforms and their development processes'
    },
    { 
        title: 'Climatology Advanced', 
        date: '2023-10-20', 
        category: 'Physical Geography', 
        link: '#',
        description: 'Advanced atmospheric processes and weather systems'
    },
    { 
        title: 'Economic Geography', 
        date: '2023-10-25', 
        category: 'Human Geography', 
        link: '#',
        description: 'Spatial aspects of economic activities and development'
    },
    { 
        title: 'Oceanography', 
        date: '2023-11-05', 
        category: 'Physical Geography', 
        link: '#',
        description: 'Comprehensive study of oceans and marine ecosystems'
    },
    { 
        title: 'Population Geography', 
        date: '2023-11-10', 
        category: 'Human Geography', 
        link: '#',
        description: 'Distribution and dynamics of human populations'
    },
    { 
        title: 'Geopolitics', 
        date: '2023-11-15', 
        category: 'Political Geography', 
        link: '#',
        description: 'Geographical factors in international relations'
    }
];

// Load Notes
function loadNotes() {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    
    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p class="note-category">${note.category}</p>
            <p class="note-description">${note.description}</p>
            <div class="note-footer">
                <small>Uploaded: ${note.date}</small>
                <a href="${note.link}" class="download-btn">Download <i class="fas fa-download"></i></a>
            </div>
        `;
        notesContainer.appendChild(noteCard);
    });
}

// Copy UPI ID
function copyUpi() {
    const upiId = document.getElementById('upiId').textContent;
    navigator.clipboard.writeText(upiId).then(() => {
        alert('UPI ID copied to clipboard! Paste it in your payment app.');
    }).catch(err => {
        console.error('Failed to copy UPI ID: ', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = upiId;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('UPI ID copied to clipboard!');
    });
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.elements[0].value;
    const email = this.elements[1].value;
    const message = this.elements[3].value;
    
    // Here you would typically send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been sent successfully. We'll contact you at ${email} shortly.`);
    
    // Reset form
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Show home section by default
    document.querySelector('#home').classList.add('active');
    
    // Set first nav link as active
    document.querySelector('.nav a').classList.add('active');
    
    // Load notes
    loadNotes();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Add background text elements
    const bgTexts = ['Geography', 'Coaching', 'Excellence', 'Learning', 'Success'];
    const heroBgText = document.querySelector('.hero-bg-text');
    heroBgText.innerHTML = '';
    
    bgTexts.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        heroBgText.appendChild(p);
    });
});
// Add this to your existing JavaScript

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});
