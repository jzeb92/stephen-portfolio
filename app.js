/**
 * Stephen Carlick Portfolio - Application Logic
 * 
 * Handles:
 * - Content rendering from data.js
 * - Scroll-linked behaviors
 * - Project accordions
 * - Lightbox functionality
 * - Magnetic button effects
 * - Accessibility features
 */

(function() {
  'use strict';

  // ============================================
  // Utility Functions
  // ============================================
  
  /**
   * Check if user prefers reduced motion
   */
  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  /**
   * Debounce function for performance
   */
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  /**
   * Throttle function for scroll events
   */
  const throttle = (fn, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // ============================================
  // Content Rendering
  // ============================================

  /**
   * Render all content from SITE_DATA
   */
  function renderContent() {
    if (typeof SITE_DATA === 'undefined') {
      console.error('SITE_DATA not found. Make sure data.js is loaded.');
      return;
    }

    // Hero content
    document.getElementById('heroPositioning').innerHTML = SITE_DATA.positioning;
    document.getElementById('linkedinLink').href = SITE_DATA.linkedin;
    
    // Hero image
    const heroImageContainer = document.querySelector('.hero-image');
    const heroImage = document.getElementById('heroImage');
    if (SITE_DATA.heroImage) {
      if (SITE_DATA.heroImage.placeholder) {
        heroImageContainer.classList.add('placeholder');
        heroImage.style.display = 'none';
      } else {
        heroImage.src = SITE_DATA.heroImage.src;
        heroImage.alt = SITE_DATA.heroImage.alt;
      }
    }

    // Brand strip (disabled for now)
    // const brandStrip = document.getElementById('brandStrip');
    // if (brandStrip) {
    //   brandStrip.innerHTML = SITE_DATA.brands
    //     .map(brand => {
    //       if (brand.logo) {
    //         return `<img src="${brand.logo}" alt="${brand.name}" class="brand-logo" loading="lazy">`;
    //       }
    //       return `<span class="brand-text">${brand.name}</span>`;
    //     })
    //     .join('');
    // }

    // Skills
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = SITE_DATA.skills
      .map(skill => `<li>${skill}</li>`)
      .join('');

    // About
    document.getElementById('aboutParagraph').textContent = SITE_DATA.about.paragraph;
    const waysIWorkList = document.getElementById('waysIWorkList');
    waysIWorkList.innerHTML = SITE_DATA.about.waysIWork
      .map(way => `<li>${way}</li>`)
      .join('');

    // Projects
    renderProjects();

    // Testimonials
    renderTestimonials();

    // Contact
    document.getElementById('contactEmail').textContent = SITE_DATA.email;
    document.querySelector('.contact-email').href = `mailto:${SITE_DATA.email}`;
    document.getElementById('contactPhone').textContent = SITE_DATA.phone;

    // Footer year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  }

  /**
   * Render project cards
   */
  function renderProjects() {
    const container = document.getElementById('projectsContainer');
    
    container.innerHTML = SITE_DATA.projects.map(project => `
      <article class="project-card reveal-on-scroll" id="project-${project.id}">
        <div class="project-header" role="button" tabindex="0" aria-expanded="false" aria-controls="content-${project.id}">
          <div class="project-years-display" aria-hidden="true">
            ${project.years}
          </div>
          <div class="project-meta">
            <h3 class="project-title">
              <span class="project-title-text">
                ${project.title}
                <span class="project-title-underline"></span>
              </span>
              ${project.subtitle ? `<span class="project-title-subtitle">${project.subtitle}</span>` : ''}
            </h3>
            <div class="project-role">
              <span>${project.role}</span>
            </div>
          </div>
          <div class="project-toggle">
            <span>View</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 6l4 4 4-4"/>
            </svg>
          </div>
        </div>
        <div class="project-content" id="content-${project.id}">
          <div class="project-content-inner">
            <div class="project-body">
              <div class="project-details">
                <p class="project-summary">${project.summary}</p>
                
                ${project.focus && project.focus.length > 0 ? `
                  <div class="project-focus">
                    <h4>Focus areas</h4>
                    <ul>
                      ${project.focus.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
                
                ${project.links && project.links.length > 0 ? `
                  <div class="project-links-section">
                    <h4>Selected work</h4>
                    <div class="project-links">
                      ${project.links.map(link => `
                        <a href="${link.url}" class="project-link${link.featured ? ' featured' : ''}" target="_blank" rel="noopener noreferrer">
                          ${link.text}
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M6 3h7v7M13 3L6 10"/>
                          </svg>
                        </a>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                
                ${project.note ? `<p class="project-note">${project.note}</p>` : ''}
              </div>
              
              ${project.artefacts && project.artefacts.length > 0 ? `
                <div class="project-artefacts">
                  ${project.artefacts.map((artefact, i) => `
                    <div class="artefact${artefact.placeholder ? ' placeholder' : ''}" 
                         data-src="${artefact.src}" 
                         data-alt="${artefact.alt}"
                         data-project="${project.id}"
                         data-index="${i}"
                         tabindex="0"
                         role="button"
                         aria-label="View ${artefact.alt}">
                      ${!artefact.placeholder ? `<img src="${artefact.src}" alt="${artefact.alt}" loading="lazy">` : ''}
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach event listeners to project headers
    document.querySelectorAll('.project-header').forEach(header => {
      header.addEventListener('click', toggleProject);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleProject.call(header, e);
        }
      });
    });

    // Attach event listeners to artefacts
    document.querySelectorAll('.artefact:not(.placeholder)').forEach(artefact => {
      artefact.addEventListener('click', openLightbox);
      artefact.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox.call(artefact, e);
        }
      });
    });
  }

  /**
   * Render testimonials
   */
  function renderTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    
    container.innerHTML = SITE_DATA.testimonials.map((testimonial, i) => `
      <blockquote class="testimonial" id="testimonial-${i}">
        <p class="testimonial-quote">${testimonial.quote}</p>
        
        ${testimonial.expanded ? `
          <p class="testimonial-expanded">${testimonial.expanded}</p>
          <button class="testimonial-read-more" aria-expanded="false" aria-controls="testimonial-${i}">
            Read more
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 4.5l3 3 3-3"/>
            </svg>
          </button>
        ` : ''}
        
        <footer class="testimonial-attribution">
          <cite class="testimonial-author">${testimonial.author}</cite>
          <span class="testimonial-role">${testimonial.role}, ${testimonial.company}</span>
        </footer>
      </blockquote>
    `).join('');

    // Attach event listeners to read more buttons
    document.querySelectorAll('.testimonial-read-more').forEach(btn => {
      btn.addEventListener('click', toggleTestimonial);
    });
  }

  // ============================================
  // Project Accordion
  // ============================================

  /**
   * Toggle project accordion
   */
  function toggleProject(e) {
    const card = this.closest('.project-card');
    const isExpanded = card.classList.contains('expanded');
    
    // Update ARIA
    this.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle class
    card.classList.toggle('expanded');
    
    // Update toggle text
    const toggleText = this.querySelector('.project-toggle span');
    toggleText.textContent = isExpanded ? 'View' : 'Close';
  }

  /**
   * Toggle testimonial expanded content
   */
  function toggleTestimonial(e) {
    const testimonial = this.closest('.testimonial');
    const isExpanded = testimonial.classList.contains('show-expanded');
    
    testimonial.classList.toggle('show-expanded');
    this.setAttribute('aria-expanded', !isExpanded);
    this.innerHTML = isExpanded 
      ? 'Read more <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5l3 3 3-3"/></svg>'
      : 'Read less <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7.5l3-3 3 3"/></svg>';
  }

  // ============================================
  // Scroll Behaviors
  // ============================================

  /**
   * Handle scroll events
   */
  function handleScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    
    // Section nav visibility - show after scrolling 100px
    const sectionNav = document.querySelector('.section-nav');
    if (scrollY > 100) {
      sectionNav.classList.add('visible');
    } else {
      sectionNav.classList.remove('visible');
    }
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (scrollY > pageHeight * 0.25) {
      backToTop.hidden = false;
    } else {
      backToTop.hidden = true;
    }
    
    // Update active section in nav
    updateActiveSection();
  }

  /**
   * Update active section indicator
   */
  function updateActiveSection() {
    const sections = ['work', 'skills', 'about', 'testimonials', 'contact'];
    const navDots = document.querySelectorAll('.nav-dot');
    const viewportHeight = window.innerHeight;
    
    let currentSection = null;
    
    // Find the section that's most in view (first one whose top is above center)
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionId = sections[i];
      const section = document.getElementById(sectionId);
      if (!section) continue;
      
      const rect = section.getBoundingClientRect();
      
      // Section is active if its top has scrolled above the middle of the viewport
      if (rect.top <= viewportHeight * 0.5) {
        currentSection = sectionId;
        break;
      }
    }
    
    // Update nav dots
    navDots.forEach(dot => {
      const isActive = dot.dataset.section === currentSection;
      dot.classList.toggle('active', isActive);
    });
  }

  /**
   * Smooth scroll to anchor
   */
  function smoothScrollTo(target) {
    if (prefersReducedMotion()) {
      target.scrollIntoView();
      return;
    }
    
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ============================================
  // Lightbox
  // ============================================

  let lightboxImages = [];
  let currentLightboxIndex = 0;

  /**
   * Open lightbox
   */
  function openLightbox(e) {
    const projectId = this.dataset.project;
    const index = parseInt(this.dataset.index, 10);
    
    // Get all artefacts from this project
    const projectArtefacts = SITE_DATA.projects
      .find(p => p.id === projectId)
      ?.artefacts
      .filter(a => !a.placeholder) || [];
    
    if (projectArtefacts.length === 0) return;
    
    lightboxImages = projectArtefacts;
    currentLightboxIndex = index;
    
    updateLightboxImage();
    
    const lightbox = document.getElementById('lightbox');
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    lightbox.querySelector('.lightbox-close').focus();
  }

  /**
   * Close lightbox
   */
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lightboxImages = [];
    currentLightboxIndex = 0;
  }

  /**
   * Navigate lightbox
   */
  function navigateLightbox(direction) {
    if (lightboxImages.length <= 1) return;
    
    currentLightboxIndex = (currentLightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
  }

  /**
   * Update lightbox image
   */
  function updateLightboxImage() {
    const image = lightboxImages[currentLightboxIndex];
    const imgEl = document.getElementById('lightboxImage');
    const captionEl = document.getElementById('lightboxCaption');
    const currentEl = document.getElementById('lightboxCurrent');
    const totalEl = document.getElementById('lightboxTotal');
    
    imgEl.src = image.src;
    imgEl.alt = image.alt;
    captionEl.textContent = image.alt;
    currentEl.textContent = currentLightboxIndex + 1;
    totalEl.textContent = lightboxImages.length;
  }

  // ============================================
  // Magnetic Button Effect
  // ============================================

  /**
   * Initialize magnetic effect on buttons
   */
  function initMagneticButtons() {
    if (prefersReducedMotion()) return;
    
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Very subtle movement (max 4px)
        const moveX = x * 0.08;
        const moveY = y * 0.08;
        
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  // ============================================
  // Event Listeners
  // ============================================

  function initEventListeners() {
    // Scroll events (throttled)
    window.addEventListener('scroll', throttle(handleScroll, 100), { passive: true });
    
    // Back to top button
    document.querySelector('.back-to-top').addEventListener('click', () => {
      smoothScrollTo(document.getElementById('hero'));
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          e.preventDefault();
          smoothScrollTo(target);
          
          // Update URL without triggering scroll
          history.pushState(null, '', `#${targetId}`);
        }
      });
    });
    
    // Lightbox controls
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));
    
    // Close lightbox on backdrop click
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') {
        closeLightbox();
      }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
      const lightbox = document.getElementById('lightbox');
      if (lightbox.hidden) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox(-1);
          break;
        case 'ArrowRight':
          navigateLightbox(1);
          break;
      }
    });
  }

  // ============================================
  // Scroll Reveal Animation
  // ============================================

  /**
   * Initialize scroll reveal for elements
   */
  function initScrollReveal() {
    if (prefersReducedMotion()) return;
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger the animation based on element's position in the list
          const delay = Array.from(revealElements).indexOf(entry.target) * 100;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, Math.min(delay, 400)); // Cap delay at 400ms
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // Initialization
  // ============================================

  function init() {
    renderContent();
    initEventListeners();
    initMagneticButtons();
    initScrollReveal();
    
    // Initial scroll check
    handleScroll();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

