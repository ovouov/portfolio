window.onload = () => {

    const Slider = function (pages, pagination) {

        let slides = [],
            btns = [],
            current = 0,
            touchstart = 0,
            animation_state = false;

        const init = () => {
            slides = pages.children;
            console.log(slides)//↙페이지 수 만큼 li가 생겨라
            for (let i = 0; i < 5; i++) {
                slides[i].style.bottom = -(i * 100) + '%';
                let btn = document.createElement('li');
                btn.dataset.slide = i;
                btn.addEventListener('click', btnClick)
                btns.push(btn);
                pagination.appendChild(btn);
            }
            btns[0].classList.add('active');
        }

        const gotoNum = (index) => {
            if ((index != current) && !animation_state) {
                animation_state = true;
                setTimeout(() => {
                    animation_state = false, 500
                });
                btns[current].classList.remove('active');
                current = index;
                btns[current].classList.add('active');
                for (let i = 0; i < 5; i++) {
                    slides[i].style.bottom = (current - i) * 100 + '%';
                }
            }
        }
        //--------------------------------↙페이지 수 만큼 움직여라
        const gotoNext = () => current < 5 - 1 ? gotoNum(current + 1) : false;
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
        const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
        pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
        pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
        pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

        init();
    }

    let pages = document.querySelector('.container');
    let pagination = document.querySelector('.pagination');
    let slider = new Slider(pages, pagination)


    let target = document.querySelector('#dynamic');

    function blink() {
        target.classList.toggle("active");
    }
    function resetTyping() {
        target.textContent = '';
        dynamic(randomString());
    }
    function randomString() {
        let stringArr = ['안녕하세요', 'Hello', 'こんにちは', 'Nǐ hǎo', 'नमस्ते ', 'Hola', 'Bonjour', 'مرحبًا '];
        let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
        let selectStringArr = selectString.split('');
        return selectStringArr;
    }
    //한글자식 텍스트 출력함수 
    function dynamic(randomArr) {
        if (randomArr.length > 0) {
            target.textContent += randomArr.shift();
            setTimeout(function () {
                dynamic(randomArr)
            }, 80);
        }
        else {
            setTimeout(resetTyping, 2000);
        }
    }
    dynamic(randomString())
    setInterval(blink, 500);

    // 첫 번째 코드 블록: .my_pic 요소가 화면에 들어왔을 때 실행
    const handleIntersectionMyPic = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const myPic = document.querySelector('.my_pic');
                const motto = document.querySelector('.motto');
                const motto_2 = document.querySelector('.motto_2');
                const intro_one = document.querySelector('.intro_one');
                const intro_two = document.querySelector('.intro_two');
                const intro_three = document.querySelector('.intro_three');
                const intro_four = document.querySelector('.intro_four');
                myPic.style.opacity = 1;
                if (myPic.style.opacity === '1') {
                    const motto = document.querySelector('.motto');
                    motto.style.left = '55%';
                    motto.style.opacity = 1;
                }
                if (motto.style.opacity = 1) {
                    motto_2.style.left = '55%';
                    motto_2.style.opacity = 1;
                    intro_one.style.opacity = 1;
                    intro_two.style.opacity = 1;
                    intro_three.style.opacity = 1;
                    intro_four.style.opacity = 1;
                }
                // 더 이상 감시할 필요가 없으므로 감시 중지
                observer.unobserve(entry.target);
            }
        });
    };

    // Intersection Observer 생성: .my_pic 요소 감시
    const optionsMyPic = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };
    const myPicElement = document.querySelector('.my_pic');
    const observerMyPic = new IntersectionObserver(handleIntersectionMyPic, optionsMyPic);
    observerMyPic.observe(myPicElement);

    // 두 번째 코드 블록: #skill 요소가 화면에 들어왔을 때 실행
    const handleIntersectionSkill = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // #skill이 뷰포트에 들어왔을 때 실행할 코드
                const skillbox = document.querySelectorAll('.skill_box');
                let currentIndex = 0;

                const intervalId = setInterval(function () {
                    if (currentIndex < skillbox.length) {
                        skillbox[currentIndex].style.opacity = 1;
                        currentIndex++;
                    } else {
                        // 모든 요소가 처리되었으면 interval을 멈춥니다.
                        clearInterval(intervalId);
                    }
                }, 50);
                // 더 이상 해당 요소를 감시할 필요가 없으므로 감시 중지
                observer.unobserve(entry.target);
            }
        });
    };

    // Intersection Observer 생성: #skill 요소 감시
    const optionsSkill = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };
    const skillElement = document.getElementById('skill');
    const observerSkill = new IntersectionObserver(handleIntersectionSkill, optionsSkill);
    observerSkill.observe(skillElement);


    // 세 번째 코드 블록: #skill 요소가 화면에 들어왔을 때 실행
    const handleIntersectionContact = (entries, observer) => {
        const cloud_o_f = document.querySelector('.cloud_o_f');
        const cloud_w_f = document.querySelector('.cloud_w_f');
        const contact_wrap = document.querySelector('.contact_wrap');


        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // #skill이 뷰포트에 들어왔을 때 실행할 코드
                cloud_w_f.classList.add('cloud_on');
                cloud_o_f.classList.add('cloud_on');
                contact_wrap.style.opacity = 1;
            }
            else {
                cloud_w_f.classList.remove('cloud_on');
                cloud_o_f.classList.remove('cloud_on');
                contact_wrap.style.opacity = 0;
            }
        });
    };

    // Intersection Observer 생성: #contact 요소 감시
    const optionsContact = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };
    const ContactElement = document.getElementById('contact');
    const observerContact = new IntersectionObserver(handleIntersectionContact, optionsContact);
    observerContact.observe(ContactElement);


}
let horizontalUnderLine = document.getElementById('horizontal-underline');
let horizontalMenus = document.querySelectorAll('.menu-item-link');

horizontalMenus.forEach(menu => menu.addEventListener('click', (e) => horizontalIndicator(e)));

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + 'px';
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + 'px';
    horizontalUnderLine.style.top =
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px';
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },



});