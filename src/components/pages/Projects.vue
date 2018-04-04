<template>
  <section id="page-projects">
    <ul class="projects_list">
      <li class="projects_item" v-for="project in projects" v-if="project.active">
        <div class="control_arrow control_arrow-left"></div>
        <div class="projects_item_links">
          <a class="projects_item_links_item" v-if="project.code" :href="project.code.link"><span v-html="project.code.icon"></span> Voir le code sur {{ project.code.name }}</a>
          <a class="projects_item_links_item" v-if="project.link" :href="project.link"><i class="fas fa-link"></i> Voir le projet</a>
        </div>
        <header class="projects_item_header">
          <h2 class="projects_item_name">{{ project.name }}</h2>
          <span class="projects_item_at">{{ project.at }}</span>
          <span class="projects_item_date">{{ project.date }}</span>
          <img class="projects_item_image" :src="'./static/img/projects/' + project.image_name"/>
        </header>
        <main class="projects_item_main">
          <p class="projects_item_description">{{ project.description }}</p>
        </main>
        <ul class="control_dot_list">
          <li class="control_dot_item" v-for="(project, index) in projects" @click="show(index)" :class="{ 'control_dot_item-active': project.active }"></li>
        </ul>
        <div class="control_arrow control_arrow-right"></div>
      </li>
    </ul>
  </section>
</template>

<script>
  import { Projects } from "../../data/projects";

  export default {
    data () {
      return {
        projects: Projects.map(item => ({ ...item, active: false }))
      }
    },
    methods: {
      show: function (index) {
        this.projects.forEach((item, i) => item.active = index === i);
      }
    },
    created () {
      this.show(0);
    }
  }
</script>

<style lang="scss">
  #page-projects{
    height: 100%;
  }

  .projects_list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 40px !important;
  }
  .projects_item {
    position: relative;
    height: 100%;
    padding: 60px 130px;
    overflow: scroll;
    overflow-x: hidden;
    box-shadow: 0 0 14px 0px #ababab;
    background-color: #f3f3f3;
    border: 10px solid #ff3333;
    border-image: repeating-linear-gradient(45deg, #ff3333, #ff3333 4%, $primaryColor 1%, $primaryColor 8%) 10;
    &_name{
      text-align: center;
    }
    &_image{
      display: block;
      height: 200px;
      margin: 25px auto 25px auto;
      border-radius: 3px;
    }
    &_at{
      display: block;
      font-style: italic;
      font-weight: 700;
      color: $secondColor;
      text-align: center;
    }
    &_date{
      display: block;
      text-align: center;
    }
    &_links{
      position: absolute;
      top: 70px;
      display: flex;
      flex-direction: column;
      &_item{
        display: block;
        font-style: italic;
        font-size: 16px;
        transition: color 300ms;
        &:hover{
          color: $secondColor;
        }
      }
    }
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }

  .control_arrow{
    cursor: pointer;
    position: absolute;
    z-index: 20;
    top: 50%;
    width: 30px;
    height: 30px;
    border: solid transparent 30px;
    border-bottom-color: $secondColor;
    border-radius: 3px;
    &-left{
      left: 40px;
      transform: translateY(-50%) rotate(-90deg);
    }
    &-right{
      right: 40px;
      transform: translateY(-50%) rotate(90deg);
    }
  }
  .control_dot{
    &_list{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
    }
    &_item{
      cursor: pointer;
      width: 10px;
      height: 10px;
      margin: 25px;
      background-color: $primaryColor;
      border-radius: 50%;
      &-active{
        width: 20px;
        height: 20px;
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
