const svgs = document.querySelectorAll("svg");
const controller = new ScrollMagic.Controller();
 
svgs.forEach((svg, index) => {
  const blurryTween = TweenMax.to(svg.querySelector("feTurbulence"), 4, {
    attr: {
      baseFrequency: "0.05",
      seed: "100"
    }
  });

  const op05 = TweenMax.to(svg.parentNode, 3, {
    opacity: 0.5,
  });

  const op1 = TweenMax.to(svg.parentNode, 3, {
    opacity: 1,
  });

  const blurryScene = new ScrollMagic.Scene({
    triggerElement: svg,
    duration: svg.parentNode.getBoundingClientRect().height - 50,
    triggerHook: 0
  })
    .setTween([blurryTween, op05])
    .addTo(controller);

  const notBlurryTween = TweenMax.to(svg.querySelector("feTurbulence"), 4, {
    attr: {
      baseFrequency: "0",
      seed: "1"
    }
  });

  const notBlurryScene = new ScrollMagic.Scene({
    triggerElement: svg,
    duration: svg.parentNode.getBoundingClientRect().height - 50,
    triggerHook: 0.9
  })
    .setTween([notBlurryTween, op1])
    .addTo(controller);
});

// DEMO

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.onerror = function() {
      this.style.display = "none";
    };
  });
});

// window.addEventListener('scroll', function() {
//   const scrollTop = Math.floor(document.documentElement.scrollTop)

//   if(scrollTop / document.)
// })