<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Normativa

    p.mb-4 La industria hotelera cuenta con un conjunto de normas que regulan o rigen la actividad del servicio de alojamiento. Es importante conocerlas y aplicarlas con el fin de prestar un servicio eficiente y evitar situaciones que pueden llevar a generar problemas a los establecimientos.
    
    .row
      .col-lg-7.d-flex.flex-column
        .cajon.color-secundario.cajon2.d-flex.align-items-center.p-5.mb-5(style="height:100%")
          p.mb-4 Para el procedimiento de registro (check-in) se debe considerar la Norma Técnica Sectorial NTSH003, además de poner en práctica el conocimiento adquirido en el módulo anterior. Adicionalmente, se sugiere apropiar las normas que se estudiarán a continuación.
      .col-lg-5
        figure.px-5.mb-5
          img(src='@/assets/curso/tema4/img01.svg') 

    p Además, en el material complementario se encuentra el enlace para ampliar la información sobre la Norma Técnica Sectorial NTSH003.

    Separador

    #t_4_1.titulo-segundo
      h2 4.1 Normativa de prevención de explotación sexual comercial de niños, niñas y adolescentes

    p.mb-5 El <b>Manual de Buenas Prácticas para la Prevención de la ESCNNA en Viajes y Turismo, (MinComercio, s.f.)</b> dirigido a los prestadores de servicios turísticos es bastante específico en este tema.
    
    .row.mb-5
      .col-lg-1
      .col-lg-10
        .bloque-texto-d.color-secundario.bloque2.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left.d-inline
            h3.inline.text-regular.d-inline Según la Organización Mundial del Turismo (OMT) cada año se producen más de 600 millones de viajes turísticos internacionales. Un 20% de estos viajes buscan sexo en sus desplazamientos y un 30% de ellos confiesa tendencias pedófilas, esto supone más de 36 millones de personas que viajan por el mundo buscando sexo con niñas, niños y adolescentes.
            
          .bloque-texto-d__autor 
            span <b>(MinComercio, s.f., p. 18).</b>    
            i.fas.fa-quote-right    
      .col-lg-1

    p.mb-5 Se invita a descargar y leer el Manual de Buenas Prácticas para la Prevención de la ESCNNA en Viajes y Turismo.

    .row.mb-5
      .col-lg-3
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo3_CF07_ESCNNA.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Manual de Buenas Prácticas para la Prevención de la ESCNNA en Viajes y Turismo.
      .col-lg-3

    p Es deber del recepcionista conocer la normativa y, en caso de identificar situaciones específicas, <b>debe avisar de manera oportuna al departamento de seguridad del hotel, o comunicarse con la línea de denuncia nacional o con el ICBF.</b>

    Separador

    #t_4_2.titulo-segundo
      h2 4.2 Normativa aplicable para nacionales y extranjeros 

    p.mb-5 Solicitar los documentos de identidad tanto de adultos como menores de edad es requisito indispensable, y con los menores de edad se debe verificar el grado de parentesco con la persona adulta.

    .row
      .col-lg-6
        .bloque-texto-d.color-secundario.bloque2.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left.d-inline
            h3.inline.text-regular.d-inline En caso de no haber parentesco alguno, solicite el documento de autorización de los padres autenticado, en el cual se autorice o se informe que el menor de edad se aloja en compañía de otra persona mayor de 18 años con el conocimiento de sus tutores. Si el adulto indica estar casado con el menor de edad, solicite soporte del contrato de matrimonio que compruebe el vínculo. Anexe copia de la identificación y de los documentos presentados que evidencien la verificación que realizó en el protocolo de registro.
            
          .bloque-texto-d__autor 
            span <b> (MinComercio, s.f., p. 29).</b>    
            i.fas.fa-quote-right    
      .col-lg-6
        figure
          img(src='@/assets/curso/tema4/img02.png') 

    Separador

    #t_4_3.titulo-segundo
      h2 4.3 Documentos de identificación legalmente aceptados

    p.mb-5 El documento de identidad es un documento público que contiene datos de identificación personal, y es emitido por una autoridad competente para permitir la identificación personal de los ciudadanos.

    .row.mb-5
      .col-lg-1        
      .col-lg-10
        .cajon.color-secundario.cajon2.p-5
          div.m-3
            p.mb-4 En Colombia se identifica de la siguiente manera:
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Registro civil de nacimiento.
              li 
                i.fas.fa-atom
                span <b>Tarjeta de identidad</b>: usada para fines de identificación, la cual puede ser tramitada para niños y niñas mayores de 7 años.
              li 
                i.fas.fa-atom
                span <b>Cédula de ciudadanía</b>: una vez cumplidos los 18 años, es el único documento de identificación válido para todos los actos civiles, políticos, administrativos y judiciales según la Ley 39 de 1961.
              li 
                i.fas.fa-atom
                span <b>Cédula de extranjería</b>: para extranjeros que residen en Colombia expedida por Migración Colombia, con los mismos efectos de la cédula de ciudadanía excepto al derecho a votar.

      .col-lg-1       

</template>

<script>
export default {
  name: 'Tema4',
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
