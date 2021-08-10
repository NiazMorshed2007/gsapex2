var images = document.querySelectorAll("img");
// let counter = 1;
let big = false;

images.forEach((e, i) => {
  var tl = new TimelineLite({ paused: true, reversed: true });
  tl.to(`.img${i + 1}`, 0.4, {
    rotation: 0,
    boxShadow: `${0}px ${0}px ${30}px`,
    ease: Power2.ease,
  });
  var tl1 = new TimelineLite({ paused: true, reversed: true });

  tl1.to(`.img${i + 1}`, 0.4, {
    width: `${100}%`,
    height: `${100}%`,
    // x: 0,
    top: 0,
    left: 0,
    // y: 0,
    rotation: 0,
    zIndex: 10,
    ease: Power3.ease,
  });

  // var sc = new TimelineLite({paused: true})
  e.addEventListener("click", () => {
    big = big ? false : true;
    toggleTween(tl1);
  });
  e.addEventListener("mouseover", () => {
    tl.play();
  });
  e.addEventListener("mouseleave", () => {
    if (big === false) {
      toggleTween(tl);
    }
  });
  //   e.addEventListener("mouseleave", () => {
  //   });
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
