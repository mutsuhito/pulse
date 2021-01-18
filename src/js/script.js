let answer = confirm('хуй татёшь?')
if (answer) {
    alert('тати')
} else {
    alert('татёшь))')
};

$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: false,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev"><img src=img/left.png></button>',
            nextArrow: '<button type="button" class="slick-next"><img src=img/right.png></button>',
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
            ]
          }
    );
  });