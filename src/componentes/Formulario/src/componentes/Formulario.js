
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInitialData(),
      formState: {},
      nombreMinLength: 3,
      nombreMaxLength: 14,
      edadMin: 1,
      edadMax: 120,
      url: 'https://615657b1e039a0001725a9ae.mockapi.io/Usuarios'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData() {
      return {
        nombre: '',
        edad: null,
        email: ''
      }
    },  
    async enviarDatosAlServidor(datos) {
      let respuesta = await this.axios.post(this.url, datos, {'content-type':'application/json'})
      let datosRecibidos = respuesta.data
      console.log("Datos recibidos", datosRecibidos)
    },
    enviar() {
      let datos = {...this.formData}
      console.log(datos)
      this.enviarDatosAlServidor(datos)

      this.formData = this.getInitialData()
      this.formData._reset()
    },
  }
}


