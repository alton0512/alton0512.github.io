$(document).ready(function(){

   var $slides = $('.slide');/*selecting the slide all together and group into a list*/
    var $steps = $('.step');/*the steps show the fact*/
    var $labels = $('.cart-header .label');/*the fact labels*/
    var currentSlide = 0;/*0 always the first item of the list*/
    var slideNext = true;
    var continueP = true;
    var curentPage;
    var prices = [3299.00, 3568.99, 5699.00];
    TweenMax.set($slides.filter(":gt(0)"), {left:"100%"});/*setting the movement of the animation*/
    TweenMax.set($steps.filter(":gt(0)"), {top:"100%"});
    TweenMax.delayedCall(10, nextSlide);/*setting the delay time before animating*/
    
    
    
   
    

    function continuePlay(){/*play after the animation has finished*/
        continueP = true;
    }
    
     playInside();

    function nextSlide(){

        TweenMax.killAll(false, false, true);/*stop the delay*/

        if(slideNext && continueP==true){
            TweenMax.to($slides.eq(currentSlide), 1, {left:"-100%"});/*telling the current object to animatZVB e to the left*/

        if (currentSlide < $slides.length - 1){/*check that the current slide number is less than the number of slide, if it is, add one to the current slide*/
            currentSlide++;
        }
        else {/*if it is higher, then make the number zero*/
            currentSlide =  0;/*creat a loop function*/
        }

        TweenMax.fromTo($slides.eq(currentSlide), 1, {left: "100%"}, {left:"0px",onComplete:continuePlay});/*move the last slide*/


        }else if (!slideNext && continueP==true){/*slide right*/

            TweenMax.to($slides.eq(currentSlide), 1, {left:"100%"});/*telling the current object to animate to the left*/

        if (currentSlide > 0){/*check that the current slide number is less than the number of slide, if it is, add one to the current slide*/
            currentSlide--;
        }
        else {/*if it is higher, then make the number zero*/
            currentSlide =  $slides.length -1;/*creat a loop function*/
        }

        TweenMax.fromTo($slides.eq(currentSlide), 1, {left: "-100%"}, {left:"0px",onComplete:continuePlay});/*move the last slide*/
            
        }//end slide right

        

        //TweenMax.delayedCall(66, nextSlide);/*this is a delay to waith for the next slide*/
        setTimeout(nextSlide,10000);
        continueP = false;
        slideNext = true;
        
        playInside();
    }


    $('.slide-next').click(function(){//click event for slide left


        slideNext = true;
        nextSlide();



        });

 $('.slide-prev').click(function(){//click event for slide left


        slideNext = false;
        nextSlide();



        });
    

    function playInside(){
        
        var theShape = $($slides[currentSlide]).find('.shape');
        var theCharacter = $($slides[currentSlide]).find('.character');
        var theText = $($slides[currentSlide]).find('h1');
        var theBtn = $($slides[currentSlide]).find('.learn-btn');
        
        var insideTimeline = new TimelineMax();
        
        
        
        insideTimeline.from(theCharacter,1,{y:-800, delay:1,ease: Bounce. easeOut})
            .from(theShape,1.5,{scale:0, ease: Elastic. easeOut.config( 0.5, 0.5)})
            .from(theText,1.5,{scale:0, ease: Elastic. easeOut.config( 0.5, 0.5)})
            .from(theBtn,1.5,{scale:0, ease: Bounce. easeOut})
    }

    /*-------------------------------model click--------------------------------*/

    $('.learn-btn').click(function(){ /*button reaction*/ //slide down to the products page 
        $('.products').css('display', 'block');
        curentPage = '.products';//set page to products
        
        TweenMax.delayedCall(0.5, scrollPage);//call scrollPage function
        });
    
    $('.product-btn').click(function(){//slide down to the customise page
    $('.customise').css('display','block');
    curentPage = '.customise';//set page to customise
    
    TweenMax.delayedCall(0.5, scrollPage);//slide down to the products page
        
    });
    $('.column-btn').click(function(){// show the cart
        
        var theClicked = parseInt($(this).attr('id'));//what is the id of the object
        
        var tax = parseInt((prices[theClicked]*0.1).toFixed(2));
        
        var finalPrice = parseFloat(tax+prices[theClicked]);
        
        $('.sum-right h2').html('$'+finalPrice.toFixed(2));
        $('.pay-right h2').html('$'+finalPrice.toFixed(2));
        
        $('.sub-total').html('$'+prices[theClicked]);
        $('.gst').html('$'+tax);
        $('.final-price').html('$'+finalPrice.toFixed(2));
        
        TweenMax.fromTo($('.cart'),1,{opacity:0}, {opacity:1,display:'block',ease:Power4.easeInOut});
});
    
function scrollPage(){//scroll to the requied page (based on the variable curentPage)
    
    TweenMax.to($('body'),1,{scrollTo:curentPage,ease:
    Power4.easeInOut,onComplete:continuePlay});
    
}

$('#c_out').click(function(){//scroll to next step (sign in)
    
    scrollCheckout(1)//call scrollCheckout function and pass the step number
});

$('.loginBtn').click(function(){//scroll to next step (Shipping)
    scrollCheckout(2);//call scrollCheckout function and pass the step number
    
    
});

$('#shipping_s').click(function(){//scroll to next step (payment)
    
    scrollCheckout(3);//call scrollCheckout function and pass the step number
});

$('#payment_s').click(function(){//scroll to next step (Verify)
    
    scrollCheckout(4);//call the scrollCheckout function and pass the step number
});
    $('.checkout-button').click(function(){//scroll to next step (Submitted)
        scrollCheckout(5);//call scrollCheckout function and pass the step number
    });

    $('.shopBtn').click(function(){/*reset everythings and start again*/
        
        TweenMax.to($('.cart'),1, {opacity:0,display:'block',ease: Power4.easeInOut,onComplete:hideAllpages});//hide the cart and reset all pages and steps
        
        TweenMax.to($('body'),1,{scrollTo:0,ease:Power4.easeInOut,onComplete:continuePlay});//scroll back to the top
    });
    
    function scrollCheckout(currStep){//scroll required step
        
        if(continueP){
            
            TweenMax.to( $steps.eq(currStep-1), 1, {top:"-100%"});
            TweenMax.fromTo( $steps.eq(currStep), 1, {top: "100%"},
            {top:"0px",onComplete:continuePlay});
            
            $($labels[currStep-1]).removeClass('active');
            $($labels[currStep]).addClass('active');
        }
        continueP = false;
    };
    
    function hideAllpages(){//reset all and start again
        $('.cart').css('display','none');
        $('.customise').css('display','none');
        $('.products').css('display','none');
     
        
        //TweenMax.set($slides.filter(`:gt{currentSlide})`), {left:"100%"});
        TweenMax.set($steps[0], {top:0});
        TweenMax.set($steps.filter(':gt(0)'), {top:"100%"});
                     
        $($labels[5]).removeClass('active');
        $($labels[0]).addClass('active');
        
     
    }
    
//    $('.cart-header .progress').click(function(){
//        
//        console.log($(this).index());
//        
//        scrollCheckout($(this).index());
//        
//    });

});// end ready