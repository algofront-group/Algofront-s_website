// Algofront Agency Scripts - Optimized

// Highlight active page in navbar
(function highlightActivePage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const search = window.location.search;
    const currentFull = path + search;

    // Normalize simple root cases
    const isRoot = (path === 'index.html' && search === '');

    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Check for exact match first (handles "contact.html" vs "contact.html?ref=digital")
        if (href === currentFull) {
            link.classList.add('active');
        }
        // Handle root variations
        else if (isRoot && (href === '' || href === 'index.html' || href === '/')) {
            link.classList.add('active');
        }
    });
})();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email')?.value;
        const message = document.getElementById('message')?.value;

        // Basic validation
        if (!email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Success message
        const submitBtn = contactForm.querySelector('.form-submit');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sent! ✓';
        submitBtn.disabled = true;

        // Reset form after 2 seconds
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Header scroll effect with optimized RAF throttling
let lastScroll = 0;
let ticking = false;
const header = document.getElementById('header');

const updateHeader = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 500) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
    ticking = false;
};

const requestTick = () => {
    if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
    }
};

window.addEventListener('scroll', requestTick, { passive: true });

// Optimize all animations for 60+ FPS
(function optimizeAnimations() {
    // Detect if device prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Disable animations for accessibility
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        return;
    }

    // Force hardware acceleration on all animated elements
    const animatedElements = document.querySelectorAll('.hero-orb, .logo-gallery-track, .premium-capability-card, .accordion');

    animatedElements.forEach(el => {
        el.style.willChange = 'transform';
        el.style.transform = 'translateZ(0)';
    });

    // Cleanup will-change after animations complete to save memory
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (!el.matches(':hover') && !el.classList.contains('active')) {
                el.style.willChange = 'auto';
            }
        });
    }, 3000);
})();


// Simple accessible accordion behavior
(function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    if (!accordions.length) return;

    accordions.forEach(acc => {
        const button = acc.querySelector('.accordion-toggle');
        const content = acc.querySelector('.accordion-content');

        if (!button || !content) return;

        // Set initial expanded state
        if (acc.classList.contains('active')) {
            button.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            button.setAttribute('aria-expanded', 'false');
        }

        button.addEventListener('click', () => {
            const isActive = acc.classList.contains('active');

            // Use RAF for smooth accordion animation
            window.requestAnimationFrame(() => {
                // Close all others
                accordions.forEach(other => {
                    if (other !== acc && other.classList.contains('active')) {
                        other.classList.remove('active');
                        other.querySelector('.accordion-toggle')?.setAttribute('aria-expanded', 'false');
                        const otherContent = other.querySelector('.accordion-content');
                        if (otherContent) otherContent.style.maxHeight = null;
                    }
                });

                // Toggle current
                if (isActive) {
                    acc.classList.remove('active');
                    button.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = null;
                } else {
                    acc.classList.add('active');
                    button.setAttribute('aria-expanded', 'true');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    });

    // Optimize resize handling with debounce and RAF
    let resizeTimer;
    let resizeTicking = false;

    const handleResize = () => {
        accordions.forEach(acc => {
            if (acc.classList.contains('active')) {
                const content = acc.querySelector('.accordion-content');
                if (content) content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
        resizeTicking = false;
    };

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!resizeTicking) {
                window.requestAnimationFrame(handleResize);
                resizeTicking = true;
            }
        }, 250);
    }, { passive: true });
})();


// Initialize hero orbs with subtle randomness
(function initHeroOrbs() {
    const orbs = document.querySelectorAll('.hero-orb');
    if (!orbs.length) return;

    const randomBetween = (min, max) => Math.random() * (max - min) + min;

    const positionOrbs = () => {
        // Use RAF for smooth initial positioning
        window.requestAnimationFrame(() => {
            orbs.forEach((orb, idx) => {
                const xOffset = Math.round(randomBetween(-40, 40));
                const yOffset = Math.round(randomBetween(-60, 60));
                const scale = (1 + randomBetween(-0.02, 0.03)).toFixed(3);

                orb.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0) scale(${scale})`;

                const baseDur = [3, 4, 4, 2.6][idx % 4] || 3.5;
                orb.style.animationDuration = (baseDur + randomBetween(-0.6, 0.6)) + 's';
                orb.style.opacity = (0.75 + randomBetween(0, 0.2)).toFixed(2);
            });
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', positionOrbs);
    } else {
        positionOrbs();
    }

    // Optimized resize handler with RAF
    let resizeTimer;
    let resizeTicking = false;

    const handleOrbResize = () => {
        positionOrbs();
        resizeTicking = false;
    };

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!resizeTicking) {
                window.requestAnimationFrame(handleOrbResize);
                resizeTicking = true;
            }
        }, 250);
    }, { passive: true });
})();

// Simple hero animation toggle
(function simpleHeroToggle() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    if (!(path === '' || path === 'index.html' || path === '/')) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.documentElement.classList.add('simple-hero-enabled');

    const canvas = document.getElementById('indexDNA');
    if (canvas) canvas.style.display = 'none';
})();

// Intersection Observer for performance - only animate visible elements
(function initIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is visible, enable animations
                entry.target.style.willChange = 'transform';
                entry.target.classList.add('is-visible');
            } else {
                // Element not visible, save resources
                if (!entry.target.matches(':hover')) {
                    entry.target.style.willChange = 'auto';
                }
            }
        });
    }, observerOptions);

    // Observe heavy animated elements
    const heavyElements = document.querySelectorAll('.premium-capability-card, .testimonial-mini, .accordion, .logo-gallery-section');
    heavyElements.forEach(el => observer.observe(el));
})();

// Smooth scroll polyfill for older browsers with RAF
(function smoothScrollPolyfill() {
    if ('scrollBehavior' in document.documentElement.style) return;

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (!target) return;

            e.preventDefault();

            const startPos = window.pageYOffset;
            const targetPos = target.getBoundingClientRect().top + startPos;
            const distance = targetPos - startPos;
            const duration = 800;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPos, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        });
    });
})();