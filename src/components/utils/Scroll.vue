<template>
  <div class="scroll_container">
    <div class="scroll_bar">
      <div class="scroll_cursor">
        <div class="scroll_cursor_mark"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["coeffHeight"],
  methods: {
    hiddenPartHeight: function () {
      return this.parent.scrollHeight - this.parent.clientHeight;
    },
    hiddenPartRatio: function () {
      return this.hiddenPartHeight() / this.parent.scrollHeight;
    },
    barHeight: function () {
      return this.$el.offsetHeight * (1 - this.hiddenPartRatio());
    },
    setSizeToParent: function () {
      this.$el.style.height = `${this.parent.offsetHeight * this.coeffHeight}px`;
    },
    setSizeBar: function () {
      this.cursorEl.style.height = `${this.barHeight()}px`;
    },
    setPositionBar: function () {
      let ratio = (this.parent.scrollTop + this.parent.clientHeight) / this.parent.scrollHeight;
      this.cursorEl.style.transform = `translateY(${(this.$el.offsetHeight * ratio) - this.barHeight()}px)`;
    },
    updateState: function () {
      if (this.hiddenPartHeight() <= 0) {
        this.parent.classList.remove('scroll-active');
      }
      else {
        this.parent.classList.add('scroll-active');
        this.setSizeToParent();
        this.setSizeBar();
        this.setPositionBar();
      }
    }
  },
  mounted () {
    this.parent = this.$el.parentElement;
    this.cursorEl = this.$el.querySelector('.scroll_cursor');
    this.updateState();
    window.addEventListener('resize', this.updateState.bind(this));
    this.parent.addEventListener('scroll', this.updateState.bind(this));
  }
}
</script>

<style lang="scss">
  .scroll{
    &_bar{
      height: 100%;
    }
  }
</style>
