


function triggerReset(event){
  var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
  if (chCode == 114) reset();
}

function reset(){
  alert("See you space cowboy");
}

function init() {

  ScrollReveal({ duration: 1000 });
  ScrollReveal().reveal('.headline');
  ScrollReveal().reveal('.tagline', { delay: 100 });
  ScrollReveal().reveal('.punchline', { delay: 1000 });


  ScrollReveal().reveal('.parole', {delay:100});
  ScrollReveal().reveal('.top',{delay: 100});
  ScrollReveal().reveal('.tag', { easing:'ease-in' });
  ScrollReveal().reveal('.punch', { delay: 500 , interval:200});

 ScrollReveal().reveal('.enterright', { distance: '50px', easing:'ease-in', origin:'right', viewFactor: 0.5});

  ScrollReveal().reveal('.enterleft', { distance: '50px', easing:'ease-in', origin:'left', viewFactor: 0.5});

  ScrollReveal().reveal('.bottone', { viewFactor: 1});
  $('.carousel').carousel();

}
