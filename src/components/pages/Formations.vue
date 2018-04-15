<template>
  <section id="page-formations" class="formations">
    <span class="h3">Mes formations</span>
    <div class="formations_bubbles">
      <span
        v-for="(formation, index) in formations"
        :class="{'formations_bubbles_item-active': formation.active, 'formations_bubbles_item': true }"
        @click="active(index)">
        <img class="formations_bubbles_item_image" :src="'./static/img/' + formation.image_name"/>
      </span>
    </div>
    <transition-group name="navigate" tag="ul" class="formations_list">
      <li v-for="(formation, index) in formations" v-if="formation.active" v-bind:key="index" class="formations_item">
        <section>
          <header class="formations_item_header">
            <h2 class="formations_item_name">{{ formation.name }}</h2>
            <span class="formations_item_school">{{ formation.school }} à {{ formation.city }}</span>
            <div class="formations_item_dates">
              <span class="formations_item_dates_from">
                <span class="formations_item_dates_from_icon"><i class="fas fa-flag"></i></span>
                <span class="formations_item_dates_from_text">{{ formation.from.year }}</span>
              </span>
              <span class="formations_item_dates_separation"> / </span>
              <span class="formations_item_dates_to">
                <span class="formations_item_dates_to_icon"><i class="fas fa-flag-checkered"></i></span>
                <span class="formations_item_dates_to_text">{{ formation.to.year }}</span>
              </span>
            </div>
          </header>
          <main class="formations_item_main">
            <p class="formations_item_description">{{ formation.description }}</p>
          </main>
        </section>
      </li>
    </transition-group>
  </section>
</template>

<script>
  import { Formations } from "@/data/formations"

  export default {
    data () {
      return {
        formations: Formations.map(item => ({...item, active: false}))
      }
    },
    created () {
      this.active(0);
    },
    methods: {
      active: function (index) {
        this.formations.forEach((formation, i) => formation.active = i === index);
      }
    }
  }
</script>

<style lang="scss">
  $imageSize: 80px;

  .navigate-enter-active, .navigate-leave-active{
    transition: transform 1s;
    .formations_item{
      &_header{
        transition: transform 1s, opacity 1s;
      }
      &_main{
        transition: transform 1s, opacity 1s;
      }
    }
  }

  .navigate-leave-to{
    .formations_item{
      &_header{
        transform: translateX(calc(100% + 80px));
        transform: translate3d(calc(100% + 80px), 0, 0);
        opacity: 0;
      }
      &_main{
        transform: translateX(calc(-100% - 80px));
        transform: translate3d(calc(-100% - 80px), 0, 0);
        opacity: 0;
      }
    }
  }

  .navigate-enter{
    .formations_item{
      &_header{
        transform: translateX(calc(-100% - 80px));
        transform: translate3d(calc(-100% - 80px), 0, 0);
        opacity: 0;
      }
      &_main{
        transform: translateX(calc(100% + 80px));
        transform: translate3d(calc(100% + 80px), 0, 0);
        opacity: 0;
      }
    }
  }

  .formations {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .formations_list{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .formations_item{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1080px;
    margin-top: 30px;
    top: 50%;
    transform: translateY(-50%);
    &_header{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &_name{
      display: block;
      color: $primaryColor;
      font-weight: 700;
      text-align: center;
    }
    &_school{
      display: block;
      color: $secondColor;
      font-size: 26px;
      font-weight: 700;
      font-style: italic;
      text-align: center;
    }
    &_image{
      display: block;
      max-width: $imageSize;
      max-height: $imageSize;
      &_container{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: $imageSize;
        height: $imageSize;
        background-color: white;
        border-radius: 50%;
      }
    }
    &_dates{
      margin: 10px 0 20px 0;
      font-size: 24px;
    }
    &_description{
      text-align: justify;
    }
  }

  .formations_bubbles{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .formations_bubbles_item{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: $imageSize;
    height: $imageSize;
    margin: 0 20px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 9px 6px rgba(53, 53, 53, 0.2);;
    transition: opacity 300ms, transform 300ms;
    &-active{
      transform: scale(1.05) translateY(-3px);
    }
    &:not(&-active){
      opacity: 0.5;
    }
    &:hover{
      opacity: 1;
    }
    &_image{
      display: block;
      max-width: $imageSize;
      max-height: $imageSize;
    }
  }

  @include phone {
    .formations_bubbles{
      position: relative;
      &_item{
        max-width: 40px;
        max-height: 40px;
        margin: 10px 5px 0 5px;
      }
    }
  }

</style>
