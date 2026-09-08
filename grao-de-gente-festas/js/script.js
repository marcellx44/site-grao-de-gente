/* =========================================================
   GRÃO DE GENTE FESTAS — SCRIPTS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initCounters();
    initGallery();
});

/* ---------- HEADER: ALTERA APARÊNCIA AO ROLAR ---------- */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    const toggleHeader = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 40);
    };

    toggleHeader();
    window.addEventListener('scroll', toggleHeader, { passive: true });
}

/* ---------- MENU MOBILE ---------- */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!hamburger || !mobileMenu) return;

    const closeMenu = () => {
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        hamburger.classList.add('is-active');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('is-open');
        isOpen ? closeMenu() : openMenu();
    });

    // Fecha automaticamente ao clicar em um item do menu
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}

/* ---------- SCROLL SUAVE PARA ÂNCORAS ---------- */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const header = document.getElementById('header');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            const headerOffset = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset + 1;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/* ---------- SCROLL REVEAL (elementos aparecem ao entrar na tela) ---------- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-up');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
}

/* ---------- CONTADORES ANIMADOS (SEÇÃO DE CONFIANÇA) ---------- */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const animateCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-count'));
        const isDecimal = el.getAttribute('data-decimal') === 'true';
        const duration = 1600;
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;

            el.textContent = isDecimal ? value.toFixed(1) : Math.round(value);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = isDecimal ? target.toFixed(1) : target;
            }
        };

        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.6 }
    );

    counters.forEach((counter) => observer.observe(counter));
}

/* ---------- GALERIA + LIGHTBOX ---------- */
function initGallery() {
    const galleryItems = Array.from(document.querySelectorAll('.gallery__item'));
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (!galleryItems.length || !lightbox) return;

    const images = galleryItems.map((item) => {
        const img = item.querySelector('img');
        return { src: img.src, alt: img.alt };
    });

    let currentIndex = 0;

    const updateLightboxImage = () => {
        const { src, alt } = images[currentIndex];
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    };

    const openLightbox = (index) => {
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxImage();
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('is-open')) return;

        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowRight') showNext();
        if (event.key === 'ArrowLeft') showPrev();
    });
}
