AOS.init({ duration: 1000, offset: 50 });
AOS.refresh();


// document.addEventListener('DOMContentLoaded', function () {
//     var navbarToggle = document.querySelector('.navbar-toggler');
//     var navbarToggleIcon = document.querySelector('#navbarToggleIcon');

//     navbarToggle.addEventListener('click', function () {
//         var isCollapsed = navbarToggle.getAttribute('aria-expanded') === 'true';

//         navbarToggleIcon.src = isCollapsed ? './assets/icons/xmark-solid.svg' : './assets/icons/bars-solid.svg';

//     });
// });

// const slider = document.querySelector('.slider');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   e.target.matches('.next') && slider.append(items[0])
//   e.target.matches('.prev') && slider.prepend(items[items.length-1]);
// }

// document.addEventListener('click',activate,false);
$(document).ready(function() {
  $('#exampleModal').modal('show');

  $('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")){
       $("#hero, #about, #experience, #latest-project").css({
        position: 'relative',
        zIndex: -1
      });
    }else{
       $("#hero, #about, #experience, #latest-project").css({
        position: '',
        zIndex: '',
      });
    }
  
  });

});
