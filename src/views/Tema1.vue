<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Huesped

    figure.mb-5
      img(src='@/assets/curso/tema1/img01.png')     

    .row.mb-5
      .col-lg-2
      .col-lg-8
        .cajon.color-secundario.cajon1.p-5
          p.m-3.mx-5 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
      .col-lg-2 

    .row.mb-5
      .col-lg-5
        figures
          img(src='@/assets/curso/tema1/img02.svg')   
      .col-lg-1       
      .col-lg-6
        p.mb-5 Es importante comprender que cada huésped es único y que su motivación a viajar es específica; por lo que la disposición y actitud del recepcionista es indispensable para dar el servicio de calidad que se está buscando dentro del establecimiento y por el cual cada cliente paga.
        p.mb Los huéspedes se pueden clasificar de acuerdo con unas características, las que definen la forma como los atendemos y ayudan a segmentarlos de cara a las estrategias de servicio y de mejoramiento de ingresos.

    p.mb-5 Se estudiarán primero los tipos y características de los huéspedes según el colectivo al que pertenecen.

    div.mb-5
      strong Componente creativo de Natalia

    p.mb-5 También es posible clasificar a los huéspedes según su frecuencia de viaje; este aspecto adicional determina, junto con el tipo de viajero, las características de los huéspedes, y aspectos como la sensibilidad al precio y los servicios esperados. A continuación, se conocerán cada uno de ellos.

    SlyderB.slider1.mb-5(:datos="datosSlyder")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Cliente walk-in',
        texto:
          'Es el cliente que llega al hotel sin previa reserva y no es cliente permanente del hotel, su estadía generalmente es muy corta y se da manera fortuita. <br>Con estos huéspedes se debe tener especial cuidado por motivos de seguridad, ya que en principio desconocemos su procedencia. Suelen tener consumos en el hotel, por lo que garantizar adecuadamente el pago (pago adelantado + una garantía) es una medida pertinente. <br>Siempre será importante identificar su motivación con el fin de ofrecer el servicio que busca.',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        titulo: 'Cliente frecuente',
        texto:
          'Este tipo de cliente usa de manera asidua el hotel, es conocido por el personal que allí labora, hace del hotel su segunda casa. Por lo general son clientes de tipo corporativo o parte de una tripulación que visitan periódicamente el destino. Debido al continuo uso del establecimiento hotelero sus requerimientos pueden ser repetitivos, conoce muy bien el lugar y los empleados del hotel.  Su familiaridad con el ambiente lo lleva a sentirse seguro y tranquilo. Con este tipo de huéspedes es fácil caer en la rutina, por lo que conviene siempre tener una actitud abierta frente a ellos haciéndoles sentir que están en casa, pero no que son uno más de la casa. ',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        titulo: 'Cliente esporádico',
        texto:
          'Este tipo de cliente usa el hotel de acuerdo con la circunstancia puntual que está viviendo. <br>Muy probablemente ha visitado el hotel varias veces, pero no lo hace con una frecuencia tal alta. <br>Es un tipo de huéspedes al que hay que comunicarles las situaciones nuevas del hotel sin hacerles sentir que son extraños.<br>Con estos clientes siempre es importante recurrir a los históricos del PMS y corroborar esa información al momento del registro.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        titulo: 'Clientes larga estadía',
        texto:
          'Estos clientes son por lo general corporativos o personas que por facilidad deciden estar largas temporadas en un hotel.<br>De acuerdo con las políticas del hotel, puede ser considerada larga estadía el utilizar el hotel por más de 10 noches continuas. Estos clientes identifican el hotel como su segunda casa, se sienten confiados porque conocen muy bien el establecimiento, saben que pueden encontrar todo lo que necesitan durante su estadía. Sus tarifas de alojamiento han sido negociadas previamente y pueden acordar servicios complementarios incluidos o con tarifas preferenciales, ejemplo: alimentación, llamadas telefónicas, servicio de lavandería, entre otras.<br>Ellos requieren habitaciones espaciosas y empiezan a tener un comportamiento similar al del huésped frecuente.',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
      {
        titulo: 'Huésped permanente',
        texto:
          'En una escala superior en términos de frecuencia, están los huéspedes permanentes. <br>Estos son personas que por su labor o por alguna circunstancia especifica escogen vivir en el hotel. Aquí las estadías superar los 30 días continuos, alcanzando varios meses o hasta años. <br>Debido a la extensión de estas estadías, estos clientes tienen tratos preferentes en términos de tarifa y desean ser tratados como el huésped predilecto del hotel, no en vano el hotel es su hogar.',
        imagen: require('@/assets/curso/tema1/img07.png'),
      },
    ],
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
