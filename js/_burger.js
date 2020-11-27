$(document).ready(function () { 
 $('.nav-opener').on('click', function(e) {
    e.preventDefault() 
  $('.body').toggleClass('nav-opener');
 })
});