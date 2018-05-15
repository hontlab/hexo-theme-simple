/* https://codepen.io/kjbrum/pen/JKwByJ */

$(function(){
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // update text
            $('.accordion-item .title').text('목차보기');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // update text
            $('.accordion-item .title').text('목차접기');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });
});
