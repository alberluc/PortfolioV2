<template>
  <section id="page-skills" class="skills">
    <div class="skills-top">
      <span class="h3">Mes compétences</span>
      <form class="skill_sort">
        <span>Trier par :</span>
        <select @change="sort" v-model="sortValue">
          <option value="level" selected>Niveau</option>
          <option value="name">Nom</option>
        </select>
      </form>
    </div>
    <ul class="skills_list">
      <li class="skills_item" v-for="(skill, index) in skills" :data-skill-id="index">
        <img class="skills_item_image" :src="'./static/img/icon/' + skill.image_url"/>
        <div class="skills_item-right">
          <span class="skills_item_name">{{ skill.name }}</span>
          <div class="skills_item_bar">
            <div class="skills_item_bar_level">
              <span class="skills_item_bar_level_value">{{ skill.value }}<span class="skills_item_bar_level_value_p">%</span></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import { Skills } from "@/data/skills";

  export default {
    name: 'PageSkills',
    data () {
      return {
        sortValue: 'level',
        skills: Skills
      }
    },
    methods: {
      pushLevels: function () {
        this.skills.forEach((skill, index) => {
          let el = this.$el.querySelector(`[data-skill-id='${index}'] .skills_item_bar_level`);
          el.style.width = '0%';
        });
        let delay = 0;
        this.skills.forEach((skill, index) => {
          setTimeout(() => {
            let el = this.$el.querySelector(`[data-skill-id='${index}'] .skills_item_bar_level`);
            el.style.width = skill.value + '%';
          }, delay);
          delay += 100;
        })
      },
      sort: function () {
        switch (this.sortValue) {
          case "level": {
              this.skills.sort((a,b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0));
              break;
          }
          case "name": {
              this.skills.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
              break;
          }
        }
        this.pushLevels();
      }
    },
    mounted () {
      setTimeout(this.pushLevels.bind(this), 200)
    }
  }
</script>

<style lang="scss">
  .skills{
    position: relative;
    &-top{
      display: flex;
      justify-content: space-between;
    }
  }

  .skills_list{
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
  }

  .skill_sort{
    margin: 30px;
  }

  .skills_item{
    display: flex;
    align-items: center;
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
    &-right{
      width: 100%;
      margin-right: 5px;
    }
    &_image{
      display: block;
      max-width: 50px;
      max-height: 50px;
      border-radius: 50%;
      margin-right: 5px;
    }
    &_name{
      color: $primaryColor;
    }
    &_bar{
      overflow: hidden;
      height: 20px;
      width: 100%;
      background-color: $primaryColor;
      border-radius: 3px;
      &_level{
        position: relative;
        height: 100%;
        width: 0;
        background-color: $secondColor;
        transition: width 400ms;
        &_value{
          display: block;
          position: absolute;
          right: 5px;
          top: 50%;
          font-size: 12px;
          font-weight: 700;
          transform: translateY(-50%);
          &_p{
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
