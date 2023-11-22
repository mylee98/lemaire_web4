$(document).ready(function(){
    //11/21일 과제: 햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거 버튼 스위치 되도록 처리
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });
    new fullpage('#wrap',{
        // 섹션4,5,푸터는 정상 스크롤값으로 설정
        normalScrollElements: '.sec-4, .sec-5, .footer',
        // 상단영역으로 이동하는 것을 막아줌
        fitToSection: false,
        //position 영향을 받는 애들은 스크롤바 트루 처리를 해줘야함
        scrollBar : true,
        scrollingSpeed: 300,
        responsiveWidth: 1800,
        responsiveHeight: 890,
    });
    //상단이동버튼 2번째 페이지에서 보이게 처리
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        
        if(sct >= 300){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
 
    });
    // 11/17일과제 : 풀페이지 설정해오기 (=연결하기) / 섹션 4,5, 푸터는 정상 스크롤값으로 설정/ 상단이동버튼 보이게 해줘야함 / 풀페이지 부분에는 계속해서 풀페이지 상단영역으로 이동하게 된다 이것을 제거해주기//

    // 11/20일 과제
    //sub-menu
    //마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    //active 추가제거 이용해서 만들면됨

    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        //서브메뉴박스도 보이게 처리
        $('.sub-menu-box').addClass('active');

        //헤더 색상변경
        $('.header-area,.header-logo svg').addClass('active');
    });
    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area,header-logo svg').removeClass('active');
    });

  

    // sec-4 swiper
    //세로 자동으로 굴러가는 스와이퍼 연결해보기
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop: true,
        speed: 500,
        autoplay:{
            delay: 1500,
        }
      });

    //상단이동버튼 300px 이상일때 최상단으로 올라가는 상단이동버튼 구현해보기
    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });
});
