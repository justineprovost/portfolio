/* =================

author: Karan Mhatre
email: me@karanmhatre.com
website: karanmhatre.com
  
================= */

// Function to add and remove the page transition screen
function pageTransition() {

  var tl = gsap.timeline();
  tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('.loading-screen', { duration: .5, scaleY: 1});
  tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
    
    
}

// Function to animate the content of each page
function contentAnimation() {
  
    var tl = gsap.timeline();
    tl.from('.is-animated', { duration: .5, translateY: 10, opacity: 0 });
    tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0, delay:1});
    var tl= gsap.timeline();
    tl.from('.left', {duration:0.5, translateY: 50, opacity:0, delay:2})    
}

function homeTransition() {
     var tl = gsap.timeline();
  tl.set('.loading-home', { transformOrigin: "bottom center", delay:0});
  tl.to('.loading-home', { duration: .5, scale: 1, delay:0});
  tl.to('.loading-home', { duration: .5, scale: 0, transformOrigin: "center", skewX: 0, ease: "power1.out", delay: 1.5 });
}


$(function() {

  barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
        const done = this.async();
        pageTransition();
        contentAnimation();
        await delay(1000);
        $(window).scrollTop(0);
        done();
      },

      async once(data) {
        const done = this.async();
        homeTransition();
        contentAnimation();
        await delay(0);
        done();
      },

    }]
  });
    

});
