import $ from 'jquery';


$('.handle').on('click',function(){
  $('nav ul').toggleClass('showing');
});

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function(){
  $('a[href^="#"]').on('click',function(e){
    e.preventDefault();

var target = this.hash;
var $target = $(target);

// scroll and show hash

$('html, body').animate({
  'scrollTop': $target.offset().top
}, 1000, 'swing' , function () {
  window.location.hash = target;
});
//scroll and dont show hash
$('html, body').animate({
    'scrollTop': $target.offset().top
}, 1000, 'swing');

  });
});
