$(window).scroll(function(){
  var ws = $(window).scrollTop(); 
  
  $('#layer4').css({
    'transform': `translate(0px, -${ws / 1.2}px)`
  });
  
  $('#layer3').css({
    'transform': `translate(0px, -${ws / 2}px)`
  });
  
  $('#layer1').css({
    'transform': `translate(0px, -${ws / 3}px)`
  });
  
  $('#layer0').css({
    'transform': `translate(0px, -${ws / 4}px)`
  });
  
}); 