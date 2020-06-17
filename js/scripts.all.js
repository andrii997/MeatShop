(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

  $('.burger').on('click', function(){
    $('.mobile-menu').addClass('active');
});
  $('.mobile-menu .close').on('click', function(){
    $('.mobile-menu').removeClass('active');
});



    $('.search-check-btn').on('click', function(){
        $('.search-check-box').toggleClass('active');
    });
    $('.cart-btn').on('click', function(){
      $('.bucket-popup').toggleClass('active');
  });
  $('.bucket-popup .wrapper .close').on('click', function(){
      $('.bucket-popup').toggleClass('active');
  });

  $('.catalog-btn').on('click', function(){
    $('.catalog-popup').toggleClass('active');
});

$('.changeorder').on('click', function(){
  $('.status-check-box').toggleClass('active');
});



$('.btn-enter').on('click', function(){
  $('.enter-popup').addClass('active');
});
$('.enter-popup .wrapper .close').on('click', function(){
  $(this).parent().parent().removeClass('active');
});



  $('.catalog-popup .catside .cat-list span').on('click ', function(){
    if($(window).width()<769){
      $('.catalog-popup .catside .cat-list .back').toggleClass('active');
    }
    if($(this).hasClass('active')){
      $('.catalog-popup .catside .catside-sub').toggleClass('active');
      $(this).removeClass('active');
    } else {
      $('.catalog-popup .catside .cat-list span').removeClass('active');
      $('.catalog-popup .catside .catside-sub').addClass('active');
      $(this).addClass('active');
    }
    
    
});
$('.catalog-popup .catside .cat-list .back').on('click ', function(){
  $('.catalog-popup .catside .cat-list span').removeClass('active');
  $('.catalog-popup .catside .catside-sub').removeClass('active');
  $(this).removeClass('active');
});
$('.catalog-popup .catside .closer-box .close').on('click ', function(){
  $('.catalog-popup').removeClass('active');
});




    $('.products-catalog-filter span.more').on('click', function(){
      $(this).parent().find('.filters').addClass('active');
      $(this).hide();
      $('.products-catalog-filter span.hide').show();
  });
  $('.products-catalog-filter span.hide').on('click', function(){
    $(this).parent().find('.filters').removeClass('active');
    $(this).hide();
    $('.products-catalog-filter span.more').show();
});

    $('.lk-orders-box:not(.catalog-box) .lk-orders-item-header .opener').on('click', function(){
      $(this).parent().parent().toggleClass('active');
        
      $(this).parent().parent().find('.lk-orders-item-body').slideToggle();
    });

    $('.status-check-box > img').on('click', function(){
      $(this).parent().removeClass('active');

  });

  var changes;
  $('.status-check-box input').on('change' , function(){
    changes = $(this).val();
    console.log(changes); 
    $('.status-check-box-confirm > p span').text(changes);
    $('.status-check-box').removeClass('active');
    $('.status-check-box-confirm').addClass('active');
  });

  $('.status-check-box-confirm span').on('click', function(){
    if($(this).attr('class') == 'yes'){
      $(this).parent().parent().parent().find('span.stat').text(changes);
      $('.status-check-box-confirm').removeClass('active');
      $('.status-check-box').removeClass('active');

    } else {
      $('.status-check-box-confirm').removeClass('active');
      $('.status-check-box').removeClass('active');
    }
});

$('.status-check-box-confirm > img').on('click', function(){
  $('.status-check-box-confirm').removeClass('active');
});

    $('.enter-popup .wrapper .pop-nav span').on('click ', function(){
      $('.enter-popup .wrapper .pop-nav span').removeClass('active');
      $(this).addClass('active');
      $('.enter-popup .wrapper .pop-form .form').hide();
      $('.enter-popup .wrapper .pop-form .form[data-id=' + ($(this).index() + 1 ) + ']').fadeIn();
    });
    $('.enter-popup .wrapper .pop-form .form .orbox span').on('click ', function(){
      $('.enter-popup .wrapper .pop-nav span').removeClass('active');
      $('.enter-popup .wrapper .pop-nav span[data-id=' + ($(this).attr('data-id')) + ']').addClass('active');
      $('.enter-popup .wrapper .pop-form .form').hide();
      $('.enter-popup .wrapper .pop-form .form[data-id=' + ($(this).attr('data-id')) + ']').fadeIn();
    });

    $('.prod-card-desc .moretext').on('click', function(){
      $(this).parent().toggleClass('active');
      
      
    });


    $('span.sell').on('click', function(){
      $(this).hide();
      $(this).parent().find('span.stop').fadeIn();
    });

    $('span.stop').on('click', function(){
      $(this).hide();
      $(this).parent().find('span.sell').fadeIn();
    });


    $('[product-choose-modal-opener]').on('click', function(){
      $('.product-choose-modal').addClass('active');
    });
    $('.product-choose-modal .item').on('click', function(){
      $('.product-choose-modal').removeClass('active');
      $('.product-rating-modal').addClass('active');
    });
    $('.product-choose-modal > img').on('click', function(){
      $('.product-choose-modal').removeClass('active');
    });
    $('.product-rating-modal > img').on('click', function(){
      $('.product-rating-modal').removeClass('active');
    });
    


    $('.prod-counter span:first-child').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.prod-counter span:last-child').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });




    $('.mainbanner-bg-slider').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.mainbanner-text-slider',
        arrows: false
      });
      $('.mainbanner-text-slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        asNavFor: '.mainbanner-bg-slider',
        appendDots: '.mainbanner-slider-dots'
      });

      $('.maincategories-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.maincategories .prev',
        nextArrow: '.maincategories .next',
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true
            }
          }
        ]
      });

      $('.ourpartners-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.ourpartners .prev',
        nextArrow: '.ourpartners .next',
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              centerMode: true
            }
          }
        ]
      });

      $('.prod-card-imgs-nav').slick({
        dots: false,
        autoplay: false,
        arrows: false,  
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 6,
        focusOnSelect: true,
        asNavFor: '.prod-card-imgs-slider',
        responsive: [
          {
            breakpoint: 769,
            settings: {
              vertical: false,
              slidesToShow: 6,
              verticalSwiping: false,
              centerMode: true
            }
          }
        ]
      });

      $('.prod-card-imgs-slider').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.prod-card-imgs-nav',
      });

      $('.other-products-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.other-products-slider-box .prev',
        nextArrow: '.other-products-slider-box .next',
        dots: false,
        responsive: [
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 2,

            }
          }
        ]
      });

      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#pricefrom" ).val(ui.values[ 0 ]);
          $( "#priceto" ).val(ui.values[ 1 ]);
        }
      });
      $( "#pricefrom" ).val($( "#slider-range" ).slider( "values", 0 ));
      $( "#priceto" ).val($( "#slider-range" ).slider( "values", 1 ));
      

      



});
},{}]},{},[1]);
