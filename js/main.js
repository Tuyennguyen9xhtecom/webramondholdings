$(document).ready(function() {    

     // Hiển thị nút khi cuộn xuống 100px từ đầu trang
     $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Khi nhấp vào nút, cuộn lên đầu trang
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $('.list-logo-partner').slick({
        dots: false,
        infinite: true,
        lazyLoad: 'ondemand',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // centerMode: true,
        variableWidth: true,
    });

    $('.activy-home .list-activy').slick({
        dots: false,
        infinite: true,
        lazyLoad: 'ondemand',
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
           }
        }]
    });

    $('.project-home .list-project').slick({
        dots: false,
        infinite: true,
        lazyLoad: 'ondemand',
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
           }
        }]
    });

    $('.btn-filter .filter-select').click(function () {
        if($('.btn-filter .dropdown-menu ').css('display') === 'none'){
            $('.btn-filter .dropdown-menu ').css('display','block');
        } else{
            $('.btn-filter .dropdown-menu ').css('display','none');
        }
    })

    $('.btn-search button').on('click', function() {
        $(this).parent().toggleClass('open');
        $(this).prev().focus();
        if ($(this).parent().hasClass('open')) {
            $(this).css('background-color', 'transparent');
        } 
        else {
            $(this).css('background-color', '#edeceb');
        }
    });

    $('.view-more-about-home').on('click', function() {
        $('#about-home-modal .modal-body').html($('.content-about-home').html());
    });

    $('.input-file .btn-file-1').click(function () {
        $('.input-file input').click();
    });
    $('.input-file .btn-file-2').click(function () {
        $('.input-file input').click();
    });
    
    //thư viện ảnh
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
       useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
   
    $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
               }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
           }
            }]
        });
   
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
   //end thư viện ảnh

   //thư viện video
   $('.slider-single-video').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
    useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.slider-nav-video')
        .on('init', function(event, slick) {
            $('.slider-nav-video .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
            }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
        }
            }]
        });

    $('.slider-single-video').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav-video').slick('slickGoTo', currentSlide);
        var currrentNavSlideElemVideo = '.slider-nav-video .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav-video .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElemVideo).addClass('is-active');
    });

    $('.slider-nav-video').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlideVideo = $(this).data('slick-index');

        $('.slider-single-video').slick('slickGoTo', goToSingleSlideVideo);
    });

    var styleElement = document.getElementById('video-style');
    //nếu là trang video
    if ($('body').find('.show-list-video').length) {
        //click vào overplay thì paly video
        $('.overlay').click(function(){
            playVideo();
        });
        $('.text-in-video').click(function(){
            playVideo();
        });

    }
    //end thư viện video

    /*css theo ngôn ngữ browser*/
    var userLang = navigator.language || navigator.userLanguage; 
    
    if(userLang != 'vi-VN' && userLang != 'vi'){
        $('.form-request-recruitment .input-file input').addClass('padding-left-150');
    }

    //event modal
    $('.show-list-events .event-item').click(function(){
        let imgEvent = $(this).find('img').attr('src');
        $('#modal-event .img-event img').attr('src',imgEvent);

        let dateCreated = $(this).find('.date-created').html();
        $('#modal-event .date-created').html(dateCreated);

        let titleEvent = $(this).find('h3').html();
        $('#modal-event .title-events').html(titleEvent);
        $('#modal-event .img-event img').attr('alt',titleEvent);
        $('#modal-event .img-event img').attr('title', titleEvent);

        let descEvent = $(this).find('.desc-events').html();
        $('#modal-event .desc-events').html(descEvent);

        let listButton = $(this).find('.list-button').html();
        $('#modal-event .list-button').html(listButton);

        $('#modal-event').modal('show');
    });

    //zoom ảnh
    // $('.zoomable').on('click', function() {
    //     alert('gggggg');
    //     var imgSrc = $(this).attr('src');
    //     $('#zoomed-image').attr('src', imgSrc);
    //     $('#zoomed-image-container').css('display', 'flex');
    // });

    $('#close-zoomed-image').on('click', function() {
        $('#zoomed-image-container').hide();
    });

    // Close the zoomed image when clicking outside of the image
    $('#zoomed-image-container').on('click', function(event) {
        if (event.target.id === 'zoomed-image-container' || event.target.id === 'zoomed-image') {
            $('#zoomed-image-container').hide();
        }
    });

    // Function to check if device is mobile
    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }
    if (isMobileDevice()) {
        $('.zoomable').on('click', function() {
            var imgSrc = $(this).attr('src');
            $('#zoomed-image').attr('src', imgSrc);
            $('#zoomed-image-container').css('display', 'flex');
        });
    }
    
    //end zoom ảnh
    
});


$('.slider-single-video .play-video').click(function() {
    playVideo();
})
$('.slider-single-video video').on('play', function() {
    playVideo();
});

setInterval(function() {
    pauseVideo();
}, 100);

function playVideo(){
    $('.slider-single-video .item-video.slick-active video').get(0).play();
    $('.slider-single-video .item-video.slick-active .overlay').hide();
    $('.slider-single-video .item-video.slick-active .text-in-video').hide();
    $('.slider-single-video .item-video.slick-active .play-video').hide();
}

function pauseVideo(){
    $('.slider-single-video .item-video').each(function() {
        if (!$(this).hasClass('slick-active')) {
            $(this).find('video').get(0).pause();
            $(this).find('.overlay').show();
            $(this).find('.text-in-video').show();
            $(this).find('.play-video').show();
        }
    });
}

//tự động play video trang chủ khi scroll tới video
// $(document).ready(function() {
//     var $video = $('#myvideo');
//     $(window).on('scroll', function() {
        
//         if ($video.length) {
//             var videoTop = $video.offset().top;
//             var videoHeight = $video.height();
//             var windowTop = $(window).scrollTop();
//             var windowHeight = $(window).height();

//             if ((windowTop + windowHeight) >= videoTop && windowTop <= (videoTop + videoHeight)) {
//                 if ($video.get(0).paused) {
//                     $video.get(0).play();
//                     exitFullScreen();
//                 }
//             } else {
//                 if (!$video.get(0).paused) {
//                     $video.get(0).pause();
//                 }
//             }
//         }
//     });

//     // Trigger the scroll event once on load to check the initial position of the video
//     $(window).trigger('scroll');

//     // // Khi video bắt đầu phát, thoát chế độ toàn màn hình
//     // $video.addEventListener("play", function() {
//     //     exitFullScreen();
//     // });
//     // Hàm để thoát chế độ toàn màn hình
//     function exitFullScreen() {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) { // Firefox
//             document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
//             document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) { // IE/Edge
//             document.msExitFullscreen();
//         }
//     }
// });
