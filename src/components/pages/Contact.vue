<template>
  <div id="page-contact" class="contact">
    <span class="h3">Me contacter</span>
    <form class="contact_form">
      <div class="contact_form_line">
        <input type="text" name="firstname" placeholder="Prénom">
        <input type="text" name="lastname" placeholder="Nom">
      </div>
      <div class="contact_form_line">
        <input type="email" name="mail" placeholder="Mail">
      </div>
      <div class="contact_form_line">
        <textarea name="" id="" cols="30" rows="10" placeholder="Ecrire un message ..."></textarea>
      </div>
      <div>
        <input type="submit" value="Envoyer" class="contact_form_submit">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'PageContact'
  }
</script>

<style lang="scss">
  .contact_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin: 35px auto 0 auto;
    width: 100%;
    &_submit{
      cursor: pointer;
      display: block;
      width: 200px;
      padding: 8px;
      margin-top: 20px;
      border: none;
      border-radius: 3px;
    }
    & input[type=text], input[type=email], & textarea{
      display: block;
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 3px;
    }
    &_line{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 10px 0;
      &:first-child{
        & input{
          width: calc(50% - 5px);
        }
      }
    }
  }
</style>
