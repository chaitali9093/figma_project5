document.querySelector("#toggler").addEventListener("click", function () {
    document.querySelector("#nav_links ul").classList.toggle('showList');
  });
  let nav_items = document.querySelector(".nav_items");
  
  toggler.addEventListener("click", listDisplay);
  
  function listDisplay() {
    nav_items.classList.toggle("showList");
  }
//   swiper

    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });