// Update year in footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Activate menu link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#mainNav .nav-link");

  function onScroll() {
    const scrollPos = window.scrollY + 100;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY - 120;
      const bottom = top + section.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        const id = section.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + id);
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});



// Stats counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stats-number");
  const duration = 2000; // total animation time in ms

  counters.forEach(counter => {
    const target = parseInt(counter.innerText.trim(), 10);
    let count = 0;
    const step = target / (duration / 16.7); // approx. 60fps

    const update = () => {
      count += step;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    };

    counter.innerText = "0";
    update();
  });
});



// Gallery
document.querySelectorAll('.gallery-img').forEach((img, i, all) => {
  img.addEventListener('click', function () {
    let m = document.getElementById('imgModal'),
        mi = document.getElementById('modalImg');
    mi.src = this.src;
    new bootstrap.Modal(m).show();

    // autoplay every 2 seconds
    clearInterval(window.slide);
    window.slide = setInterval(() => {
      i = (i + 1) % all.length;
      mi.src = all[i].src;
    }, 2000);

    m.addEventListener('hidden.bs.modal', () => clearInterval(window.slide), { once: true });
  });
});


// Testimonial auto scrool
  var testimonialCarousel = document.querySelector('#testimonialCarousel');
  var carousel = new bootstrap.Carousel(testimonialCarousel, {
    interval: 3000, // 3 seconds
    ride: 'carousel'
  });

