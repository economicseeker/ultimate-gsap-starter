import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
    y: 60,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2,
    duration: 0.8,
    ease: "power4.out",
});

repeat.addEventListener("click", () => {
    animation.restart();
});