$(document).ready(function(){
    // Search
    $('[data-modal=search]').on('click', function () {
        $('#search_form').fadeIn();
        $('#overlay').fadeIn();
        $('.search').fadeOut();
        if (window.innerWidth <= 500) {
         // 0...768
         $('.filter-button').fadeOut();
         $('.tabs__label').fadeOut();
       } 
    });
    $('.search_form__close').on('click', function () {
        $('.search').fadeIn();
        $('#search_form').fadeOut();
        $('#overlay').fadeOut();
        $('.filter-button').fadeIn();
        $('.tabs__label').fadeIn();
    });
 });

 $(document).ready(function(){
    // Modal chain
   $('[data-modal=chain]').on('click', function () {
       $('.overlay-chain, .chain').fadeIn('slow');
   });

   $('.modal__close').on('click', function() {
       $('.overlay-chain, .chain').fadeOut('slow');
   });
});

 $(document).ready(function(){
     // Modal login
    $('[data-modal=login]').on('click', function () {
        $('.overlay-login, .login').fadeIn('slow');
    });
 
    $('.modal__close').on('click', function() {
        $('.overlay-login, .login').fadeOut('slow');
    });
 });

 $(document).ready(function(){
    // Modal login mbl
   $('.contact__sign_in_mbl').on('click', function () {
       $('.overlay-login, .login').fadeIn('slow');
       $('.overlay-hamburger, .modal__hamburger').fadeOut('slow');
   });
  
   $('.modal__close').on('click', function() {
       $('.overlay-login, .login').fadeOut('slow');
   });
  });
 
 $(document).ready(function(){
     // Modal password
    $('[data-modal=password]').on('click', function () {
         $('.overlay-login, .login').fadeOut('slow');
        $('.overlay-password, .password').fadeIn('slow');
    });
 
    $('.modal__close').on('click', function() {
        $('.overlay-password, .password').fadeOut('slow');
    });
 });
 
 $(document).ready(function(){
     // Modal loginbask
    $('[data-modal=loginbask]').on('click', function () {
        $('.overlay-password, .password').fadeOut('slow');
        $('.overlay-login, .login').fadeIn('slow');
    });
 
    $('.modal__close').on('click', function() {
     $('.overlay-login, .login').fadeOut('slow');
    });
 });
 
 $(document).ready(function(){
     // Modal create
    $('[data-modal=create]').on('click', function () {
        $('.overlay-create, .create').fadeIn('slow');
        $('.overlay-login, .login').fadeOut('slow');
    });
 
    $('.modal__close').on('click', function() {
     $('.overlay-create, .create').fadeOut('slow');
    });
 });
 
 $(document).ready(function(){
     // Modal loginBaskBreate
    $('[data-modal=loginBaskBreate]').on('click', function () {
        $('.overlay-create, .create').fadeOut('slow');
        $('.overlay-login, .login').fadeIn('slow');
    });
 
    $('.modal__close').on('click', function() {
     $('.overlay-login, .login').fadeOut('slow');
    });
 });

 
 $(document).ready(function(){
    // Modal settings
   $('#userPanelInfoLink').on('click', function () {
       $('.overlay-settings, .settings').fadeIn('slow');
   });

   $('.modal__close').on('click', function() {
       $('.overlay-settings, .overlay .settings .overlay').fadeOut('slow');
   });
});
 
 $(document).ready(function(){
     // Modal hamburger
    $('[data-modal=hamburger]').on('click', function () {
        $('.overlay-hamburger, .modal__hamburger').fadeIn('slow');
    });
 
    $('.modal__close').on('click', function() {
     $('.overlay-hamburger .modal__hamburger').fadeOut('slow');
    });
 });
 
 // Chain block
 (function() {
 
     function addSeparator(nStr) {
         nStr += '';
         var x = nStr.split('.');
         var x1 = x[0];
         var x2 = x.length > 1 ? '.' + x[1] : '';
         var rgx = /(\d+)(\d{3})/;
         while (rgx.test(x1)) {
             x1 = x1.replace(rgx, '$1' + '.' + '$2');
         }
         return x1 + x2;
     }
  
     function rangeInputChangeEventHandler(e){
         var rangeGroup = $(this).attr('name'),
             minBtn = $(this).parent().children('.min'),
             maxBtn = $(this).parent().children('.max'),
             range_min = $(this).parent().children('.range_min'),
             range_max = $(this).parent().children('.range_max'),
             minVal = parseInt($(minBtn).val()),
             maxVal = parseInt($(maxBtn).val()),
             origin = $(this).context.className;
  
         if(origin === 'min' && minVal > maxVal-5){
             $(minBtn).val(maxVal-5);
         }
         var minVal = parseInt($(minBtn).val());
         $(range_min).html(addSeparator(minVal));
  
  
         if(origin === 'max' && maxVal-5 < minVal){
             $(maxBtn).val(5+ minVal);
         }
         var maxVal = parseInt($(maxBtn).val());
         $(range_max).html(addSeparator(maxVal));
     }
  
  $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
  })();
 
  // arrow-up-button scroll
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
 }
 
 function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }
