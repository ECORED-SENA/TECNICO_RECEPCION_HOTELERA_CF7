<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Recibo y entrega de turno

    p.mb-5 Generalmente el área de recepción cuenta con turnos rotativos de 8 horas laborales, los cuales son de: 
    
    .row.mb-5
      .col-lg-2
      .col-lg-2.px-0
        figure
          img(src='@/assets/curso/tema7/img01.svg') 
      .col-lg-1
      .col-lg-2.px-0
        figure
          img(src='@/assets/curso/tema7/img02.svg') 
      .col-lg-1
      .col-lg-2.px-0
        figure
          img(src='@/assets/curso/tema7/img03.svg') 
      .col-lg-2

    .row
      .col-lg-6
        .cajon.color-secundario.cajon1.p-5
          p.mb-4 Al iniciar el turno, el recepcionista debe informarse de las novedades ocurridas en el turno anterior, y utilizar los reportes que ya se han mencionado con el fin de planificar el trabajo en su jornada laboral. Además, debe verificar que cuente con los elementos de trabajo y que todo se encuentre en orden. 
      .col-lg-6
        div
          p.mb-4 Es deber del recepcionista no dejar actividades pendientes para el siguiente turno, porque son su responsabilidad. Al finalizar su turno de trabajo debe dejar un reporte de novedades que considere importantes y que deben ser conocidas por el siguiente turno, así como de los pendientes que por cualquier razón no pudieron ser solucionados dentro del turno.
          p Todo se debe dejar reportado en el libro de novedades el cual llevará la firma de quien entrega turno y quien lo recibe. 
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
