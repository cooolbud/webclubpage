 $(window).scroll(function() {

    if ($(window).scrollTop() == 0) {
        scroll_transparency = false;
        $('div.navbar-custom').fadeTo( "fast", 1 );

    }else{
        if (scroll_transparency == false){
            $('div.navbar-custom').fadeTo( "fast", .1 );
            scroll_transparency = true;
        }
    }
});