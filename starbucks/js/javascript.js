
// 스크롤 값 나타나는 함수
let section_3_img_box = document.querySelector('.section_3_img_box');
let section_3_text_box = document.querySelector('.section_3_text_box');
let section_4_cup = document.querySelector('.section_4_cup');
let section_5_inner_txt_1 = document.querySelector('.section_5_inner_txt_1');
let section_5_inner_txt_2 = document.querySelector('.section_5_inner_txt_2');
let section_5_inner_btn = document.querySelector('.section_5_inner_btn');
let section_6_img_box = document.querySelector('.section_6_img_box');
let section_7_img_1 = document.querySelector('.section_7_img_1');
let section_7_img_2 = document.querySelector('.section_7_img_2');
let section_7_txt_1 = document.querySelector('.section_7_txt_1');
let section_7_txt_2 = document.querySelector('.section_7_txt_2');
let section_7_btn = document.querySelector('.section_7_btn');
window.addEventListener('scroll', () => {
    let scroll_value = window.scrollY;
    console.log(scroll_value)
    if (scroll_value > 500) {
        section_3_img_box.style.animation = 'section_3_img_box_slide 2s ease forwards';
        section_3_text_box.style.animation = 'section_3_text_box_slide 2s ease forwards';

    }
    else {
        section_3_img_box.style.animation = 'section_3_img_box_slide_del 2s ease forwards';
        section_3_text_box.style.animation = 'section_3_text_box_slide_del 2s ease forwards';
    }
    if (scroll_value > 1050) {
        section_4_cup.style.animation = 'section_4_cup 3.5s normal forwards';
    }
    else {
        section_4_cup.style.animation = 'section_4_cup_del 3.5s normal forwards';
    }
    if (scroll_value > 1598) {
        section_5_inner_txt_1.style.animation = 'section_5_inner_txt_1 2s ease forwards'
        section_5_inner_txt_2.style.animation = 'section_5_inner_txt_2 2.6s ease forwards'
        section_5_inner_btn.style.animation = 'section_5_inner_btn 4s ease forwards'
    }
    else {
        section_5_inner_txt_1.style.animation = 'section_5_inner_txt_1_del 2s ease forwards'
        section_5_inner_txt_2.style.animation = 'section_5_inner_txt_2_del 2s ease forwards'
        section_5_inner_btn.style.animation = 'section_5_inner_btn_del 2s ease forwards'
    }
    if (scroll_value > 2044) {
        section_6_img_box.style.animation = 'section_6_img_box 3s ease forwards'
    }
    else {
        section_6_img_box.style.animation = 'section_6_img_box_del 3s ease forwards'
    }
    if (scroll_value > 2521) {
        section_7_img_2.style.animation = 'section_7_img 3.5s ease forwards'
        section_7_img_1.style.animation = 'section_7_img 3.5s ease forwards'
        section_7_txt_1.style.animation = 'section_7_txt_1 2s ease forwards'
        section_7_txt_2.style.animation = 'section_7_txt_2 2.5s ease forwards'
        section_7_txt_1.style.animation = 'section_7_txt_1 2s ease forwards'
        section_7_btn.style.animation = 'section_7_btn 2.3s ease forwards'
    }
    else {
        section_7_img_2.style.animation = 'section_7_img_del 3.5s ease forwards'
        section_7_img_1.style.animation = 'section_7_img_del 3.5s ease forwards'
        section_7_txt_1.style.animation = 'section_7_txt_1_del 2s ease forwards'
        section_7_txt_2.style.animation = 'section_7_txt_2_del 2.5s ease forwards'
        section_7_txt_1.style.animation = 'section_7_txt_1_del 2s ease forwards'
        section_7_btn.style.animation = 'section_7_btn_del 2.3s ease forwards'
    }
})

// 스크롤 값 나타나는 함수
