
$(document).ready(() => {
    // Side nav function
    $('.sidenav').sidenav();

    // Porfolio tabs function
    $('.tabs').tabs();

    // nav function
    $(window).scroll(() => {
        if($(this).scrollTop() > 100) {
            $('nav').removeClass('transparent');
            $('nav').addClass('coloredNav');
        } else {
            $('nav').addClass('transparent');
            $('nav').removeClass('coloredNav');
        }
    });
});

