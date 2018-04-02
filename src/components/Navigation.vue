<template>
  <div id="navigation">
    <ul class="navigation_list">
      <li class="navigation_item" v-for="item in items">
        <router-link
          class="navigation_item_link"
          :to="{ path: item.route.path }">
          <span class="navigation_item_label">{{ item.label }}</span>
          <span class="navigation_item_icon" v-html="item.icon"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Menu } from '@/config/menu'

  export default {
    name: 'Navigation',
    data: () => ({
      items: Menu
    })
  }
</script>

<style lang="scss">
  $iconNavigationWidth: 80px;

  .navigation_list{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
  .navigation_item{
    font-size: 24px;
    font-weight: 700;
    transition: color 200ms, border-color 200ms;
    &:hover, .router-link-exact-active{
      color: #fff;
    }
    &_link{
      display: flex;
      justify-content: space-between;
      border-left: solid 5px transparent;
      transition: border-color 200ms;
    }
    &_label{
      width: calc(100% - #{$iconNavigationWidth});
      text-align: right;
    }
    &_icon{
      display: flex;
      justify-content: center;
      align-items: center;
      width: $iconNavigationWidth;
    }
  }
  .router-link-exact-active{
    border-left: solid 5px #fff;
  }

  @include phone {
    $iconNavigationWidth: 55px;
    $linkNavigationWidth: 230px;
    .navigation_item{
      &_label{
        width: calc(100% - #{$iconNavigationWidth});
      }
      &_icon{
        width: $iconNavigationWidth;
      }
    }
  }
</style>
