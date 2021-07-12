<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Reportes

    p.mb-5 Existe una serie de reportes que se deben tener presentes en la recepción. Estos son:

    .row.mb-5
      .col-lg-1        
      .col-lg-10
        .cajon.color-secundario.cajon2.p-5
          p.mb-4 Otras formas impresas para uso en la recepción son:
          ol.lista-ol.lista-ol--separador
            li.d-block
              strong Lista de huéspedes
              p Este listado se puede organizar por número de habitación o alfabéticamente, se utiliza para identificar de manera más ágil en qué habitación se encuentra registrada la persona o quienes están en determinada habitación.
            li.d-block
              strong Lista de reservas
            li.d-block
              strong Reporte de ocupación
            li.d-block
              strong Lista de llegadas y salidas pronosticadas
            li.d-block
              strong Lista de grupos y cuentas maestras
            li.d-block
              strong No shows
            li.d-block
              strong Reporte de ama de llaves
              p Contiene la información de cada una de las habitaciones que hay en el hotel, se recibe tres veces al día y es usado para comparar el reporte de ocupación, ya que debe coincidir, en caso de encontrar diferencias se debe reportar para hacer una nueva revisión del estado de la habitación. En los periodos de alta ocupación puede dejar identificar que hay habitaciones desocupadas y que por algún motivo no pasaron por caja, este reporte también indica si la habitación está ocupada y por cuántas personas, datos que se utilizan para verificar que los registros iniciales están acordes con la realidad en el uso de la habitación.
             

    
</template>

<script>
export default {
  name: 'Tema6',
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
