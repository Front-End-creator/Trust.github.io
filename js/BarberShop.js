$(document).ready(function(){
$("#logoMob").mouseenter(function(){
    $("#menuToggle").css({"filter": "invert(1)", "transition": "1s"});
});
$("#logoMob").mouseleave(function(){
    $("#menuToggle").css({"filter": "invert(0)", "transition": "1s"});
});
});


$(window).scroll(function(){
    if ( $(window).scrollTop() > 500) {
        $('#abs').addClass("active");
    } else {
        $('#abs').removeClass("active");
}
});


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
var currentBtn = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn:first-child').addClass("active");

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();
        slide(navBtnId);
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
    slide(slideNow - 1);
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
    }
    slide(slideNow - 1);
}


function slide(navBtnId) {
    $(".slide-nav-btn").removeClass("active").eq(navBtnId).addClass("active");
}

$(document).ready(function(){
    $("#abs, .header .item, #menuToggle .List").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

  $(window).on('load', function () {
    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
      $('body').addClass('loaded');
      $('body').removeClass('loaded_hiding');
    }, 500);
});

