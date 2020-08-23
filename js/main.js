/* =================

author: Karan Mhatre
email: me@karanmhatre.com
website: karanmhatre.com
  
================= */

// Function to add and remove the page transition screen
function pageChange() {
  var tl = gsap.timeline();
  tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('.loading-screen', { duration: 0.5, scaleY: 1});
  tl.to('.loading-screen', { duration: 0.5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
}

// Function to animate the content of each page
function contentAnimation() {
    var tl = gsap.timeline();
    tl.from('.is-animated', { duration: 0.5, translateY: 10, opacity: 0 });
    tl.from('.main-navigation', { duration: 0.5, translateY: -10, opacity: 0, delay: 1});
    tl.from('.left', {duration:0.5, translateY: 10, opacity:0});    
}


$(function() {

  barba.init({
    sync: true,
    transitions: [{
        async once (data) {
        contentAnimation();
            pageChange();
      },
        
        async leave (data) {
        const done = this.async();
        pageChange();
        contentAnimation();
        await delay(1000);
        $(window).scrollTop(0);
        done();
      },

    }]
  });
    

});
