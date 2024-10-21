$(document).ready(function() {
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });

});

let text = document.getElementById("text");
let dl = document.getElementById("dl");
let upr = document.getElementById("upr");
let cs = document.getElementById("cs");
let fiera = document.getElementById("fiera");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = ((value * 1) - 400) + "px";
  dl.style.marginRight = ((value * 2.4) + 25) + "px";
  upr.style.marginRight = ((value * 2.45) + 25) + "px";
  cs.style.marginLeft = ((value * 2.45) + 25) + "px";
  fiera.style.marginLeft = ((value * 2.4) + 25) + "px";
})

document.body.scrollTop = document.documentElement.scrollTop = 0;

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  
  // Get the position of the bottom of the header
  const headerBottom = header.getBoundingClientRect().bottom;
  
  // Get the position of the bottom of the hero section
  const heroBottom = hero.getBoundingClientRect().bottom;

  // Check if the header's bottom is below the hero's bottom
  if (headerBottom > heroBottom) {
      header.classList.add('is-sticky');
  } else {
      header.classList.remove('is-sticky');
  }
});


