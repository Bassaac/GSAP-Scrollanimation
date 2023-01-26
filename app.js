// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import TweenMax from 'gsap';

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
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0, y:'-100px' } );

// second scene
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);
    



let accelamount = 1;
let scrollpos = 100;
let delay = 1;


scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;    
});

setInterval(() => {
    delay += (scrollpos - delay) + accelamount;

    video.currentTime = delay;
}, 85);



