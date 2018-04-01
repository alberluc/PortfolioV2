import { TweenMax } from 'gsap'

const animationLetterDuration = 0.2;

export default {
  animation0: function (lettersEl, letterFrontEl, letterBackEl) {
    if (lettersEl.isAnimated) {
      TweenMax.fromTo(
        letterBackEl,
        animationLetterDuration,
        {
          scaleX: -1,
          scaleY: 1
        },
        {
          scaleX: 0,
          scaleY: 1
        }
      );
      TweenMax.fromTo(
        letterFrontEl,
        animationLetterDuration,
        {
          scaleX: 0,
          scaleY: 1
        },
        {
          delay: animationLetterDuration,
          scaleX: 1,
          scaleY: 1,
          onComplete: () => lettersEl.isAnimated = false
        }
      );
    }
    else {
      TweenMax.fromTo(
        letterFrontEl,
        animationLetterDuration,
        {
          scaleX: 1,
          scaleY: 1
        },
        {
          scaleX: 0,
          scaleY: 1
        }
      );
      TweenMax.fromTo(
        letterBackEl,
        animationLetterDuration,
        {
          scaleX: 0,
          scaleY: 1
        },
        {
          delay: animationLetterDuration,
          scaleX: -1,
          scaleY: 1,
          onComplete: () => lettersEl.isAnimated = true
        }
      );
    }
    lettersEl.lastAnimation = lettersEl.lastAnimation === 'animation0' ? null : 'animation0';
  },
  animation1: function (lettersEl, letterFrontEl, letterBackEl) {
    if (lettersEl.isAnimated) {
      TweenMax.fromTo(
        letterBackEl,
        animationLetterDuration,
        {
          scaleX: 1,
          scaleY: -1
        },
        {
          scaleX: 1,
          scaleY: 0
        }
      );
      TweenMax.fromTo(
        letterFrontEl,
        animationLetterDuration,
        {
          scaleX: 1,
          scaleY: 0
        },
        {
          delay: animationLetterDuration,
          scaleX: 1,
          scaleY: 1,
          onComplete: () => lettersEl.isAnimated = false
        }
      );
    }
    else {
      TweenMax.fromTo(
        letterFrontEl,
        animationLetterDuration,
        {
          scaleX: 1,
          scaleY: 1
        },
        {
          scaleX: 1,
          scaleY: 0
        }
      );
      TweenMax.fromTo(
        letterBackEl,
        animationLetterDuration,
        {
          scaleX: 1,
          scaleY: 0
        },
        {
          delay: animationLetterDuration,
          scaleX: 1,
          scaleY: -1,
          onComplete: () => lettersEl.isAnimated = true
        }
      );
    }
    lettersEl.lastAnimation = lettersEl.lastAnimation === 'animation1' ? null : 'animation1';
  },
  animation2: function (lettersEl, letterFrontEl, letterBackEl) {  /* Empty for random no animation */  }
}
