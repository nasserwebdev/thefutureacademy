// Counters
const stats = [
  { id: "stat1", endValue: 20 },
  { id: "stat2", endValue: 300 },
  { id: "stat3", endValue: 900 },
  { id: "stat4", endValue: 5000 },
];

let animationStarted = false;

const updateCounters = () => {
  if (!animationStarted) {
    animationStarted = true;

    const duration = 2000; // Duration in milliseconds
    const steps = 60; // Number of updates (smooth animation)
    const intervalTime = duration / steps; // Time between updates

    stats.forEach((stat) => {
      let count = 0;
      const target = stat.endValue;
      const counterElement = document.getElementById(stat.id);
      const increment = target / steps; // Adjusted increment per step

      const incrementCounter = () => {
        count += increment;
        if (count >= target) {
          count = target; // Ensure it stops exactly at the target
          clearInterval(counter);
        }
        counterElement.textContent = Math.round(count).toLocaleString();
      };

      const counter = setInterval(incrementCounter, intervalTime);
    });
  }
};

window.addEventListener("scroll", function onScroll() {
  const statisticsSection = document.getElementById("statistics");
  const rect = statisticsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    updateCounters();
    window.removeEventListener("scroll", onScroll); // Remove event after triggering
  }
});


// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  clickable: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },

  // Stop On Hover
  on: {
    init: function () {
      const swiperInstance = this;
      swiperInstance.el.addEventListener('mouseenter', function () {
        swiperInstance.autoplay.stop(); // Stop autoplay on hover
      });
      swiperInstance.el.addEventListener('mouseleave', function () {
        swiperInstance.autoplay.start(); // Restart autoplay when not hovered
      });
    },
  },
});