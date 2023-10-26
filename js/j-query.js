$(function () {
    const videoElement = $(".text_details_video")[0]; // jQuery 객체를 JavaScript DOM 요소로 변환
    const video = $(".text_details_video");

    $(".text_details_video").hide(1000); // 처음에 비디오를 숨겨라

    $(".hobby")
      .siblings(1)
      .click(() => {
        // .hobby의 첫번째를 클릭 시
        $(".text_details_video").toggleClass("text_details_video_active"); //비디오에 토글클래스
        if (video.hasClass("text_details_video_active")) {
          //토글할 클래스가 비디오에 적용이 된다면
          $(".text_details_video").fadeIn(1000); //처음에 숨겨놨던 비디오를 2초에 걸쳐 서서히 보여지게 하겠다
          videoElement.play(); //그리고 재생시켜라
        } else {
          // 비디오가 비활성화되면 일시 중지
          $(".text_details_video").slideUp(1000); //처음에 숨겨놨던 비디오를 2초에 걸쳐 서서히 보여지게 하겠다
          videoElement.pause();
        }
      });
    $('.swiper-slide-box').hide()
    $('.the_soap_company').click(() => {
      $('.swiper-slide-box').fadeIn(700);
    })
    $('.close_btn').click(() => {
      $('.swiper-slide-box').fadeOut(700);
    })
    $(".as_con>div>a").on("mouseenter focusin", function () {
      $(this).children("div").stop().fadeIn(250);
    });
    $(".as_con>div>a").on("mouseleave focusout", function () {
      $(this).children("div").stop().fadeOut(250);
    });
    $(".as_con>div>a").click(function () {
      $(this).next(".work_all_wrap").fadeIn(1000);
      return false;
    });
    $(".btn_close").click(function () {
      $(".work_all_wrap").fadeOut(500);
      return false;
    });

    $(".draw_pager>button").click(function () {
      $(this).siblings().removeClass("on");
      $(this).addClass("on");
      img_tab = $(this).index();
      $(this).parent().prev().children("img").stop().fadeOut(500);
      $(this).parent().prev().children("img").eq(img_tab).stop().fadeIn(500);
    });

    $(".agree_more").click(function () {
      $("#agree_info_wrap").stop().fadeIn(500);
    });
    $(".btn_close").click(function () {
      $("#agree_info_wrap").fadeOut(500);
      return false;
    });
  });