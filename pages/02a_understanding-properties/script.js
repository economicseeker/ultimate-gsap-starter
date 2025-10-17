import gsap from "gsap";

gsap.to(".box", {
    //y: -200,
    opacity: 1,
    rotation: 360,
    background: "#ff6f61",
    borderRadius: "50%",
    scale: 1.25,
    duration: 2,
    ease: "bounce",
    //delay: .2,
    //repeat: -1,
    //yoyo: true,
    //repeatDelay: 2,
    //paused: true,
    stagger: 1,
});