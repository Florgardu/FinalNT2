<template>

  <section class="src-components-choice">
    <h1>Respuestas Choice</h1>

      <div class="table-responsive">
          <table class="table">
            <tr class="bg-success text-white">
              <th>Numero de Pregunta</th>
              <th>Respuesta</th>
            </tr>
            <tr
              class="bg-info text-white"
              v-for="(dato, index) in respuestasChoice"
              :key="index"
            >
              <td>{{ dato.pregunta }}</td>
              <td>{{ dato.respuestas.join() }}</td>
            </tr>
            </table>
        </div >
 </section>
</template>

<script>

  export default  {
    name: 'src-components-choice',
    mixins : [],
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestasChoice:[
              { pregunta: 1, respuestas: ['b'] },
              { pregunta: 2, respuestas: ['c'] },   
              { pregunta: 3, respuestas: ['b'] },  
              { pregunta: 4, respuestas: ['d'] },  
             { pregunta: 5, respuestas: ['d'] }, 
 
        ],
      }
    },
    methods: {


    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-choice {

  }
</style>
