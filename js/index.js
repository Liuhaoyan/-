require(['jquery','carousel'],function ($,Carousel) {
    var imgData=['img/1.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
    var settings={
        selector:'#container',
        imgs:imgData,
        buttonStyle:'square',     //或者circle
        arrows:'bottom',        //center
        speed:500
    };
    var carousel=new Carousel(settings);
    carousel.init();
    var settings2={
        selector:'#container2',
        imgs:imgData,
        buttonStyle:'circle',     //或者square
        arrows:'center',        //bottom
        speed:1000
    };
    var carousel2=new Carousel(settings2);
    carousel2.init();


});