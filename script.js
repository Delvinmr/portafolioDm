


        // Navbar scroll effect
        // window.addEventListener('scroll', function() {
        //     const navbar = document.getElementById('navbar');
        //     if (window.scrollY > 50) {
        //         navbar.classList.add('scrolled');
        //     } else {
        //         navbar.classList.remove('scrolled');
        //     }
        // });

        const btnSubir = document.getElementById("btnSubir");

        window.onscroll = function(){
            scrollFunction();
        }

        function scrollFunction() {
            if(document.body.scrollTop > 205 || document.documentElement.scrollTop > 205 ){
                btnSubir.style.display = "block";
            } else{
                btnSubir.style.display = "none";
            }
            
        }

        btnSubir.onclick = function(){
            document.body.scrollTo = 0;
            document.documentElement.scrollTop = 0;
        }

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Smooth scrolling for navigation links
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

        // Animate skill bars when visible
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 500);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    