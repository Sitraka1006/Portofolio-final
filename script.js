
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.navbar');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.skill-card, .project-card');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('visible');
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
            const animateProgressBars = function() {
                const progressBars = document.querySelectorAll('.progress-bar');
                
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            };
            const skillsSection = document.getElementById('skills');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgressBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(skillsSection);
            const backToTopButton = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('active');
                } else {
                    backToTopButton.classList.remove('active');
                }
            });
            
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            const particlesContainer = document.getElementById('particles-js');
            
            if (particlesContainer) {
                createParticles();
            }
            
            function createParticles() {
                const particleCount = 30;
                
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    
                    // Position aléatoire
                    const posX = Math.random() * 100;
                    const posY = Math.random() * 100;
                    const size = Math.random() * 4 + 2;
                    const duration = Math.random() * 20 + 10;
                    const delay = Math.random() * 5;
                    
                    particle.style.left = `${posX}%`;
                    particle.style.top = `${posY}%`;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.opacity = Math.random() * 0.5 + 0.1;
                    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                    
                    particlesContainer.appendChild(particle);
                }
                
                const style = document.createElement('style');
                style.innerHTML = `
                    @keyframes float {
                        0% {
                            transform: translateY(0) translateX(0);
                            opacity: ${Math.random() * 0.5 + 0.1};
                        }
                        50% {
                            transform: translateY(-50px) translateX(20px);
                            opacity: ${Math.random() * 0.7 + 0.3};
                        }
                        100% {
                            transform: translateY(0) translateX(0);
                            opacity: ${Math.random() * 0.5 + 0.1};
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            const profileImg = document.getElementById('profile-img');
            if (profileImg) {
                profileImg.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05) rotate(5deg)';
                    this.style.transition = 'all 0.3s ease';
                });
                
                profileImg.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1) rotate(0)';
                });
            }
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple-effect');
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 1000);
                });
            });
            const skillIcons = document.querySelectorAll('.skill-icon');
            skillIcons.forEach(icon => {
                icon.addEventListener('mouseenter', function() {
                    this.querySelector('i').style.transform = 'scale(1.1)';
                });
                
                icon.addEventListener('mouseleave', function() {
                    this.querySelector('i').style.transform = 'scale(1)';
                });
            });
            const downloadCvBtn = document.getElementById('downloadCvBtn');
            const downloadCvLink = document.getElementById('downloadCvLink');
            
            function simulateDownload() {
                const downloadAnim = document.createElement('div');
                downloadAnim.innerHTML = `
                    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; justify-content: center; align-items: center;">
                        <div style="background: white; padding: 30px; border-radius: 10px; text-align: center;">
                            <div class="spinner-border text-primary mb-3" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <h4>Téléchargement en cours...</h4>
                            <p>Votre CV sera téléchargé dans quelques secondes</p>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(downloadAnim);
                setTimeout(() => {
                    downloadAnim.remove();
                    const link = document.createElement('a');
                    link.href = '#';
                    link.download = 'CV_Sitraka_Maminirina.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    const toast = document.createElement('div');
                    toast.innerHTML = `
                        <div style="position: fixed; bottom: 20px; right: 20px; background: #28a745; color: white; padding: 15px; border-radius: 5px; z-index: 9999; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <i class="fas fa-check-circle me-2"></i> Téléchargement terminé avec succès!
                        </div>
                    `;
                    document.body.appendChild(toast);
                    
                    setTimeout(() => {
                        toast.remove();
                    }, 3000);
                }, 2000);
            }
            
            if (downloadCvBtn) {
                downloadCvBtn.addEventListener('click', simulateDownload);
            }
            
            if (downloadCvLink) {
                downloadCvLink.addEventListener('click', simulateDownload);
            }

            const wave = document.querySelector('.wave');
            if (wave) {
                let position = 0;
                setInterval(() => {
                    position -= 1;
                    wave.style.backgroundPositionX = `${position}px`;
                }, 50);
            }
            window.addEventListener('scroll', function() {
                const scrollPosition = window.pageYOffset;
                const heroSection = document.querySelector('.hero-section');
                if (heroSection) {
                    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
                }
            });
            const description = document.querySelector('.hero-section .lead');
            if (description) {
                const text = description.textContent;
                description.textContent = '';
                
                let i = 0;
                const typingEffect = setInterval(() => {
                    if (i < text.length) {
                        description.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typingEffect);
                    }
                }, 30);
            }
        });