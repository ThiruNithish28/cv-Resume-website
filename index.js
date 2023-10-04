$(".btn_nav").click(function () {
    // animate content
    $(".page__style").addClass("animate_content");
    $(".page__description").fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function () {
      $(".page__style").removeClass("animate_content");
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function () {
      $(".page__style").removeClass("fadeIn");
    }, 1500);
  });
  
  // on click show page after 1500ms
  $(".about__link").click(function () {
    setTimeout(function () {
      $(".about").addClass("fadeIn");
    }, 1500);
  });
  
  $(".work__link").click(function () {
    setTimeout(function () {
      $(".work").addClass("fadeIn");
    }, 1500);
  });
  
  $(".resume__link").click(function () {
    setTimeout(function () {
      $(".resume").addClass("fadeIn");
    }, 1500);
  });
  
 
  
  $(".contact__link").click(function () {
    setTimeout(function () {
      $(".contact-sec").addClass("fadeIn");
    }, 1500);
  });
  

//   hanberge menu 

const navList = document.querySelector(".mobile-nav-lists");
const navListLinks = document.querySelector(".nav-lists-links")
const navToggle = document.querySelector(".menu-toggle");

navToggle.addEventListener("click", () =>{
    const visibility = navList.getAttribute("data-visible");
    if(visibility === "false"){
        navList.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
    }else if(visibility === "true"){
        navList.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded',false);
    }
})