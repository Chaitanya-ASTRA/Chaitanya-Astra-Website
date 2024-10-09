/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

let scrollAmount = 0;
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 20; // Card width including margin
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
    // Loop back to the first card
    scrollAmount = 0;
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
    // Loop back to the last set of cards
    scrollAmount = totalScrollWidth;
  }

  carousel.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}
