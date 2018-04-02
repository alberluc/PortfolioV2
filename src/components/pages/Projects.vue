<template>
  <div id="page-projects">
      <div class="projects_container">
        <div class="projects_container_content"></div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'PageProjects'
  }
</script>

<style lang="scss">
  #page-projects{
    height: 100%;
  }

  .projects_container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 40px;
    &_content {
      display: flex;
      height: 100%;
      padding: 40px;
      overflow: scroll;
      overflow-x: hidden;
      box-shadow: 0 0 14px 0px #ababab;
      background-color: #f3f3f3;
      border: 10px solid #ff3333;
      border-image: repeating-linear-gradient(45deg, #ff3333, #ff3333 4%, $primaryColor 1%, $primaryColor 8%) 10;
      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
    }
  }

  @include phone {
    $iconNavigationWidth: 55px;
    $linkNavigationWidth: 230px;
    $headerHeight: 150px;
    .projects_container{
      padding: 10px;
      &_content{
        padding: 10px !important;
      }
    }
  }
</style>
