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
 

});
function isSafari() {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iP(ad|od|hone)/i);
    var hasSafariInUa = !!ua.match(/Safari/i);
    var noOtherBrowsersInUa = !ua.match(/Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i)
    var result = false;
    if(iOS) { //detecting Safari in IOS mobile browsers
        var webkit = !!ua.match(/WebKit/i);
        result = webkit && hasSafariInUa && noOtherBrowsersInUa
    } else if(window.safari !== undefined){ //detecting Safari in Desktop Browsers
        result = true;
    } else { // detecting Safari in other platforms
        result = hasSafariInUa && noOtherBrowsersInUa
    }
    return result;
}

