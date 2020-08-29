gsap.registerPlugin(ScrollTrigger);

barba.init({
	sync: true,

	transitions: [
		{
			async leave(data) {
				console.log(data);
				pageChange();
				await delay(1000);
				data.current.container.remove();
			},


			async enter(data) {	
				// In the next page
				allAnimationComponents();
                $(window).scrollTop(0);
			},

			async once(data) {
				allAnimationComponents();
			},
		},
	],
});

function allAnimationComponents() {
	bannerAnimation();
	contentAnimation();
}

function bannerAnimation() {
	const bannerTL = gsap.timeline();
	bannerTL
		
		.from("#first-appear", {
			delay: 0.3,
			y: 25,
			opacity: 0,
			duration: 0.5,
			ease: "power3.inOut"
		})
        .from(".second-appear", {
			delay: 0.5,
			y: 25,
			opacity: 0,
			duration: 0.5,
			ease: "power3.inOut"
		})

}

function contentAnimation() {

	console.log('content animation');

	var contentTl = gsap.timeline({
		scrollTrigger: {
			trigger:".section-c",
			markers:true,
			start:"top 85%", 
			end:"bottom 60%",
			toggleActions:"play none none none"
		},
	});

	contentTl.addLabel("start").fromTo(".about-content .title", { y: 16,opacity: 0, }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.inOut" })
    .fromTo(".boxes", { y:50, opacity: 0, }, { opacity: 1, y: 0, duration: 1, ease: "power3.Out",stagger: { amount: 0.2 } })
	.addLabel("end")
	.fromTo(".about-content h4", { y: 40, opacity: 0, }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.inOut" })
	.fromTo(".content-list", { y: 40, opacity: 0, }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.inOut",stagger: { amount: 0.2 } })
	.addLabel("end")
    ;
}

function pageChange() {
  var tl = gsap.timeline();
  tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('.loading-screen', { duration: 0.5, scaleY: 1});
  tl.to('.loading-screen', { duration: 0.5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
}


function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}
