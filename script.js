
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Loading screen
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.loader-wrapper').classList.add('fade-out');
            }, 500);
        });
        
        // Scroll progress bar
        window.addEventListener('scroll', function() {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollPercentage = (scrollPosition / scrollHeight) * 100;
            document.querySelector('.progress-bar').style.width = scrollPercentage + '%';
        });
        
        // Scroll to top button
        const scrollTopButton = document.querySelector('.scroll-top');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopButton.classList.add('active');
            } else {
                scrollTopButton.classList.remove('active');
            }
        });
        
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Typing effect
        const typingText = document.querySelector('.typing-effect');
        const text = typingText.textContent;
        typingText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
        
        // Counter animation
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        const countUp = () => {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(countUp, 10);
                } else {
                    counter.innerText = target + '+';
                }
            });
        };
        
        // Trigger counter animation when about section is in view
        const aboutSection = document.querySelector('.about');
        const observerOptions = {
            threshold: 0.5
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countUp();
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(aboutSection);
        
        // Mobile menu functionality
        const hamburger = document.querySelector('.hamburger');
        const flyoutMenu = document.querySelector('.flyout-menu');
        const closeMenu = document.querySelector('.close-menu');
        const overlay = document.querySelector('.overlay');
        
        hamburger.addEventListener('click', function() {
            flyoutMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', function() {
            flyoutMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        overlay.addEventListener('click', function() {
            flyoutMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close menu when clicking on a link
        const flyoutLinks = document.querySelectorAll('.flyout-nav a');
        flyoutLinks.forEach(link => {
            link.addEventListener('click', function() {
                flyoutMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
        
        // Active navigation link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
