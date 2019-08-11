$(document).ready(function () {
   $(window).scroll(function () {

      /* Check the location of each desired element */
      $('.appearRight').each(function (i) {

         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();

         /* If the object is completely visible in the window, fade it it */
         if (bottom_of_window > bottom_of_object) {

            $(this).animate({
               'opacity': '1',
               'left': '0%'
            }, 1000);
         }
      });

      $('.appearLeft').each(function (i) {

         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $(window).scrollTop() + $(window).height();

         /* If the object is completely visible in the window, fade it it */
         if (bottom_of_window > bottom_of_object) {

            $(this).animate({
               'opacity': '1',
               'left': '0%'
            }, 1000);
         }
      });

   });

   $('.arrowImg').click(function () {
      $('html').animate({
         scrollTop: 0
      }, 600);
      return false;
   });

});