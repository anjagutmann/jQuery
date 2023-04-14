//hover Animationen

$(document).ready(function() {

  const cursor = $(".cursor");
  const hoverLabel = $('.hover-label');

  $(document).on("mousemove", function(event) {
    cursor.css({
      "top": event.clientY + "px",
      "left": event.clientX + "px",
    });

    hoverLabel.css({
      "top": event.clientY - 15 + "px",
      "left": event.clientX + 40 + "px",
    });
  });

  $(document).on('mouseover', 'a, span, button, .slide', function(event) {
    cursor.css('transform', 'scale(3)');

    if ($(this).hasClass('slide') && $(this).css('opacity')==0) {
      hoverLabel.addClass('show');
    } else {
      hoverLabel.removeClass('show');
    }
});

  $(document).on('mouseout', 'a, span, button, .slide', function() {
    cursor.css('transform', 'scale(1)');

    hoverLabel.removeClass('show');
  });

  $(document).on('click', 'a, span, button, .slide', function() {
    cursor.css('transform', 'scale(3)');
    setTimeout(function() {
      cursor.css('transform', 'scale(1)');
      hoverLabel.removeClass('show');
    }, 500);
  });
});


//Scroll transition

$('.scroll-arrow').on('click', function(event) {
  //prüft ob Ziel von verlinkung leer ist, wenn nicht, dass animate
  if (this.hash !== '') {
    event.preventDefault();
    
    const hash = this.hash;
    
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
});


//Content einblenden durch klicken

$(document).ready(function() {
  $('.slide').first().addClass('active-slider');
  
  //Eventlistener 
  $('.slide').on('click', function() {
    const slideIndex = $(this).closest('.slide').index();
    const activeSlideIndex = $('.active-slider').index();
    
    //wenn nict active-slide, dann wird active-slide hinzugefügt
    if (slideIndex !== activeSlideIndex) {
      $('.active-slide').removeClass('active-slider');
      $('.slide').eq(slideIndex).addClass('active-slider');
    }
  });
});
