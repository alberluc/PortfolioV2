<template>
  <div id="app" class="app" :class="{ 'app_navigation-active': navigationActive }">
    <div class="app-left" v-on:mouseenter="navigationHover" v-on:mouseleave="navigationHover">
      <navigation class="navigation"></navigation>
    </div>
    <div class="app-right">
      <header class="header">
        <div class="header_links">
          <ul class="header_links_list">
            <li class="header_links_item">
              <a href="" class="header_links_item_link" data-tooltip="Github"><i class="fab fa-github"></i></a>
            </li>
            <li class="header_links_item">
              <a href="" class="header_links_item_link" data-tooltip="Codepen"><i class="fab fa-codepen"></i></a>
            </li>
            <li class="header_links_item">
              <a href="" class="header_links_item_link" data-tooltip="Linkedin"><i class="fab fa-linkedin"></i></a>
            </li>
            <li class="header_links_item">
              <a href="" class="header_links_item_link" data-tooltip="Mon CV"><i class="fas fa-address-card"></i></a>
            </li>
          </ul>
        </div>
        <div class="header_titles">
          <LetterRandomAnimation :word="'Lucien Albert'"></LetterRandomAnimation>
          <h3 class="header_titles-sub">Développeur web</h3>
          <h1 style="display: none">Lucien Albert</h1>
        </div>
      </header>
      <main class="main">
        <div class="main_content">
          <router-view/>
        </div>
      </main>
      <footer class="footer"></footer>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import LetterRandomAnimation from '@/components/animations/LetterRandomAnimation'

  export default {
    name: 'App',
    data () {
      return {
        navigationActive: false
      }
    },
    methods: {
      navigationHover: function () {
        this.navigationActive = !this.navigationActive;
      }
    },
    components: {
      Navigation,
      LetterRandomAnimation
    }
  }
</script>

<style lang="scss">
  $transitionNavigationDuration: 300ms;
  $iconNavigationWidth: 80px;
  $linkNavigationWidth: 250px;
  $headerHeight: 200px;

  .app{
    height: 100%;
    transition: transform $transitionNavigationDuration;
    &-right{
      width: 100%;
      height: 100%;
      padding-left: $iconNavigationWidth;
    }
    &-left{
      position: absolute;
      left: calc(-#{$linkNavigationWidth} + #{$iconNavigationWidth});
      height: 100%;
      width: $linkNavigationWidth;
    }
    &_shutter{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color $transitionNavigationDuration;
    }
    &_navigation-active{
      transform: translateX(calc(#{$linkNavigationWidth} - #{$iconNavigationWidth}));
    }
  }
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    background-color: #353535;
    height: $headerHeight;
    &_links{
      position: absolute;
      right: 10px;
      top: 10px;
      color: white;
      &_list{
        display: flex;
      }
      &_item{
        font-size: 1.8em;
        &_link{
          position: relative;
          padding: 0 5px;
          transition: color 300ms;
          &:hover{
            color: #ff3333;
            &:after, &:before{
              display: block;
            }
          }
          &:before{
            content: "";
            display: none;
            position: absolute;
            width: 5px;
            height: 5px;
            left: 50%;
            bottom: -9px;
            border-left: solid 1px white;
            border-top: solid 1px white;
            transform: translateX(-50%) rotate(45deg);
          }
          &:after{
            content: attr(data-tooltip);
            position: absolute;
            bottom: -10px;
            left: 50%;
            display: none;
            color: white;
            font-size: 16px;
            white-space: nowrap;
            transform: translate(-50%, 100%);
          }
        }
      }
    }
    &_titles{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-sub{
        position: relative;
        color: #fff;
        background-color: #353535;
        font-size: 32px;
        font-style: italic;
        font-weight: 500;
      }
    }
  }
  .navigation{
    height: 100%;
    background-color: #ff3333;
  }
  .main{
    height: calc(100% - #{$headerHeight});
    padding: 40px;
    &_content{
      height: 100%;
      padding: 40px;
      overflow: auto;
      box-shadow: 0 0 14px 0px #ababab;
      background-color: #f3f3f3;
      border: 10px solid #ff3333;
      border-image: repeating-linear-gradient( 45deg, #ff3333, #ff3333 4%, #353535 1%, #353535 8%) 10;
    }
  }
</style>
