$(function() {
  
  var width = $(window).width();

  //type effect
  var typed = new Typed(".element", {
    strings: ["front end devoloper","UI/UX devoloper"],
    typeSpeed:80,
    backSpeed:60,
    loop:true
  });

  //nice scroll
  $("body").niceScroll({
    cursorcolor:"#eb8b1e",
    cursorwidth:"8px",
    cursorborder:'none',
    cursorborderradius:'0'

    });

    //wow.js
    new WOW().init();

    //control of li of work section
  $('.works .content ul li').click( function () {

    $(this).addClass('active').siblings().removeClass('active');

    var data = $(this).data('role');

    if (data === '.all') {

      $('.works .content .projects > div').show(300);

      $('.works').animate({height:"1230px"},500)


    } else {

      $('.works .content .projects > div').hide(300);

      $(data).show(300);

      $('.works').animate({height:"530px"},500)
      //بتجيب العرض بتاع الشاشه لو اقل من الف بتخلي طول الدف  750

       if(width < 1000) {

        $('.works').animate({height:"750px"},500)

       }
    }

  });

  // toggle menu open/close
  $('.menu-tab').click( function () {

    $(".menu-tab span").toggleClass('open');

    var menu = $('.menu');

    $('.menu').toggleClass('appear');

    if (menu.hasClass('appear')) {

      $(this).animate({left : "150px"},500);
    
      $('.menu').animate({left : "0"}, 500);
      
      //this condition control the appear of the fixed menu

       if(width < 1000) {

        $('body').animate({paddingLeft:"0px"},500);

       } else {

        $('body').animate({paddingLeft:"150px"},500);

       }

    } else {

      $(this).animate({left : "0"},500);

      $('.menu').animate({left : "-150px"}, 500);

      $('body').animate({paddingLeft:"0px"},500)

    }

  });

//  li links
  $(".menu ul li").on('click',function () {

    $(this).addClass('active').siblings().removeClass('active');

    var goto = $(this).data('class');

    $('html,body').animate({ scrollTop:$(goto).offset().top },800)
    
  });

//go up icon show and hide

  $(window).scroll(function () {

    var scrtop = $(window).scrollTop();

    if( scrtop < 400 ) {

      $('.go-up').hide(200);

    } else {

      $('.go-up').show(200);

    }

  });

  //scroll to top

  $(".go-up i").on("click",function (e) {

    e.preventDefault();
    
    $('html,body').animate({scrollTop :0},2000)

  });

  //loading page
  $(window).on('load',function () {
    $('.loading').fadeOut(500);
  })


});