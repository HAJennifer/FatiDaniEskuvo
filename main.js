$(document).ready(function() {

  var nav = $("#nav-bar");

  $(window).scroll(function() {
    var originalHeight = nav.outerHeight(true);
    var scrollTopVal = $(this).scrollTop();
    
    if (scrollTopVal > originalHeight + 130) {
      nav.css("position", "fixed");
      nav.css("top", "0");
   
    }
  })
  // once nav gets to top of page
  // change position to fixed css
  // once it gets back to where it originally was
  // change position to relative

});

//$(document).ready(function(){
    //$('#nav-menu').click(function(){
       // $('ul.nav-list').addClass('open').slideToggle('50');
   // });
//});
