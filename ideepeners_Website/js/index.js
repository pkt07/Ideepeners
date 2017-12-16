
(function($) {
  "use strict";
  $.fn.sliderResponsive = function(settings) {
    
    var set = $.extend( 
      {
        slidePause: 3000,
        fadeSpeed: 750,
        autoPlay: "on",
        showArrows: "off", 
        hideDots: "off", 
        hoverZoom: "on",
        titleBarTop: "off"
      },
      settings
    ); 
    
    var $slider = $(this);
    var size = $slider.find("> div").length; //number of slides
    var position = 0; // current position of carousal
    var sliderIntervalID; // used to clear autoplay
      
    // Add a Dot for each slide
    $slider.append("<ul></ul>");
    $slider.find("> div").each(function(){
      $slider.find("> ul").append('<li></li>');
    });
      
    // Put .show on the first Slide
    $slider.find("div:first-of-type").addClass("show");
      
    // Put .showLi on the first dot
    $slider.find("li:first-of-type").addClass("showli")

     //fadeout all items except .show
    $slider.find("> div").not(".show").fadeOut();
    
    // If Autoplay is set to 'on' than start it
    if (set.autoPlay === "on") {
        startSlider(); 
    } 
    
    // If showarrows is set to 'on' then don't hide them
    if (set.showArrows === "on") {
        $slider.addClass('showArrows'); 
    }
    
    // If hideDots is set to 'on' then hide them
    if (set.hideDots === "on") {
        $slider.addClass('hideDots'); 
    }
    
    // If hoverZoom is set to 'off' then stop it
    if (set.hoverZoom === "off") {
        $slider.addClass('hoverZoomOff'); 
    }
    
    // If titleBarTop is set to 'on' then move it up
    if (set.titleBarTop === "on") {
        $slider.addClass('titleBarTop'); 
    }

    // function to start auto play
    function startSlider() {
      sliderIntervalID = setInterval(function() {
        nextSlide();
      }, set.slidePause);
    }
    
    // on mouseover stop the autoplay
    $slider.mouseover(function() {
      if (set.autoPlay === "on") {
        clearInterval(sliderIntervalID);
      }
    });
      
    // on mouseout starts the autoplay
    $slider.mouseout(function() {
      if (set.autoPlay === "on") {
        startSlider();
      }
    });

    //on right arrow click
    $slider.find("> .right").click(nextSlide)

    //on left arrow click
    $slider.find("> .left").click(prevSlide);
      
    // Go to next slide
    function nextSlide() {
      position = $slider.find(".show").index() + 1;
      if (position > size - 1) position = 0;
      changeCarousel(position);
    }
    
    // Go to previous slide
    function prevSlide() {
      position = $slider.find(".show").index() - 1;
      if (position < 0) position = size - 1;
      changeCarousel(position);
    }

    //when user clicks slider button
    $slider.find(" > ul > li").click(function() {
      position = $(this).index();
      changeCarousel($(this).index());
    });

    //this changes the image and button selection
    function changeCarousel() {
      $slider.find(".show").removeClass("show").fadeOut();
      $slider
        .find("> div")
        .eq(position)
        .fadeIn(set.fadeSpeed)
        .addClass("show");
      // The Dots
      $slider.find("> ul").find(".showli").removeClass("showli");
      $slider.find("> ul > li").eq(position).addClass("showli");
    }

    return $slider;
  };
})(jQuery);


 
//////////////////////////////////////////////
// Activate each slider - change options
//////////////////////////////////////////////
$(document).ready(function() {
  
  $("#slider1").sliderResponsive({
  // Using default everything
    // slidePause: 5000,
    // fadeSpeed: 800,
    // autoPlay: "on",
    // showArrows: "off", 
    // hideDots: "off", 
    // hoverZoom: "on", 
    // titleBarTop: "off"
  });
  
  $("#slider2").sliderResponsive({
    fadeSpeed: 300,
    autoPlay: "off",
    showArrows: "on",
    hideDots: "on"
  });
  
  $("#slider3").sliderResponsive({
    hoverZoom: "off",
    hideDots: "on"
  });
  
}); 





var activeDropdown = {};
document.getElementById('icecream-dropdown').addEventListener('click',showDropdown);                                                           
function showDropdown(event){
  if (activeDropdown.id && activeDropdown.id !== event.target.id) {
    activeDropdown.element.classList.remove('active');
  }
  //checking if a list element was clicked, changing the inner button value
  if (event.target.tagName === 'LI') {
    activeDropdown.button.innerHTML = event.target.innerHTML;
    for (var i=0;i<event.target.parentNode.children.length;i++){
      if (event.target.parentNode.children[i].classList.contains('check')) {
        event.target.parentNode.children[i].classList.remove('check');
      }
    }
    //timeout here so the check is only visible after opening the dropdown again
    window.setTimeout(function(){
          event.target.classList.add('check');
    },500)
  }
  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('dropdown-selection')){
        activeDropdown.id = this.id;
        activeDropdown.element = this.children[i];
        this.children[i].classList.add('active');
     }
    //adding the dropdown-button to our object
    else if (this.children[i].classList.contains('dropdown-button')){
      activeDropdown.button = this.children[i];
    }
  }
}

window.onclick = function(event) {
  if (!event.target.classList.contains('dropdown-button')) {
    activeDropdown.element.classList.remove('active');
  }
}


function showFrameIndex(index) {
  var frames = document.getElementsByClassName('gallery-frame');
  var badges = document.getElementsByClassName('badge-item');
  var i;
  
  for (i = 0; i < frames.length; i++) {
    frames[i].style.display = 'none';
  }
  frames[index].style.display = 'flex';
  
  for (i = 0; i < badges.length; i++) {
    badges[i].className = 'badge-item badge-item-inactive';
  }
  badges[index].className = 'badge-item';
}

var displayIndexFrame = 0;
showFrameIndex(displayIndexFrame);