<template>

  <section class="src-componentes-usuarios">
    <button class="btn btn-danger my-3 mr-3" @click="getUsuariosAxios">Pedir usuarios</button>
    <table class="table">
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Email</th>
      </tr>
      <tr v-for="(post, index) in posts" :key="index">
        <td>{{post.nombre}}</td>
        <td>{{post.edad}}</td>
        <td>{{post.email}}</td>
      </tr>
    </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://615657b1e039a0001725a9ae.mockapi.io/Usuarios',
        posts: [],
        peticion: false
      }
    },
    methods: {
      async getUsuariosAxios() {
        try {
          let respuesta = await this.axios(this.url)
          console.log('AXIOS', respuesta.data)
          this.posts = respuesta.data
        } catch(error) {
          console.error('Error AXIOS', error)
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-usuarios {
    color: 000;
  }
</style>
