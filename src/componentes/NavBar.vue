<template lang="html">
  
    <section class="src-componentes-nav-bar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <a class="navbar-brand" href="#">Inicio</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <router-link to="/formulario">
              <li class="nav-item">
                <a class="nav-link" href="#">Formulario</a>
              </li>
            </router-link>

            <router-link to="/usuarios">
              <li class="nav-item">
                <a class="nav-link" href="#">Usuarios</a>
              </li>
            </router-link>

          </ul>
        </div>

      </nav>
    </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style lang="css">
  .src-componentes-nav-bar {
    color: #fff;
  }
  a:hover{
    background: rgb(72, 96, 146);
  }
</style>
