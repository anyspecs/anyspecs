// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initButtonActions();
    initHeroLinks();
    smoothScrollToAnchor();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll spy for nav
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Scroll effects
function initScrollEffects() {
    // Fade in animations for cards
    const cards = document.querySelectorAll('.path-card, .how-item, .why-item');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
}

// Button actions
function initButtonActions() {
    // Primary CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Get Started') || btn.textContent.includes('Try ContextHub')) {
            btn.addEventListener('click', function(e) {
                // If it's not already a link, add loading state
                if (this.tagName !== 'A') {
                    e.preventDefault();
                    // Simulate loading state
                    const originalText = this.innerHTML;
                    this.innerHTML = '<svg class="btn-icon animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>Starting...';
                    this.disabled = true;
                    
                    setTimeout(() => {
                        // Redirect to main app
                        window.location.href = '../frontend/';
                    }, 1500);
                }
            });
        }
    });
    
    // Documentation buttons
    const docButtons = document.querySelectorAll('.btn-secondary');
    docButtons.forEach(btn => {
        if (btn.textContent.includes('Try Context Manager') && btn.tagName !== 'A') {
            btn.addEventListener('click', function() {
                window.location.href = '../frontend/contexts';
            });
        }
        
        if (btn.textContent.includes('Try Chat Interface') && btn.tagName !== 'A') {
            btn.addEventListener('click', function() {
                window.location.href = '../frontend/chat';
            });
        }
    });
    
    // Navigation link handlers
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.textContent.includes('Docs') && !link.href.includes('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const howSection = document.querySelector('.how-section');
                if (howSection) {
                    howSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
}

// Add smooth scroll for anchor links
function smoothScrollToAnchor() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add loading animation for page transitions
function showLoadingAnimation() {
    const loading = document.createElement('div');
    loading.className = 'loading-overlay';
    loading.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    
    document.body.appendChild(loading);
    
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loading);
        }, 300);
    }, 1000);
}

// Handle hero link clicks
function initHeroLinks() {
    const heroLink = document.querySelector('.hero-link');
    if (heroLink && heroLink.getAttribute('href') === '../frontend/chat') {
        heroLink.addEventListener('click', function(e) {
            e.preventDefault();
            showLoadingAnimation();
            setTimeout(() => {
                window.location.href = '../frontend/chat';
            }, 1000);
        });
    }
}



// CSS for loading animation and interactions
const style = document.createElement('style');
style.textContent = `
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    }
    
    .loading-spinner {
        text-align: center;
        color: var(--text-primary);
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 3px solid var(--border-color);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    .nav-link.active {
        color: var(--text-primary);
        position: relative;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary-color);
        border-radius: 1px;
    }
    
    /* Hover effects for cards */
    .path-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
        transition: all 0.3s ease;
    }
    
    .how-item:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
        transition: all 0.3s ease;
    }
    
    /* Button hover effects */
    .btn {
        transition: all 0.2s ease;
    }
    
    .btn:hover {
        transform: translateY(-1px);
    }
    
    /* Smooth transitions for all interactive elements */
    .nav-link,
    .hero-link,
    .footer-link,
    .trusted-logo {
        transition: all 0.2s ease;
    }
`;

document.head.appendChild(style);

