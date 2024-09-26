gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Animación de la introducción
    gsap.from('.intro h1', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out'
    });

    gsap.from('.intro p', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.5
    });

    // Animación de las técnicas
    gsap.utils.toArray('.technique').forEach((technique, i) => {
        gsap.from(technique, {
            scrollTrigger: {
                trigger: technique,
                start: 'top bottom-=100',
                once: true
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            delay: i * 0.1 // Reducido de 0.2 a 0.1 para una aparición más rápida
        });

        // Animación del icono
        gsap.to(technique.querySelector('.icon-wrapper'), {
            scrollTrigger: {
                trigger: technique,
                start: 'top center',
                once: true
            },
            rotateY: 360,
            duration: 1.5,
            ease: 'power2.inOut'
        });
    });

    // Efecto hover en los botones
    const buttons = document.querySelectorAll('.video-btn');
    buttons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            gsap.to(btn, {
                duration: 0.3,
                background: `radial-gradient(circle at ${x}px ${y}px, var(--button-hover), var(--button-color))`
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                duration: 0.3,
                background: 'var(--button-color)'
            });
        });
    });
});