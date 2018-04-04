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
    <ul class="formations_list">
      <li v-for="(formation, index) in formations" v-if="formation.active" class="formations_item">
        <span class="formations_item_name">{{ formation.name }}</span>
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
        <p class="formations_item_description">{{ formation.description }}</p>
      </li>
    </ul>
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
  $imageSize: 65px;

  .formations {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .formations_list{
    padding-top: 20px;
  }

  .formations_item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &_name{
      display: block;
      color: $primaryColor;
      font-size: 22px;
      font-weight: 700;
      text-align: center;
    }
    &_school{
      display: block;
      color: $secondColor;
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
      margin-top: 20px;
      &_from{
        &_icon{

        }
        &_text{

        }
      }
      &_to{
        &_icon{

        }
        &_text{

        }
      }
    }
    &_description{
      text-align: justify;
    }
  }

  .formations_bubbles{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 25px 0;
    /*position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);*/
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
