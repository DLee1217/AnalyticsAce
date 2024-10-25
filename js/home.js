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

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = (value * 1) + "px";
})

document.body.scrollTop = document.documentElement.scrollTop = 0;

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  
  const headerBottom = header.getBoundingClientRect().bottom;
 
  const heroBottom = hero.getBoundingClientRect().bottom;

  if (headerBottom > heroBottom) {
      header.classList.add('is-sticky');
  } else {
      header.classList.remove('is-sticky');
  }
});

window.addEventListener('load', (event) => {
  text.style.marginTop = (-400) + "px";
});
