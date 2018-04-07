<template>
  <section id="page-contact" class="contact">
    <span class="notenabled">Pas encore disponible</span>
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
  </section>
</template>

<script>
  export default {
    name: 'PageContact'
  }
</script>

<style lang="scss">
  .notenabled{
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 7vw;
    font-weight: 700;
    white-space: pre;
    transform-origin: 50% 50%;
    transform: translate(-50%, -50%) rotate(15deg);
  }

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
      width: 120px;
      padding: 10px 8px;
      margin-top: 20px;
      border: none;
      border-radius: 3px;
      background-color: #fff;
      box-shadow: 0 0 9px 0px rgba(53, 53, 53, 0.11);
      font-family: 'Poppins', sans-serif;
      transition: background-color 300ms, color 300ms;
      &:hover{
        background-color: $primaryColor;
        color: white;
      }
    }
    & input[type=text], input[type=email], & textarea{
      display: block;
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 3px;
      box-shadow: 0 0 9px 0px rgba(53, 53, 53, 0.11);
      font-family: inherit;
    }
    &_line{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 10px 0;
      &:first-child{
        & input{
          width: calc(50% - 8px);
        }
      }
    }
  }

  @include phone {
    .contact_form{
      margin: 0 auto;
      &_submit{
        margin-top: 10px;
      }
    }
  }

</style>
