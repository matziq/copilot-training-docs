document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const scrollTopBtn = document.querySelector(".scroll-top");
  const statCards = document.querySelectorAll("[data-count]");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const revealElements = document.querySelectorAll(".reveal");
  const yearTarget = document.querySelector("[data-year]");

  const toggleNav = () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  };

  navToggle?.addEventListener("click", toggleNav);

  siteNav?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      if (window.innerWidth < 900 && siteNav.classList.contains("open")) {
        toggleNav();
      }
    })
  );

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.getAttribute("data-scroll"));
      target?.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn?.classList.toggle("show", window.scrollY > 600);
  });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const text = el.textContent.trim();
    let suffix = "";
    if (text.endsWith("+")) suffix = "+";
    if (text.endsWith("min")) suffix = " min";
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = `${value.toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const statObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  statCards.forEach((card) => statObserver.observe(card));

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  if (testimonialCards.length) {
    let current = 0;
    setInterval(() => {
      testimonialCards[current].classList.remove("active");
      current = (current + 1) % testimonialCards.length;
      testimonialCards[current].classList.add("active");
    }, 6000);
  }

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
});
