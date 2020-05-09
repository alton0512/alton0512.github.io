$(document).ready(function(){

var bigT= $('.big');
var dayT = $('.day');
var outT = $('.out');
var playB = $('.play');
var resetB = $('.reset');
var stopB = $('.stop');
var reserveB = $('.reverse');   
    
    
//To animate using GSAP call its libery (TweenMax) then it's method (to) and pass along the object you want to animate,how long the animation should be and the properties you want to animate.    
//TweenMax.to(bigT,2,{width:'100px',height:'30px', x:'200px',y:'30px',rotation:45});
//    
//    //You can animate an object "from" a point or state to it's original point and state.
//TweenMax.from(dayT,2,{x:'900px',width:'0px',height:'0px',rotation:180});
//
////To animate from a position and state to another position and state.
//TweenMax.fromTo(outT,2,{x:'900px',y:'400px',rotation:45},{x:'100px',y:'10px',rotation:-10});
//    
//    var timeline = new TimelineMax();
//    
//    timeline.to(bigT,2,{x:'500px'})
//        .to(dayT,2,{x:'400px'},'-=1.9')
//        .to(outT,2,{x:'200px'},'+=0.5')
//    .stop();
//    
//    $(playB).click(function(){
//        
////        TweenMax.staggerTo($('.title'),1,{x:'500px'},0.2);
//        timeline.play();
//    });
//    
//    $(resetB).click(function(){
//        timeline.play(0);
//    });
//    $(stopB).click(function(){
//        timeline.stop();
//    });
//    
//    $(reserveB).click(function(){
//       timeline.reverse(); 
//    });

    
    var big,day,out,backgound,counter,usercount,count;
    
    big = $('#big');
    day = $('#day');
    out = $('#out');
    background = $('.background');
    counter = $('<div class="counter"><h2>Number of visitors 832</h2></div>');
    usercount = 1882;
    count = {number:0}
    
    $(big).css('display', 'none');
    $(day).css('display', 'none');
    $(out).css('display', 'none');
    
    setTimeout(function(){
        
        var logAnim = new TimelineMax();
        
        $(big).css('display', 'block');
    $(day).css('display', 'block');
    $(out).css('display', 'block');
        
        
        logAnim.from(big,0.7,{y:-300,ease: Power3. easeOut})
                .from(day,0.7,{y:500,ease: Power3. easeOut})
        .from(out,0.7,{x:900,ease: Power3. easeOut,onComplete:placeCounter})
        .to(background,0.5,{opacity:1})
        .staggerTo('.band:not(.header)',0.7,{width:'100%',padding:'10%',ease: Power3. easeOut},0.2);
            
        
    },2000);
    
    function placeCounter(){
        
        var animCounter = new TimelineMax();
        
        $(background).append(counter);
        
        animCounter.to(counter,1.7,{width:'200px',ease:Elastic.easeOut.config(0.8,0.3)})
    }
    
});
