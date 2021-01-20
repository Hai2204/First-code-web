$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        
        if(position >= 200){
            $('.nav-menu').addClass('custom-navbar');
        } else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 650){
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight')
        } else{
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight')
        }
    });
    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value === 'all'){
            $('.filter').show(300);
        } else{
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });
    $('.gallery-list-item').click(function(){
         
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 4800){
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        }else{
            $('.card-1').removeClass('moveFromLeft')
            $('.card-2').removeClass('moveFromBottom')
            $('.card-3').removeClass('moveFromRight')
        }
    });
    // tạo click slow the a
    $('#nav a').on('click',function(event){
        if(this.hash != ''){
            event.preventDefault();
            const hash = this.hash; 
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 125
            },
            800);
            // $(this).addClass('border-bottom');
            $(this).addClass('nav-active');
            
            // $(this).parent().siblings().children().removeClass('border-bottom');
            $(this).parent().siblings().children().removeClass('nav-active');
        }
    });
    // $('body').scrollspy({target: ".navbar", offset: 50});
    $(document).ready(function(){
        $('body').scrollspy({target: "#myNavbar", offset: 50}).addClass('nav-border1');   
      });
    // $( window ).scroll(function() {
    //     $("#nav a").scrollspy({target: ".navbar", offset: 50}).addClass('nav-active');
    //   });
    // window.addEventListener("scroll", event => {
    //     let fromTop = window.scrollY;
    //     let mainNavLinks = document.querySelectorAll("nav ul li a");
    //     let mainSections = document.querySelectorAll("main section");
        
    //     let lastId;
    //     let cur = [];
    //     mainNavLinks.forEach(link => {
    //       let section = document.querySelector(link.hash);
      
    //       if (
    //         section.offsetTop <= fromTop &&
    //         section.offsetTop + section.offsetHeight > fromTop
    //       ) {
    //         link.classList.add("current");
    //       } else {
    //         link.classList.remove("current");
    //       }
    //     });
    // });

});