<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Huésped.

    figure.mb-5
      img(src='@/assets/curso/tema1/img01.png')     

    .row.mb-5
      .col-lg-2
      .col-lg-8
        .cajon.color-secundario.cajon1.p-5
          p.m-3.mx-5 Es el cliente que se aloja en un establecimiento de servicio de alojamiento (hotel, apartahotel, posada, etc.); la palabra viene del latín <b><i>hospes</i></b>
      .col-lg-2 

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img02.svg')   
      .col-lg-1       
      .col-lg-6
        p.mb-5 Es importante comprender que cada huésped es único y que su motivación a viajar es específica; por lo que la disposición y actitud del recepcionista es indispensable para dar el servicio de calidad que se está buscando dentro del establecimiento y por el cual cada cliente paga.
        p.mb Los huéspedes se pueden clasificar de acuerdo con unas características, las que definen la forma como los atendemos y ayudan a segmentarlos de cara a las estrategias de servicio y de mejoramiento de ingresos.

    p.mb-5 Se estudiarán primero los tipos y características de los huéspedes según el colectivo al que pertenecen.

    div.mb-5.box
      figure
        img(src='@/assets/curso/tema1/img08.svg')  

      figure.img-hover-zoom--brightness.imgc1(@mouseover="mostrarDiv(1);")
        a
          img(src='@/assets/curso/tema1/img10.png')  
      
      figure.img-hover-zoom--brightness.imgc2(@mouseover="mostrarDiv(2);")
        a
          img(src='@/assets/curso/tema1/img11.png') 

      figure.img-hover-zoom--brightness.imgc3(@mouseover="mostrarDiv(3);")
        a
          img(src='@/assets/curso/tema1/img12.png') 

      figure.img-hover-zoom--brightness.imgc4(@mouseover="mostrarDiv(4);")
        a
          img(src='@/assets/curso/tema1/img13.png') 

      figure.img-hover-zoom--brightness.imgc5(@mouseover="mostrarDiv(5);")
        a
          img(src='@/assets/curso/tema1/img14.png')

      figure.img-hover-zoom--brightness.imgc6(@mouseover="mostrarDiv(6);")
        a
          img(src='@/assets/curso/tema1/img15.png')

      figure.img-hover-zoom--brightness.imgc7(@mouseover="mostrarDiv(7);")
        a
          img(src='@/assets/curso/tema1/img16.png')

      figure.img-hover-zoom--brightness.imgc8(@mouseover="mostrarDiv(8);")
        a
          img(src='@/assets/curso/tema1/img17.png')

      div.p-3.contenido1(id="myDiv1" ref="myDiv1" style="display:none")
        p.contenido2(v-html="contenidocapa1")
      


    p.mb-5 También es posible clasificar a los huéspedes según su frecuencia de viaje; este aspecto adicional determina, junto con el tipo de viajero, las características de los huéspedes, y aspectos como la sensibilidad al precio y los servicios esperados. A continuación, se conocerán cada uno de ellos.

    SlyderB.slider1.mb-5(:datos="datosSlyder")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    contenidocapa1:
      'Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus',
    datosSlyder: [
      {
        titulo: 'Cliente walk-in',
        texto:
          'Es el cliente que llega al hotel sin previa reserva y no es cliente permanente del hotel, su estadía generalmente es muy corta y se da de manera fortuita. <br>Con estos huéspedes se debe tener especial cuidado por motivos de seguridad, ya que en principio desconocemos su procedencia. Suelen tener consumos en el hotel, por lo que garantizar adecuadamente el pago (pago adelantado + una garantía) es una medida pertinente. <br>Siempre será importante identificar su motivación con el fin de ofrecer el servicio que busca.',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        titulo: 'Cliente frecuente',
        texto:
          'Este tipo de cliente usa de manera asidua el hotel, es conocido por el personal que allí labora, hace del hotel su segunda casa.<br>Por lo general son clientes de tipo corporativo o parte de una tripulación que visitan periódicamente el destino.<br>Debido al continuo uso del establecimiento hotelero sus requerimientos pueden ser repetitivos, conoce muy bien el lugar y los empleados del hotel.  Su familiaridad con el ambiente lo lleva a sentirse seguro y tranquilo.<br>Con este tipo de huéspedes es fácil caer en la rutina, por lo que conviene siempre tener una actitud abierta frente a ellos haciéndoles sentir que están en casa, pero no que son uno más de la casa. ',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        titulo: 'Cliente esporádico',
        texto:
          'Este tipo de cliente usa el hotel de acuerdo con la circunstancia puntual que está viviendo. <br>Muy probablemente ha visitado el hotel varias veces, pero no lo hace con una frecuencia tan alta. <br>Es un tipo de huéspedes al que hay que comunicarles las situaciones nuevas del hotel sin hacerles sentir que son extraños.<br>Con estos clientes siempre es importante recurrir a los históricos del PMS y corroborar esa información al momento del registro.',
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
          'En una escala superior en términos de frecuencia, están los huéspedes permanentes. <br>Estos son personas que por su labor o por alguna circunstancia específica escogen vivir en el hotel. Aquí las estadías superan los 30 días continuos, alcanzando varios meses o hasta años. <br>Debido a la extensión de estas estadías, estos clientes tienen tratos preferentes en términos de tarifa y desean ser tratados como el huésped predilecto del hotel, no en vano el hotel es su hogar.',
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
  methods: {
    mostrarDiv(p) {
      this.$refs.myDiv1.style.display = 'inline'
      if (p == 1) {
        this.$refs.myDiv1.style.left = '0%'
        this.$refs.myDiv1.style.top = '0%'
        this.contenidocapa1 =
          'Los adultos mayores que por su disponibilidad de tiempo y recursos viajan generalmente con fines de esparcimiento. Se les conocen como la generación Boomer.<br>Por lo general, disponen de presupuestos más altos a la hora de viajar y suelen viajar en pareja o con amigos. Sus motivaciones de viaje los lleva a disfrutar las áreas del hotel en forma tranquila, requieren mayores explicaciones para el uso de las mismas y sus necesidades como viajeros generalmente se enfocan en salir de la rutina, por esto contar con un excelente servicio les reconforta.'
      } else if (p == 2) {
        this.$refs.myDiv1.style.left = '65.6%'
        this.$refs.myDiv1.style.top = '0%'
        this.contenidocapa1 =
          'Este tipo de viajeros se da ahora con mayor frecuencia y los hoteles afrontan la solicitud del servicio de alojamiento para las familias en temporadas de vacaciones o fines de semana y/o con festivos. En este grupo la disponibilidad de dinero es más ajustada, por lo que son abiertos a escuchar ofertas de todo incluido y a las acomodaciones múltiples.<br>En las familias con niños generalmente los padres buscan tiempos de esparcimiento con sus hijos, sus solicitudes en el hotel varían de acuerdo con la edad de sus hijos, temas como la necesidad de contar con cuna, coche o silla de comedor especial entre otros, se hace presente.<br>En el momento de realizar su registro en el hotel, el recepcionista debe contar con la habilidad para identificar las necesidades y poder suplirlas con el equipo de trabajo.'
      } else if (p == 3) {
        this.$refs.myDiv1.style.left = '35.5%'
        this.$refs.myDiv1.style.top = '24%'
        this.contenidocapa1 =
          'Son personas que trabajan con el estado y viajan por trabajo, pero tienen un matiz adicional y es que, por lo general y en virtud del cargo que desempeñan o del rango que tengan, su tratamiento puede requerir un protocolo específico, principalmente por su seguridad. Por lo tanto, el hotel determina su propio procedimiento para el manejo de ellos.<br>Temas como el lugar en donde realizan su registro, habitaciones para su personal de seguridad ubicadas de manera estratégica y forma de atender sus requerimientos deben ser considerados.'
      } else if (p == 4) {
        this.$refs.myDiv1.style.left = '35.5%'
        this.$refs.myDiv1.style.top = '0%'
        this.contenidocapa1 =
          'Esta tipología de huéspedes son una congregación de personas que viajan en las mismas fechas y con motivaciones de viaje similares (una convención, un tour, etc.). Poseen ciertos tratamientos y servicios específicos comunes a todos ellos.<br>Cada hotel establece el número base para determinar llamar “grupo” teniendo en cuenta el número de personas y/o de habitaciones que van a alojar con un mismo código de reserva. Por lo general se puede decir que se considera grupo un número superior a 10 personas o 10 habitaciones en acomodaciones según sus necesidades.<br>Para su atención también se debe establecer un protocolo, que contemple espacio especial para su recibimiento, control de equipajes, áreas especiales para el consumo de alimentos y si el motivo de viaje es empresarial, van a requerir de salones adecuados para realizar sus reuniones: se suelen otorgar descuentos en la tarifa y una serie de servicios adicionales.'
      } else if (p == 5) {
        this.$refs.myDiv1.style.left = '65.6%'
        this.$refs.myDiv1.style.top = '30%'
        this.contenidocapa1 =
          'Estos son grupos de estudiantes, que deciden tomar un año sabático para conocer el mundo. Viajan con presupuestos más cuidados, pero siempre aprecian una buena conexión de internet y facilidades como lavandería, una ubicación céntrica y recomendaciones en seguridad y transporte.<br>Es una tipología distinta al “mochilero”, ya que, aunque limitados, buscan espacios de alojamiento individuales, esperan un lugar moderno y atractivo con todas las comodidades. Les encanta publicar su experiencia en redes sociales por lo que son fuente potencial de buena o mala publicidad.<br>Este grupo está cobrando gran relevancia, porque se dice que allí están los viajeros frecuentes del futuro.'
      } else if (p == 6) {
        this.$refs.myDiv1.style.left = '0%'
        this.$refs.myDiv1.style.top = '49%'
        this.contenidocapa1 =
          'Estos viajeros son los que tienen mayores expectativas y están dispuestos a pagar por la experiencia.<br>Por lo general el precio no es problema para ellos, son sofisticados, pero se fijan mucho en el valor de lo que obtienen (relación calidad precio).<br>Por lo general, sus viajes son muy bien planeados y con intervención de asesores especializados. La mayoría de las ocasiones son viajeros de edad adulta, entre los 40 y 60 años que viajan en pareja.'
      } else if (p == 7) {
        this.$refs.myDiv1.style.left = '31%'
        this.$refs.myDiv1.style.top = '27%'
        this.contenidocapa1 =
          'Este tipo de viajeros prestan mucha atención a la tarifa y se caracterizan porque para alojarse solo requieren lo necesario. Su motivación principal de viaje es insertarse en la cultura y compartir con su entorno.<br>Ellos siempre aprecian los consejos de seguridad y de actividades locales, además de una buena conectividad.<br>Por lo general, se hospedan en hostales, donde el ambiente compartido los enriquece culturalmente.'
      } else if (p == 8) {
        this.$refs.myDiv1.style.left = '31%'
        this.$refs.myDiv1.style.top = '24%'
        this.contenidocapa1 =
          'Son los clientes que viajan por motivos de trabajo o negocios, su permanencia generalmente no excede una semana. Suelen ser muy exigentes con el servicio y por lo general son menos sensibles al precio.<br>Generalmente manejan su tiempo con horarios preestablecidos, agenda de reuniones o visitas con sus clientes, por lo cual su disposición para realizar su registro en el momento de ingresar al hotel o para el pago de su cuenta en el momento de dejarlo, es limitado.<br>Usualmente la empresa para la cual trabaja es la responsable de coordinar todo lo concerniente a su estadía, entre ellos solicitar la reserva, negociar la tarifa, escoger tipo de habitación y pagar la cuenta.'
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>
