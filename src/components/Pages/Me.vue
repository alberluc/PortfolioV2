<template>
  <div id="page-me">
    <img class="me_picture" src="../../assets/img/me.png">
    <span class="h3">Moi, tout simplement !</span>
    <p>Je suis né le 16 juin 1997 dans une petite ville de Savoie qui s'appelle Saint-Jean de Maurienne. J'ai grandi à Saint-Michel de Maurienne jusqu'à mes 18 ans.</p>
    <p>J'ai passé un bac STI2D (Sciences et technologies de l'industrie et du développement durable) option SIN (Système informatique et numérique) à Saint-Jean de Maurienne au lycée Paul Heroult. Je l'ai obtenu avec mention.</p>
    <p>Par la suite, je me suis dirigé vers un DUT Informatique (Diplome universitaire technologique) dans la belle ville d'Annecy. Je détiens le permis B.</p>
  </div>
</template>

<script>
  export default {
    name: 'PageMe'
  }
</script>

<style lang="scss">
  .me{
    &_picture{
      display: block;
      margin: 10px auto 60px auto;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      box-shadow: 0px 0px 20px 3px rgba(43, 43, 43, 0.4);
     }
  }
</style>
