// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import TweenMax from 'gsap';
let colors = ['red', 'orange', 'yellow', 'green', 'blue'];

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');


const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
    duration: 16000,
    triggerElement: intro,
    triggerHook: 0
}) 
    // .addIndicators()
    .setPin(intro)
    .addTo(controller);

// text anim
const textAnim = gsap.to("h1", { duration: 2, y:'-200px', color: colors[0], scale: 1.4, color:'black' , opacity:0, ease: "power3.inOut"  });
// TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0, ,  } );

// second scene
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);
    
// new scene
// let textAnim = TweenMax.to(text, 1, { color: colors[0] });


let accelamount = 0.1;
let scrollpos = 0;
let delay =  0;

scene.on("update", e => {
  // Calculate the current color index based on the scroll position
  let colorIndex = Math.floor((e.scrollPos / 3000) * colors.length);

  // Update the color property of the text element
  textAnim.vars.color = colors[colorIndex];
});

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;    
});

setInterval(() => {
    delay += (scrollpos - delay) + accelamount;

    video.currentTime = delay;
}, 100);



