var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1', 'section2', 'section3', 'section4'],
    sectionsColor: ['#33135C', 'transparent', '#652EC730','#652EC760','#652EC790'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    responsiveHeight:350,  //세로 높이가 350px보다 작아졌을때는 오토스크롤링 작동X
    scrollBar:true, 
    // navigation:true  //오른쪽 페이지 버튼
    normalScrollElements: '#s3',
    //오토스크롤이 아니라 정상 스크롤이 적용
});

// document.querySelector('.scroll_guide').addEventListener('click',function(){
//     fullpage_api.moveSectionDown();
// });


new WOW().init();


/*top anmation*/
$(function(){

    $('#myCanvas').Klouds({
        selector: '#myCanvas',
        layerCount: 5,
        speed: 1,
        cloudColor1: '#652EC7',
        cloudColor2: '#ffffff',
        bgColor: '#33135C'
    });

    
});

/*chart doughnut1*/
const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');
const chart6 = document.querySelector('.doughnut6');


const makeChart = (percent, classname, color) => {
    let i = 1;
    let chartFn = setInterval(function() {
        if (i < percent) {
        colorFn(i, classname, color);
        i++;
        } else {
        clearInterval(chartFn);
        }
    }, 19); //도넛차트속도
}

const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
}

const replay = () => {
    makeChart(90, chart1, '#ffd300');
    makeChart(85, chart2, '#ffd300');
    makeChart(75, chart3, '#ffd300');
    makeChart(95, chart4, '#ffd300');
    makeChart(90, chart5, '#ffd300');
    makeChart(80, chart6, '#ffd300');
}

makeChart(90, chart1, '#ffd300');
makeChart(85, chart2, '#ffd300');
makeChart(75, chart3, '#ffd300');
makeChart(95, chart4, '#ffd300');
makeChart(90, chart5, '#ffd300');
makeChart(80, chart6, '#ffd300');

/*action-button*/
$(function() {
    $(".read-more > a").on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
        top: y,
        left: x
        });
    });
    $(".read-more > a").on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
        top: y,
        left: x
        });
    });
});



//contentBox animate
$(".A > img").mouseenter(function(){
    $(this).addClass('animate__animated animate__rotateInUpRight');
});

$(".A > img").mouseleave(function(){
    $(this).removeClass('animate__animated animate__rotateInUpRight');
});


$('.A').each(function() {

    var nowImg = $(this).find('img');  
    var srcName = nowImg.attr('src');  

    var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));

    //호버이벤트
    $(this).hover(function() { 
        $(this).find('img').attr('src', newSrc+ '-1.' + /[^.]+$/.exec(srcName)); 
    }, function() {
        $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); 
    });


});



//toppage main이동
$('.topbtn').click(function(){
    $('html').animate({scrollTop:0},1000);     
});

$('.A').click(function(e){

    e.preventDefault();       

    $(this).addClass("click");
    $(this).parent().siblings().find("a").removeClass("click");

    var targ = this.hash;     
    var sectionH =($(targ).offset().top); 

    $('html,body').animate({scrollTop:sectionH},1000);

});



// popup
const items = document.querySelectorAll('.article');
const pop = document.querySelector('.popup');

//각 아이템 갯수만큼 반복
for(let el of items){
    el.addEventListener('click', e => {
        const wWidth = document.body.clientWidth; 

        if( wWidth > 540){

            const img = e.currentTarget.querySelector('img').getAttribute('src');
            const tit = e.currentTarget.querySelector('h2').innerText; 
            const desc = e.currentTarget.querySelector('p').innerText;

            //popup에 위에 변수 내용을 적용
            pop.querySelector('img').setAttribute('src', img);
            pop.querySelector('h2').innerText = tit;
            pop.querySelector('p').innerText = desc;

            pop.classList.add('on');
        }
    });
}

//popup창을 클릭하면 화면이 사라짐
pop.addEventListener('click', e => {
    pop.classList.remove('on');
});




// swiper

  // swper1
var swiper = new Swiper(".swiper1", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    mousewheel: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

    //swper2
var Mswiper = function(){
    winW = $(window).width();
        if($(window).width() <= 540) {
            var swiper2 = new Swiper(".swiper2", {

                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                  },
        });
        } else if (winW > 540) {
            
        }
    };
Mswiper();

$(window).on('resize', function(){
    console.log("확인!");
    // location.reload(); 
    Mswiper();
});

winW = $(window).width();
