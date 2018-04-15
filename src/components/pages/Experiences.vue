<template>
  <section id="page-experiences">
    <span class="h3">Mes expériences</span>
    <ul class="experience_list">
      <li v-for="experience in experiences" class="experience_item">
        <section>
          <header class="experience_item_header">
            <span class="experience_item_company">
              <span class="experience_item_company_name">{{ experience.company.name }}
                <a :href="experience.company.link" class="experience_item_company_link" title="Voir le site web" target="_blank">
                  <i class="fas fa-link"></i>
                </a>
              </span>
            </span>
            <div class="experience_item_date">
              <div class="experience_item_from">
                <span class="experience_item_months experience_item_months_from">{{ experience.date.from.month }}</span>
                <span class="experience_item_years experience_item_years_from">{{ experience.date.from.year }}</span>
              </div>
              <span class="experience_item_date_separate">/</span>
              <div class="experience_item_to">
                <span class="experience_item_months experience_item_months_to">{{ experience.date.to.month }}</span>
                <span class="experience_item_years experience_item_years_to">{{ experience.date.to.year }}</span>
              </div>
            </div>
          </header>
          <main class="experience_item_main">
            <div>
              <span class="experience_item_name">{{ experience.name }}</span>
              <span> en </span>
              <span class="experience_item_type">{{ experience.type }}</span>
            </div>
            <span class="experience_item_description">{{ experience.decription }}</span>
            <ul class="experience_tag_list experience_item_plus">
              <li class="experience_tag_item experience_item_plus_item" v-for="plus in experience.plus">
                <span class="experience_item_plus_item_label">+ {{ plus }}</span>
              </li>
            </ul>
            <ul class="experience_tag_list experience_item_technos">
              <li class="experience_tag_item experience_item_technos_item" v-for="technos in experience.technos">
                <span class="experience_item_technos_item_label">{{ technos }}</span>
              </li>
            </ul>
          </main>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
  import {Experiences} from "../../data/experiences";
  export default {
    data () {
      return {
        experiences: Experiences
      }
    }
  }
</script>

<style lang="scss">
  .experience_list{
    margin-top: 40px;
  }

  .experience_item{
    position: relative;
    max-width: 750px;
    margin: 15px auto;
    &_header{
      display: flex;
      justify-content: space-between;
    }
    &_main{
      font-size: 22px;
    }
    &_company{
      display: block;
      position: relative;
      font-weight: 700;
      font-size: 50px;
      &_link{
        position: absolute;
        top: 15px;
        right: -20px;
        font-size: 14px;
      }
      &_name{
        position: relative;
      }
    }
    &_date{
      display: flex;
      position: relative;
      &_separate{
        font-size: 50px;
      }
    }
    &_years{
      font-size: 50px;
      font-weight: 700;
      &_from{

      }
      &_to{

      }
    }
    &_months{
      display: block;
      position: absolute;
      top: -10px;
      font-size: 18px;
      font-style: italic;
      color: $secondColor;
    }
  }

  .experience_tag{
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

  @include phone {
    .experience_list{
      margin-top: 10px;
    }

    .experience_item{
      &_header{
        display: block;
      }
      &_company{
        font-size: 36px;
      }
      &_date{
        margin-top: 10px;
        &_separate{
          font-size: 25px;
          margin: 0 5px;
        }
      }
      &_years {
        font-size: 25px;
        font-weight: 700;
      }
      &_months{
         display: block;
         position: absolute;
         top: -10px;
         font-style: italic;
          font-size: 12px;
         color: $secondColor;
       }
    }
  }
</style>
