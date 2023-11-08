$(document).ready(function () {
    // 헤더영역에 마우스오버,포커스인 시 서브메뉴가 나옵니다.
    // 숨겨진 서브 메뉴 숨김
    $('.sub_wrap_1, .sub_wrap_2, .sub_wrap_3, .sub_wrap_4, .sub_wrap_5, .sub_wrap_6, .sub_wrap_7').hide();
    //↗각 서브메뉴들 숨겨놓기

    // 이벤트 핸들러 함수 정의
    function handleSubMenu(index) {
        return function () {
            const $this = $(this);
            const $subWrap = $(`.sub_wrap_${index}`);
            $this.css('background', '#333');
            $this.children().css({
                'color': '#669900',
                'font-weight': 'bold'
            });
            $subWrap.stop().slideDown();
        }
    }

    function handleSubMenuOut(index) {
        return function () {
            const $this = $(this);
            const $subWrap = $(`.sub_wrap_${index}`);
            $this.css('background', '');
            $this.children().css({
                'color': '',
                'font-weight': ''
            });
            $subWrap.stop().slideUp();
        }
    }

    // 이벤트 핸들러 할당
    for (let i = 0; i < 7; i++) {
        $('.bottom_nav_li').eq(i).on('focusin mouseover', handleSubMenu(i + 1));
        $('.bottom_nav_li').eq(i).on('focusout mouseout', handleSubMenuOut(i + 1));
    }
    // 헤더영역에 마우스오버,포커스인 시 서브메뉴가 나옵니다.
});

// 첫화면에서 이미지들이 하나씩 서서히 보입니다

$(document).ready(function () {
    $('.main_slogan').hide()
    $('.coffee_1').hide()
    $('.coffee_2').hide()
    $('.coffee_3').hide()
    $('.slogan_btn').hide()
    $('.main_slogan').delay(350).fadeIn(1000);
    $('.coffee_1').delay(800).fadeIn(1000);
    $('.coffee_2').delay(1400).fadeIn(1000);
    $('.coffee_3').delay(2000).fadeIn(1000);
    $('.slogan_btn').delay(2500).fadeIn(1000);
})

// 첫화면에서 이미지들이 하나씩 서서히 보입니다

$(document).ready(() => {
    $()
})
