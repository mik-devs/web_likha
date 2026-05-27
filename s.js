
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 60;

        if(revealTop < windowHeight - revealPoint){
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("DOMContentLoaded", revealOnScroll);
 