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
       $('#overlay').fadeIn();
       $('#search_form').fadeOut();
       $('#overlay').fadeOut();
       $('.filter-button').fadeIn();
       $('.tabs__label').fadeIn();
       
   });
   $('.user-panel-info__link').on('click', function () {
       $('.overlay, #settings').fadeIn('slow');
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
    // Modal hamburger
   $('[data-modal=hamburger]').on('click', function () {
       $('.overlay-hamburger, .modal__hamburger').fadeIn('slow');
   });

   $('.modal__close').on('click', function() {
    $('.overlay-hamburger, .modal__hamburger').fadeOut('slow');
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
// popup

let popupOpened = document.querySelector('.popup__opened');
let popup1 = document.getElementById('popup1');
let moreButton1 = document.getElementById('more1');
let popupOpenClose1 = () => {
  popup1.classList.toggle('popup__opened');
}
moreButton1.addEventListener('click', popupOpenClose1);

let popup2 = document.getElementById('popup2');
let moreButton2 = document.getElementById('more2');
let popupOpenClose2 = () => {
  popup2.classList.toggle('popup__opened');
}
moreButton2.addEventListener('click', popupOpenClose2);

let popup3 = document.getElementById('popup3');
let moreButton3 = document.getElementById('more3');
let popupOpenClose3 = () => {
  popup3.classList.toggle('popup__opened');
}
moreButton3.addEventListener('click', popupOpenClose3);

let popup4 = document.getElementById('popup4');
let moreButton4 = document.getElementById('more4');
let popupOpenClose4 = () => {
  popup4.classList.toggle('popup__opened');
}
moreButton4.addEventListener('click', popupOpenClose4);

let popup5 = document.getElementById('popup5');
let moreButton5 = document.getElementById('more5');
let popupOpenClose5 = () => {
  popup5.classList.toggle('popup__opened');
}
moreButton5.addEventListener('click', popupOpenClose5);

let popup6 = document.getElementById('popup6');
let moreButton6 = document.getElementById('more6');
let popupOpenClose6 = () => {
  popup6.classList.toggle('popup__opened');
}
moreButton6.addEventListener('click', popupOpenClose6);

let popup7 = document.getElementById('popup7');
let moreButton7 = document.getElementById('more7');
let popupOpenClose7 = () => {
  popup7.classList.toggle('popup__opened');
}
moreButton7.addEventListener('click', popupOpenClose7);

let popup8 = document.getElementById('popup8');
let moreButton8 = document.getElementById('more8');
let popupOpenClose8 = () => {
  popup8.classList.toggle('popup__opened');
}
moreButton8.addEventListener('click', popupOpenClose8);

let popup9 = document.getElementById('popup9');
let moreButton9 = document.getElementById('more9');
let popupOpenClose9 = () => {
  popup9.classList.toggle('popup__opened');
}
moreButton9.addEventListener('click', popupOpenClose9);

let popup10 = document.getElementById('popup10');
let moreButton10 = document.getElementById('more10');
let popupOpenClose10 = () => {
  popup10.classList.toggle('popup__opened');
}
moreButton10.addEventListener('click', popupOpenClose10);

let popup11 = document.getElementById('popup11');
let moreButton11 = document.getElementById('more11');
let popupOpenClose11 = () => {
  popup11.classList.toggle('popup__opened');
}
moreButton11.addEventListener('click', popupOpenClose11);

let popup12 = document.getElementById('popup12');
let moreButton12 = document.getElementById('more12');
let popupOpenClose12 = () => {
  popup12.classList.toggle('popup__opened');
}
moreButton12.addEventListener('click', popupOpenClose12);

let popup13 = document.getElementById('popup13');
let moreButton13 = document.getElementById('more13');
let popupOpenClose13 = () => {
  popup13.classList.toggle('popup__opened');
}
moreButton13.addEventListener('click', popupOpenClose13);

let popup14 = document.getElementById('popup14');
let moreButton14 = document.getElementById('more14');
let popupOpenClose14 = () => {
  popup14.classList.toggle('popup__opened');
}
moreButton14.addEventListener('click', popupOpenClose14);

let popup15 = document.getElementById('popup15');
let moreButton15 = document.getElementById('more15');
let popupOpenClose15 = () => {
  popup15.classList.toggle('popup__opened');
}
moreButton15.addEventListener('click', popupOpenClose15);