//  Dropdown menu functionality
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
          if (dropdowns[i].classList.contains('show')) {
              dropdowns[i].classList.remove('show');
          }
      }
  }
};

// Multiple Slideshows Support
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".slideshow-container").forEach((container) => {
      let slides = container.querySelectorAll(".mySlides");
      let slideIndex = 1;

      function showSlides(n) {
          if (n > slides.length) slideIndex = 1;
          if (n < 1) slideIndex = slides.length;

          slides.forEach(slide => (slide.style.display = "none"));
          slides[slideIndex - 1].style.display = "flex";
      }

      function plusSlides(n) {
          showSlides(slideIndex += n);
      }

      container.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
      container.querySelector(".next").addEventListener("click", () => plusSlides(1));

      showSlides(slideIndex);
  });
});

//  Carousel Scroll Functionality
let scrollAmount = 0;
const carousel = document.querySelector('.carousel');
if (carousel) {
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 20 : 0; // Card width including margin
  let visibleCards = window.innerWidth <= 768 ? 1 : 3; // 1 card on mobile, 3 on desktop
  const totalCards = cards.length;
  let totalScrollWidth = cardWidth * (totalCards - visibleCards); // Total scrollable width

  // Adjust visible cards and scroll width on window resize
  window.addEventListener('resize', () => {
      visibleCards = window.innerWidth <= 768 ? 1 : 3;
      totalScrollWidth = cardWidth * (totalCards - visibleCards);
  });

  function moveRight() {
      scrollAmount += cardWidth;
      if (scrollAmount > totalScrollWidth) {
          scrollAmount = 0; // Loop back to the first card
      }
      carousel.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: 'smooth'
      });
  }

  function moveLeft() {
      scrollAmount -= cardWidth;
      if (scrollAmount < 0) {
          scrollAmount = totalScrollWidth; // Loop back to the last set of cards
      }
      carousel.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: 'smooth'
      });
  }
}
