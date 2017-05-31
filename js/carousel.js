define(['jquery'],function ($) {
    function Carousel(options){
        this.settings={       //初始值
            buttonStyle:'square',     
            arrows:'bottom',        
            speed:1000
        };
        $.extend(this.settings,options);
        this.$container=$('<div class="carousel-container"></div>');
        this.$imgs=$('<div class="carousel-imgs"></div>');
        this.$tab=$('<ul class="carousel-tab"></ul>');
        this.$arrows=$('<div class="carousel-arrows"></div>').addClass(this.settings.arrows);
        this.$prev=$('<div class="carousel-arrows-prev">&lt;</div>').addClass(this.settings.arrows);
        this.$next=$('<div class="carousel-arrows-next">&gt;</div>').addClass(this.settings.arrows);
    }
    Carousel.prototype.init=function () {
        for(var i=0;i<this.settings.imgs.length;i++){
            var $img=$('<img src="'+this.settings.imgs[i]+ '" />');
            this.$imgs.append($img);
            var $li=$('<li>'+(this.settings.buttonStyle=='circle'?'':(i+1))+'</li>');
            this.$tab.append($li);
            
        }
        this.$imgs.children().eq(0).addClass('selected');
        this.$tab.children().eq(0).addClass('selected');
        this.$arrows.append(this.$prev).append(this.$next);
        this.$container.append(this.$imgs).append(this.$tab).append(this.$arrows);
        $(this.settings.selector).append(this.$container);

        var $lis=$('li',this.$tab);
        $lis.addClass(this.settings.buttonStyle);
        var $imgs=$('img',this.$imgs);
        var nowIdx=0;
        $lis.on('click',function(){
            changeImg($(this).index());
        });
        this.$prev.on('click',function(){
            nowIdx--;
            if(nowIdx == -1){
                nowIdx = $lis.length - 1;
            }
            changeImg(nowIdx);
        });
        this.$next.on('click',function(){
            nowIdx++;
            if(nowIdx == $lis.length){
                nowIdx = 0;
            }
            changeImg(nowIdx);
        });
        var _this=this;
        start();
        this.$container.hover(function(){
            // console.log('1=='+_this);
            clearInterval(_this.timer);
        },function(){
            start();
        });
        function start(){
            // console.log('2=='+_this);
            clearInterval(_this.timer);
            _this.timer=setInterval(function(){
                _this.$next.trigger('click');
            },_this.settings.speed);
            // console.log(this.timer);
        }
        function changeImg(index){
            nowIdx =index;
            // console.log($lis.eq(index));
            $lis.eq(nowIdx).addClass('selected').siblings().removeClass('selected');
            $imgs.eq(nowIdx).addClass('selected').siblings().removeClass('selected');
            // console.log(index);
        }
    }
    return Carousel;
});
