<template>

ColorLetra: <input type="text" v-model="colorLetra" />
ColorFondo: <input type="text" v-model="colorFondo" />
TamañaLetra: <input type="text" v-model="tamanio" />

<div>
 Texto: <input type="text" v-bind:style="{ color: colorLetra, fontSize:tamanio, backgroundColor:colorFondo }" v-model="texto" />
</div>

<div v-if="contarPalabras > 0">
Cantidad de Palabras {{contarPalabras}}
</div>

</template>

<script>


import filtros from '../filtros.js'


export default {
  name: 'src-components-formulario',
  mixins: [filtros],
  props: [],
  mounted() {
  },

  created(){

  },
   components: {
  },
  data() {
    return {
    colorLetra:"",
    colorFondo:"",
    tamanio:"",
    texto:"",

    }
  },
  
  methods: {

      irAChoice(){
         this.$router.push('/respuestasMc');
      },


  },
  computed: {
contarPalabras(){
let palabras = 0;
if(this.texto){
palabras = this.texto.trim().split(/\s+/).length;
}
return palabras;
}
}
}

</script>

<style scoped lang="css">

  .jumbotron {
    background-color: rgb(25, 184, 144);
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  .btn {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  .btn:hover {
    color: white;
    background-color: rgb(216, 95, 15);
  }

</style>
