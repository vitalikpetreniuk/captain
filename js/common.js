$(function() {


    $('.popup-modal').magnificPopup({
        type: 'inline',
        modal: true,
        closeOnBgClick: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.cg-scroll').slimScroll({
        railVisible: true,
        alwaysVisible: true,
        color: '#0a1f3c',
        railColor: '#b4bbc5',
        railOpacity: 1,
        size: '4px',
        allowPageScroll: true
    });

    $('.cg-btn-scroll-bottom').on('click' ,function(){
        scrolled=scrolled+100;

        $('.cg-projects-list').animate({
            scrollTop:  scrolled
        });

    });

    $('.cg-modal-channel > div > button').on('click', function () {
        $(this).toggleClass('open');
        $(this).closest('.cg-modal-channel').find('.cg-modal-channel-drop').toggle('fast');
    });

    $('.cg-btn-panel-hide').on('click', function () {
        $(this).toggleClass('active');
        $('.cg-cl-left').toggleClass('inactive');
        $('.cg-cl-right').toggleClass('fwidth');
    });

    $('.cg-sb-button').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.cg-segment-block').toggleClass('open');
        $(this).closest('.cg-segment-block').find('.cg-sb-cont-in').toggle('fast');
    });

    $('.cg-segments-buttons button').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.cg-segments-buttons button:first-child').on('click', function () {
        $('.cg-segments input').each(function () {
            if(!$(this).is(':checked'))
            {
                $(this).trigger('click');
            }
        });
    });

    $('.cg-segments-buttons button:last-child').on('click', function () {
        $('.cg-segments input').each(function () {
            if($(this).is(':checked'))
            {
                $(this).trigger('click');
            }
        });
    });

});