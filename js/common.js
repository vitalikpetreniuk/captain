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
        allowPageScroll: false
    });

    $('.cg-col-scroll').slimScroll({
        railVisible: true,
        color: '#0a1f3c',
        railColor: '#b4bbc5',
        railOpacity: 1,
        size: '4px',
        allowPageScroll: false
    });

    $('.cg-search-open').on('click', function(){
        $(this).hide();
        $('.cg-center-top h2').hide();
        $('.cg-center-top-links').hide();
        $('.cg-center-top form').show();
        $('.cg-search-close').show();
        $('.cg-center-top > div').addClass('active');
    });

    $('.cg-search-close').on('click', function(){
        $('.cg-search-open').show();
        $('.cg-center-top h2').show();
        $('.cg-center-top-links').show();
        $('.cg-center-top form').hide();
        $(this).hide();
        $('.cg-center-top > div').removeClass('active');
    });

    $('.cg-tabs-body > div').each(function () {
        // var tabId = $(this).attr('id');
        // console.log(tabId);
        $('.cg-tabs-header a').on('click', function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var tabId = $(this).attr('href');
            $('.cg-tabs-body > div').removeClass('active');
            $('.cg-tabs-body').find(tabId).addClass('active');
        });
    });

    $('.cg-tb-edit').on('click', function(){
        $(this).hide();
        $(this).parent().find('.cg-tb-value').hide();
        $(this).parent().find('.cg-tb-evalue').show();
    });

    $('.cg-ps-lt .cg-switch input').on('click', function(){
        if($(this).is(':checked'))
        {
            $(this).closest('.cg-ps-lt').find('.cg-ps-lt-text').hide();
            $(this).closest('.cg-ps-lt').find('.cg-form-style').show();
        }else{
            $(this).closest('.cg-ps-lt').find('.cg-ps-lt-text').show();
            $(this).closest('.cg-ps-lt').find('.cg-form-style').hide();
        }
    });

    $('.cg-left-menu-button').on('click', function(){
        $(this).hide();
        $('.cg-menu-button').hide();
        $('.cg-left-menu-close').show();
        $('.cg-col-left-in').addClass('open');
    });

    $('.cg-left-menu-close').on('click', function(){
        $('.cg-left-menu-button').show();
        $('.cg-menu-button').show();
        $(this).hide();
        $('.cg-col-left-in').removeClass('open');
    });

    $('.cg-ps-sb-dd > div:first-child button').on('click', function(){
        $(this).parent().hide();
        $(this).closest('.cg-ps-sb-dd').find('.cg-form-drop').show();
    });

    $('.cg-drop-s > button').on('click', function(){
        $(this).closest('.cg-drop-s').find('input:checked');
    });

    $('.cg-drop-s ul input').on('click', function(){
        var inputValue = $(this).siblings('label').html();
        var tesT = $(this).closest('.cg-drop-s').children('button').html(inputValue);
    });

    $('.cg-menu-button').on('click', function(){
        $('.cg-main-menu-block').addClass('open');
    });

    $('.cg-close-menu').on('click', function(){
        $('.cg-main-menu-block').removeClass('open');
    });

    $('.cg-cs-item').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });

    $('.cg-drop-block > button').on('click', function(){
        $(this).toggleClass('open');
        $(this).next('div').toggle('fast');
    });

    $('.cg-accordeon-block > button').on('click', function(){
        $(this).parent('.cg-accordeon-block').siblings().children('button').removeClass('open');
        $(this).parent('.cg-accordeon-block').siblings().children('div').slideUp('fast');
        $(this).toggleClass('open');
        $(this).next('div').toggle('fast');
    });

    $('.cg-btn-scroll-bottom').on('click' ,function(){
        scrolled=scrolled+100;

        $('.cg-projects-list').animate({
            scrollTop:  scrolled
        });

    });

    $('.cg-mct-block > button').on('click', function(){
        $(this).hide();
        $('.cg-mct-block > div:last-child').addClass('active');
    });

    $('.cg-tooltip-button').on('click', function(){
        $(this).siblings('.cg-tooltip').toggleClass('active');
    });

    $('.cg-tooltip > button').on('click', function(){
        $(this).closest('.cg-tooltip').removeClass('active');
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