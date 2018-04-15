<template>
  <section id="page-projects">
    <transition-group
      class="projects_list"
      :name="direction"
      tag="ul">
      <li class="projects_item" v-for="(project, index) in projects" v-bind:key="index" v-if="project.active">
        <div class="control_arrow control_arrow-left" @click="show(currentIndex - 1)"></div>
        <section class="projects_item_section">
          <main class="projects_item_main">
            <div class="projects_item_main_section projects_item_main-left">
              <img class="projects_item_image" :src="'./static/img/projects/' + project.image_name"/>
            </div>
            <div class="projects_item_main_section projects_item_main-right">
              <div class="projects_item_main_head">
                <h1 class="projects_item_name">{{ project.name }}</h1>
                <h4 class="projects_item_at">{{ project.at }}</h4>
                <span class="projects_item_date">{{ project.date }}</span>
              </div>
              <p class="projects_item_description">{{ project.description }}</p>
              <ul class="projects_tag_list projects_item_technos">
                <li class="projects_tag_item projects_item_technos_item" v-for="technos in project.technos">
                  <span class="projects_item_technos_item_label">{{ technos }}</span>
                </li>
              </ul>
              <div class="projects_item_links">
                <a class="projects_item_links_item" target="_blank" v-if="project.code" :href="project.code.link"><span v-html="project.code.icon"></span> Voir le code sur {{ project.code.name }}</a>
                <a class="projects_item_links_item" target="_blank" v-if="project.link" :href="project.link"><i class="fas fa-link"></i> Voir le projet</a>
              </div>
            </div>
          </main>
        </section>
        <ul class="control_dot_list">
          <li class="control_dot_item" v-for="(project, index) in projects" @click="show(index)" :class="{ 'control_dot_item-active': project.active }"></li>
        </ul>
        <div class="control_arrow control_arrow-right" @click="show(currentIndex + 1)"></div>
      </li>
    </transition-group>
  </section>
</template>

<script>
  import { Projects } from "../../data/projects";

  export default {
    data () {
      return {
        onNegativeIndex: false,
        onPositiveIndex: false,
        direction: null,
        currentIndex: null,
        projects: Projects.map(item => ({ ...item, active: false }))
      }
    },
    methods: {
      show: function (index) {
        if (index < this.currentIndex) this.direction = "left";
        else if (index > this.currentIndex) this.direction = "right";
        if (index < 0) index = this.projects.length - 1;
        else if (index > this.projects.length - 1) index = 0;
        this.currentIndex = index;
        this.projects.forEach((item, i) => item.active = index === i);
      },
      beforeEnter: function (el) {

      },
      enter: function (el, done) {
        console.log(this.direction);
        done();
      },
      leave: function (el, done) {
        console.log(this.direction);
        done();
      }
    },
    created () {
      this.show(0);
    }
  }
</script>

