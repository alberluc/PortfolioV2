<template>
  <div class="letters" @mouseover="resetAnimations">
    <span class="letter_face" v-for="letter in word">
      <span class="letter letter-front" v-if="letter != ' '">{{ letter }}</span>
      <span class="letter letter-back" v-if="letter != ' '">{{ letter }}</span>
      <span class="letter letter-space" v-if="letter == ' '"></span>
    </span>
  </div>
</template>

<script>
  import AnimationsLetters from './animationLetters'

  export default {
    props: [ 'word' ],
    data () {
      return {
        isStopped: false
      }
    },
    methods: {
      resetAnimations: function () {
        this.isStopped = true;
        setTimeout(() => {
          for (let i = 0; i < this.lettersEl.length; i++) {
            if (
              typeof this.lettersEl[i].lastAnimation !== "undefined" &&
              this.lettersEl[i].lastAnimation !== null
            ) {
              let letterEl = this.lettersEl[i];
              let letterFrontEl = letterEl.querySelector('.letter-front');
              let letterBackEl = letterEl.querySelector('.letter-back');
              AnimationsLetters[letterEl.lastAnimation](letterEl, letterFrontEl, letterBackEl);
            }
          }
          setTimeout(() => {
            this.isStopped = false;
          }, 400);
        }, 400);
      },
      getRandomIndexLetter: function () {
        let randomLetter;
        let randomLetterIndex;
        do {
          randomLetterIndex = Math.round(Math.random() * (this.word.length - 1));
          randomLetter = this.word.charAt(randomLetterIndex);
        } while (randomLetter === " ");
        return randomLetterIndex;
      },
      getRandomIndexAnimation: function () {
        return Math.round(Math.random() * (Object.keys(AnimationsLetters).length - 1));
      },
      randomAnimation: function () {
        if (!this.isStopped)
          this.startAnimation(this.getRandomIndexLetter());
      },
      startAnimation: function (indexLetter) {
        let animationName;
        let letterEl = this.lettersEl[indexLetter];
        let letterFrontEl = letterEl.querySelector('.letter-front');
        let letterBackEl = letterEl.querySelector('.letter-back');
        if (
          typeof letterEl.lastAnimation === "undefined" ||
          letterEl.lastAnimation === null
        ) {
          animationName = 'animation' + this.getRandomIndexAnimation();
        } else {
          animationName = letterEl.lastAnimation;
        }
        AnimationsLetters[animationName](letterEl, letterFrontEl, letterBackEl);
      }
    },
    mounted () {
      this.lettersEl = this.$el.querySelectorAll('.letter_face');
      setInterval(this.randomAnimation.bind(this), 3000);
    }
  }
</script>

<style lang="scss" scoped>
  .letters{
    display: flex;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 95px;
    font-weight: 700;
  }
  .letter{
    display: block;
    margin: 0 1.5px;
    &-front{
      position: absolute;
    }
    &-back{
      color: #ff3333;
    }
    &-space{
      width: 30px;
    }
  }
  @include phone {
    .letters{
      font-size:10vw;
      margin: 5px 0;
    }
    .letter{
      &-space{
        display: block;
        width: 10px;
      }
    }
  }
</style>
