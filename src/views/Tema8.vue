<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Bitácoras

    p.mb-5 El cuaderno o <b>bitácora</b> de trabajo es en donde se registra de manera cronológica, cualquier información que consideren que puede resultar útil para tener en cuenta dentro de la jornada laboral, entre otros se debe registrar:
    
    .row.mb-5
      .col-lg-4
      .col-lg-4
        .cajon.color-secundario.cajon1.p-5
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Paquetes por recoger.
            li 
              i.fas.fa-atom
              | Mensajes por entregar.
            li 
              i.fas.fa-atom
              | Llegadas de atenciones especiales.
            li 
              i.fas.fa-atom
              | Eventos por realizarse.
            li 
              i.fas.fa-atom
              | Memorandos por leer.
            li 
              i.fas.fa-atom
              | Habitaciones no shows.
            li 
              i.fas.fa-atom
              | Pendientes.

          strong Debe ser firmado por quien entrega el turno y quien lo recibe.
      .col-lg-4

    .row
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo4_CF07_8_Actividades_para_recibir_y_entregar_turno.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Ejemplo actividades para recibir y entregar turno
      .col-lg-6
</template>

<script>
export default {
  name: 'Tema8',
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