<style lang="scss">

  $size_header: 75px;

  .left-enter-active, .left-leave-active,
  .right-enter-active, .right-leave-active{
    transition: transform 1s;
  }

  .left-enter, .right-leave-to{
    transform: translateX(calc(-100% - 80px));
    transform: translate3d(calc(-100% - 80px), 0, 0);
  }

  .right-enter, .left-leave-to{
    transform: translateX(calc(100% + 80px));
    transform: translate3d(calc(100% + 80px), 0, 0);
  }

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
    position: absolute;
    height: calc(100% - 80px);
    width: calc(100% - 80px);
    box-shadow: 0 0 14px 0px #ababab;
    background-color: #f3f3f3;
    border: 10px solid #ff3333;
    border-image: repeating-linear-gradient(45deg, #ff3333, #ff3333 4%, $primaryColor 1%, $primaryColor 8%) 10;
    &_header{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: $size_header;
    }
    &_section{
      position: absolute;
      top: 50%;
      left: 0;
      height: calc(100% - 100px);
      width: 100%;
      padding: 0 100px;
      overflow: scroll;
      overflow-x: hidden;
      transform: translateY(-50%);
    }
    &_main{
      display: flex;
      justify-content: space-around;
      padding-top: 30px;
      padding-bottom: 50px;
      height: 100%;
      &_section{
        position: relative;
        width: calc(50% - 40px);
      }
      &-left{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 3px;
      }
      &-right{
      }
      &_head{
        position: relative;
        margin-bottom: 60px;
        &:after{
          content: "";
          display: block;
          position: absolute;
          bottom: -30px;
          height: 5px;
          width: 150px;
          background-color: $primaryColor;
          border-radius: 5px;
        }
      }
    }
    &_description{
      text-align: justify;
    }
    &_image{
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 100%;
      max-height: 100%;
      border-radius: 3px;
      transform: translate(-50%, -50%);
    }
    &_at{
      display: block;
      font-style: italic;
      font-weight: 700;
      color: $secondColor;
    }
    &_date{
      display: block;
      font-size: 20px;
      line-height: 20px;
    }
    &_links{
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      &_item{
        display: block;
        font-size: 20px;
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

  .projects_tag{
    &_list {
      position: relative;
      display: flex;
      margin: 5px 0;
      padding-top: 5px;
      &:first-child:before {
        content: "";
        position: absolute;
        top: 0px;
        width: 30px;
        border: dashed 0.5px #353535;
        background-color: transparent;
      }
    }
    &_item{
      padding: 3px;
      margin: 0 3px;
      border-radius: 3px;
      background-color: $primaryColor;
      color: white;
      font-size: 20px;
    }
  }

  .control_arrow{
    cursor: pointer;
    position: absolute;
    z-index: 20;
    top: 50%;
    width: 35px;
    height: 35px;
    border: solid $secondColor 3px;
    border-radius: 50%;
    transition: border 300ms, background-color 300ms;
    &:hover{
      border: solid $primaryColor 3px;
      background-color: white;
      &:after{
        border-top: solid $primaryColor 3px;
        border-left: solid $primaryColor 3px;
      }
    }
    &:after{
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40%;
      height: 40%;
      border-top: solid $secondColor 3px;
      border-left: solid $secondColor 3px;
      border-radius: 3px;
      transition: border 500ms, transform 500ms;
    }
    &-left{
      left: 40px;
      transform: translateY(-50%);
      &:after{
        transform: translate(calc(-50% + 2px), -50%) rotate(-45deg);
      }
      &:hover{
        &:after{
          transform: translate(calc(-50% - 22px), -50%) rotate(-45deg);
        }
      }
    }
    &-right{
      right: 40px;
      transform: translateY(-50%);
      &:after{
        transform: translate(calc(-50% - 2px), -50%) rotate(135deg);
      }
      &:hover{
        &:after{
          transform: translate(calc(-50% + 22px), -50%) rotate(135deg);
        }
      }
    }
  }
  .control_dot{
    &_list{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 15px;
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
    .projects_list{
      padding: 10px !important;
    }
    .projects_item {
      height: calc(100% - 20px);
      width: calc(100% - 20px);
      &_section{
        padding: 10px;
      }
      &_image{
        max-width: 100%;
        margin: 10px auto 5px auto;
        height: auto;
      }
      &_links{
        justify-content: center;
        align-items: center;
        position: static;
      }
    }
    .control_arrow{
      top: 25px;
      &-left{
        left: 15px;
        &:hover{
          &:after{
            transform: translate(-50%, -50%) rotate(-45deg);
          }
        }
      }
      &-right{
        right: 15px;
        &:hover{
          &:after{
            transform: translate(-50%, -50%) rotate(135deg);
          }
        }
      }
    }
    .control_dot {
      &_list {
        bottom: 0;
        width: 100%;
        padding: 15px;
        justify-content: space-between;
      }
      &_item{
        margin: 0;
      }
    }
    .left-enter, .right-leave-to{
      transform: translateX(calc(-100% - 10px));
      transform: translate3d(calc(-100% - 10px), 0, 0);
    }

    .right-enter, .left-leave-to{
      transform: translateX(calc(100% + 10px));
      transform: translate3d(calc(100% + 10px), 0, 0);
    }
  }
</style>
