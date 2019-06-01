$(document).ready(function(){
        $('.games').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                {
                breakpoint: 1024,
                settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
          });
        $('.peoples').slick({
                dots: false,
                infinite: false,
                vertical: true,
                verticalSwiping: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $('.top-arrow'),
                nextArrow: $('.bottom-arrow'),
                responsive: [
                {
                breakpoint: 1024,
                settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
          });
    $('.current-team').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [
          {
          breakpoint: 1024,
          settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
          }
          },
          {
          breakpoint: 600,
          settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
    });

    
    $('.badges').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 2,
          responsive: [
          {
          breakpoint: 1024,
          settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
          }
          },
          {
          breakpoint: 600,
          settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
          }
          },
          {
          breakpoint: 480,
          settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
    });


    
    $('.achivements').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
          {
          breakpoint: 1024,
          settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
          }
          },
          {
          breakpoint: 600,
          settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
          }
          },
          {
          breakpoint: 480,
          settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
    });
    $('.sponsors').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 5,
          responsive: [
          {
          breakpoint: 1024,
          settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
          }
          },
          {
          breakpoint: 600,
          settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
          }
          },
          {
          breakpoint: 480,
          settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
    });
    $('.tournaments').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
  });
  $('.sponsors').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
  });
  });


  