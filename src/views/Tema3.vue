<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Registro de huéspedes (check-in)
    
    p.mb-5 Es el procedimiento de ingreso del huésped y aquí el recepcionista es quien recibe al cliente y procede a realizar el registro, solicitar o verificar la forma de pago, entregar la llave de la habitación y dar información relevante para la estadía del huésped.

    figure.mb-5
      img(src='@/assets/curso/tema3/img01.png')   

    .row.mb-5
      .col-lg-5
        h4 Una buena información, y una correcta gestión, facilitan el trabajo del personal, reduce errores y riesgos, principalmente en la prestación del servicio.
      .col-lg-7
        p En los establecimientos hoteleros se han implementado sistemas informáticos para hacer eficiente la gestión, organizando la información y ayudando en las actividades diarias. En el área de recepción se utilizan como base para el desarrollo de las funciones, unos reportes específicos. 

    p El establecimiento que no cuente con software PMS, debe utilizar una metodología manual organizada, lo cual asegurará encontrar la información que se requiere para atender de manera eficaz al huésped.

    Separador

    #t_3_1.titulo-segundo
      h2 3.1 Reserva

    .row.mb-5
      .col-1
      .col-lg-4.p-0.d-flex.align-items-center
        figure
          img(src='@/assets/curso/tema3/img02.png')   
      .col-lg-6.p-3.div_3_1.d-flex.align-items-center        
        div.p-3.div_3_1_2
          p.mb-4 Es toda acción mediante la cual una persona de manera directa o a través de un tercero (agente), realiza una petición para contratar unos servicios, principalmente, de alojamiento y en una fecha determinada. Esta reserva puede ser individual o de grupo.
          p Una de las primeras actividades a realizar es conocer las reservas del día con el fin de preparar todo lo concerniente al recibimiento del cliente. Usualmente, es el departamento de reservas quien prepara la información y la entrega a recepción.
      .col-1

    p.mb-5 Con la sistematización, se presenta la facilidad de obtener un reporte en cualquier momento del día, y contiene información como:
      
    .row.mb-5
      .col-lg-3
      .col-lg-6
        .row.div_3_1_2.px-5.py-4
          .col-lg-6
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Nombre del huésped.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Fecha de ingreso.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Fecha de salida.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Tipo de habitación.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Acomodación. 
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Número de personas.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Tarifa.
          .col-lg-6
            .col-lg-6
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Requerimientos especiales.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Preferencias.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Forma de pago.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Garantía.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Tipo de reserva.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Reservado por.
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Teléfono de contacto.
      .col-lg-3
    
    p.mb-5 Con esta información el recepcionista debe clasificar la reserva en subgrupos, de la siguiente manera (Villanueva, 2012):
    
    TabsA.color-acento-botones.tab1
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.tab1.p-4(titulo="Reservas con garantía")
        h4 Reservas con garantía
        p Son aquellas reservas que han recibido una cantidad de dinero (depósito), o un medio válido (tarjeta de crédito, carta de empresa, voucher de agencia), con el fin de garantizar la habitación. Generalmente es el valor de la primera noche de estadía o del total de la estadía de acuerdo con la política del hotel. En caso de que el huésped no llegue y no haya realizado el proceso de cancelación se le llama No Show. 
      
      .tarjeta.color-acento-botones--borde.tab1.p-4(titulo="Reservas sin garantía")
        h4 Reservas sin garantía
        p Son aquellas que no han sido garantizadas de ninguna manera. En tal caso el hotel no tiene obligación de guardarla después de una hora determinada (aproximadamente 6:00 p. m.) y en caso de que el huésped no llegue, esas habitaciones pueden ser asignadas a otros clientes. Se puede considerar que cuando se está en baja temporada o mientras exista disponibilidad estas reservas no se cancelan. El proceso de revisión y confirmación de estas reservas es especialmente importante en momentos de alta demanda y la información siempre debe ser dada al cliente en el momento de estar realizando la reserva con el fin de evitar posteriores inconvenientes.

      .tarjeta.color-acento-botones--borde.tab1.p-4(titulo="Reservas especiales")
        h4 Reservas especiales
        p Son aquellas en las cuales los huéspedes son personas importantes (VIP), clientes frecuentes, cortesías, grupos, ejecutivos de empresas hoteleras, etc.
        p Estas reservas solo se cancelan mediante la solicitud del gerente o autoridad superior dentro de la organización.
    
    Separador

    #t_3_2.titulo-segundo
      h2 3.2 Disponibilidad (Availability)

    p.mb-5 La disponibilidad de habitaciones es un control gráfico que se conoce con el nombre de Rack de ocupación, Room rack, Planning. En los sistemas PMS modernos este control es un gráfico digitalizado y muestra en colores, los estados de cada habitación, como se muestra a continuación.

    .row.mb-5
      .col-lg-1
      .col-lg-10.div_3_2.p-5
        figure
          p.BorTit <b>Figura 1.</b> Rack de ocupación
          img(src='@/assets/curso/tema3/img03.png')   
          figcaption Nota. Tomada de EzeeFrontDesk
      .col-lg-1

    p.mb-5 También se puede generar el “Reporte de estado de habitaciones”, el cual muestra la disponibilidad de habitaciones:

    .row.mb-5
      .col-lg-1
      .col-lg-10
        .div_3_2_2.p-3.mb-4
          p.m-0 <b>Habitaciones desocupadas / libres:</b> son aquellas habitaciones que no se encuentran reservadas y que pueden ser utilizadas para futuras reservas o pasajeros Walk-in.
        .div_3_2_2.p-3.mb-4
          p.m-0 <b>Habitaciones reservadas:</b> son habitaciones que se asignan a las reservas del día. De acuerdo con las solicitudes de los huéspedes pueden o no ser reasignadas, es decir, realizarse cambios en la asignación de las mismas. 
        .div_3_2_2.p-3.mb-4
          p.m-0 <b>Habitaciones bloqueadas:</b> son habitaciones que no pueden ser utilizadas para su uso por diferentes circunstancias, entre ellas el mantenimiento. Este procedimiento de bloqueo lo realiza el departamento de ama de llaves, por ser quienes conocen el estado real de las habitaciones.
        .div_3_2_2.p-3.mb-4
          p.m-0 <b>Habitaciones en salida prevista:</b> son las habitaciones que van a ser dejadas libres por los huéspedes.
        .div_3_2_2.p-3.mb-4
          p.m-0 <b>Habitaciones sucias:</b> son las habitaciones que los huéspedes han dejado libres y aún no han sido limpiadas por ama de llaves, por lo tanto, no están disponibles para la venta.
      .col-lg-1

    p.mb-5 La siguiente figura presenta un ejemplo de este tipo de reporte.

    .row
      .col-lg-1
      .col-lg-10.div_3_2.p-5
        figure
          p.BorTit <b>Figura 2.</b> Reporte de habitaciones
          img(src='@/assets/curso/tema3/img04.png')   
          figcaption Nota. Tomada de EzeeFrontDesk
      .col-lg-1

    Separador

    #t_3_3.titulo-segundo
      h2 3.3 Informe de ocupación

    p.mb-5 Haciendo uso del software hotelero se puede obtener el reporte de ocupación y de acuerdo con los parámetros que se establezcan para este reporte, la información que se puede obtener es:

    .row.mb-5
      .col-lg-3
      .col-lg-6.div_3_1_2.p-5
            ul.lista-ul--color
              li 
                i.fas.fa-atom
                | Número de habitaciones ocupadas.
              li 
                i.fas.fa-atom
                | Número de habitaciones libres.
              li 
                i.fas.fa-atom
                | Número de habitaciones reservadas.
              li 
                i.fas.fa-atom
                | Número de huéspedes alojados.
              li 
                i.fas.fa-atom
                | Porcentaje de ocupación.
              li 
                i.fas.fa-atom
                | Cuantos huéspedes se encuentran en el hotel.
              li 
                i.fas.fa-atom
                | Procedencia de las reservas.
              li 
                i.fas.fa-atom
                | Nacionalidad de los huéspedes.
              li 
                i.fas.fa-atom
                | Tipos de habitación en uso o en reserva.
      .col-lg-3
    
    p Se debe tener en cuenta que estos datos son importantes para realizar la programación y coordinación del trabajo de recepción. 
    
    Separador

    #t_3_4.titulo-segundo
      h2 3.4 Formas impresas

    p.mb-4 Las formas impresas (formatos y reportes), están cada vez más en desuso, básicamente debido al avance de los sistemas PMS (Property Management System), los cuales las han reemplazado. Sin embargo, estas formas aún son válidas en hoteles que operan manualmente.
    p.mb-5 Un ejemplo de forma impresa es la tarjeta de registro, documento que respalda un contrato de hospedaje, como lo menciona la Ley General de Turismo (Ley 300 de 1996), capítulo II:
    
    .row.mb-5
      .col-lg-1
      .col-lg-5.p-5.div_3_4_1
        figure.mb-4      
          img(src='@/assets/curso/tema3/img05.svg') 
        h1.text-center Artículo 79
        p.text-center El contrato de hospedaje es un contrato de arrendamiento, de carácter comercial y de adhesión que una empresa dedicada a esta actividad celebra con el propósito principal de prestar alojamiento a otra persona denominada huésped, mediante el pago del precio respectivo día a día, por un plazo inferior a 30 días.
      .col-lg-5.p-5.div_3_4_2
        figure.mb-4   
          img(src='@/assets/curso/tema3/img05.svg') 
        h1.text-center Artículo 81
        p.text-center De la prueba del contrato de hospedaje. El contrato de hospedajes se probará mediante la Tarjeta de Registro Hotelero, en la cual se identificará el huésped y sus acompañantes quienes responderán solidariamente de sus obligaciones (Ley 300 de 1996, Arts. 79 y 81). 
      .col-lg-1

    .row.mb-5
      .col-lg-1        
      .col-lg-10
        .cajon.color-secundario.cajon1.p-5
          p.mb-4 Los datos mínimos que debe contener una forma impresa son:
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Nombre completo.
            li 
              i.fas.fa-atom
              | Número de identificación.
            li 
              i.fas.fa-atom
              | Dirección de residencia.
            li 
              i.fas.fa-atom
              | Espacio para registrar nombres completos y documento de identificación de los acompañantes.
            li 
              i.fas.fa-atom
              | Fecha de ingreso y salida.
      .col-lg-1 

    .row.mb-5
      .col-lg-1        
      .col-lg-10
        .cajon.color-secundario.cajon2.p-5
          p.mb-4 Otras formas impresas para uso en la recepción son:
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Hoja o carta de bienvenida.
            li 
              i.fas.fa-atom
              | Mensajes: para entregar información a los clientes de llamadas o visitas recibidas durante su ausencia del hotel.
            li 
              i.fas.fa-atom
              | Reserva de habitaciones.
            li 
              i.fas.fa-atom
              | Requisición al almacén.
            li 
              i.fas.fa-atom
              | Requisición de cortesías.
            li 
              i.fas.fa-atom
              | Solicitud de mantenimiento.
            li 
              i.fas.fa-atom
              | Control de queja de huéspedes.
            li 
              i.fas.fa-atom
              | Pases de salida para huéspedes y de objetos.
            li 
              i.fas.fa-atom
              | Aviso de cambio de habitación.
            li 
              i.fas.fa-atom
              | Cupones para entregar a huéspedes en planes especiales.
      .col-lg-1 

    .row
      .col-lg-4
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo2_CF07_Tarjeta_de_Registro.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Tarjeta de registro
      .col-lg-4

    Separador

    #t_3_5.titulo-segundo
      h2 3.5 Llaves de habitaciones

    p.mb-5 En un principio se usaron las pesadas llaves de hierro y luego de cobre; su cometido fundamental era la apertura de las puertas, pero había algo adicional y es que no era tan importante la llave, como el llavero. Este se convirtió por bastante tiempo en la identidad del hotel. Las llaves y sus llaveros eran tan pesadas que servían para que el cliente no olvidara dejarlas en la recepción, y pedirlas al regresar al hotel, lo que tácitamente provocaba la interacción con el huésped. Estas llaves se guardaban en el casillero de madera, con los números de habitación y los nombres de los huéspedes, lo cual ayudaba a los recepcionistas, además de saber si el huésped estaba o no en el hotel, a recordar los nombres y poder brindar un trato más personalizado al huésped.

   
    SlyderC(:datos="datosSlyder")    

    Separador

    #t_3_6.titulo-segundo
      h2 3.6 Procedimiento técnico para el registro de huéspedes

    p.mb-5 A continuación, se estudiarán los pasos básicos que se deben tener en cuenta al recibir a un huésped:

    .row.mb-5
      .col-lg-1
      .col-lg-10
        div.divm3.py-5.px-4
          .row.mb-4
            .col-3
            .col-1
              div.pasoSelect(id="myDiv1" ref="myDiv1" @click="selectDiv(1);")
                a
                  p.mb-0.text-center(id="myP1" ref="myP1") Paso
                  h1.mb-0.text-center(id="myH1" ref="myH1") 01
            .col-1
              div(id="myDiv2" ref="myDiv2" @click="selectDiv(2);")
                a  
                  p.textoGris.mb-0.text-center(id="myP2" ref="myP2") Paso
                  h1.textoGris.mb-0.text-center(id="myH2" ref="myH2") 02
            .col-1
              div(id="myDiv3" ref="myDiv3" @click="selectDiv(3);")
                a  
                  p.textoGris.mb-0.text-center(id="myP3" ref="myP3") Paso
                  h1.textoGris.mb-0.text-center(id="myH3" ref="myH3") 03
            .col-1
              div(id="myDiv4" ref="myDiv4" @click="selectDiv(4);")
                a  
                  p.textoGris.mb-0.text-center(id="myP4" ref="myP4") Paso
                  h1.textoGris.mb-0.text-center(id="myH4" ref="myH4") 04
            .col-1
              div(id="myDiv5" ref="myDiv5" @click="selectDiv(5);")
                a  
                  p.textoGris.mb-0.text-center(id="myP5" ref="myP5") Paso
                  h1.textoGris.mb-0.text-center(id="myH5" ref="myH5") 05
            .col-1
              div(id="myDiv6" ref="myDiv6" @click="selectDiv(6);")
                a  
                  p.textoGris.mb-0.text-center(id="myP6" ref="myP6") Paso
                  h1.textoGris.mb-0.text-center(id="myH6" ref="myH6") 06
            .col-3

          div.divm3_2.p-3
            p(v-html="contenidocapa1")
      .col-lg-1      

    h4.titulo-cuarto Registro de huéspedes individuales

    p.mb-4 Es el registro que se realiza a un cliente, una pareja o una familia que hace uso del hotel con reserva previa. A efectos de localizar los datos del cliente, se le saluda con amabilidad y educación dándole la bienvenida, se le pregunta el nombre de quien tiene reservada la habitación y se le pide su documento de identidad. 
    p.mb-5 Para agilizar el tiempo de registro se deben elaborar los pre-registros, en los que se incluye información que se conoce del pasajero, en el momento del registro se pide amablemente al huésped verificar que la información impresa es correcta:

    .row.mb-5
      .col-lg-5.d-flex.flex-column
        div.cajon.color-secundario.cajon1.p-5(style="height:100%")
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Nombre escrito correctamente.
            li 
              i.fas.fa-atom
              | Tipo de habitación reservada.
            li 
              i.fas.fa-atom
              | Número de personas.
            li 
              i.fas.fa-atom
              | Tarifa aplicada.
            li 
              i.fas.fa-atom
              | Fecha de salida.          
      .col-lg-7.d-flex.flex-column
        .cajon.color-secundario.cajon2.p-5(style="height:100%")
          p.mb-4 Los datos para llenar, por lo general, serán:
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Dirección de domicilio.
            li 
              i.fas.fa-atom
              | Número telefónico.
            li 
              i.fas.fa-atom
              | Forma de pago: se debe preguntar cuál será la forma de pago.
              
    p.mb-5 Así se realiza el proceso de registro para los diferentes tipos de huéspedes individuales:

    .row.m-5
      .col-lg-1
      .col-lg-10
        LineaTiempoD.color-primario.lineatiempo1
          .divpasotitulo(numero="1" titulo="Clientes particulares / individuales / walk-in")
            div.divpaso.p-4
              p.m-0 Cuando el huésped responde “con tarjeta de crédito” se le solicita, amablemente, la tarjeta con el fin de elaborar un pagaré o registro donde se toman los siguientes datos: tipo de tarjeta, nombre del titular, número de tarjeta de crédito, fecha de caducidad; explicándole que es por su propia comodidad ya que tendrá crédito abierto en todas las áreas de consumo del hotel, se le explica además que son políticas del hotel. En caso de querer pagar en efectivo, se pregunta el número de noches y se le solicita el pago por anticipado de su estadía, para no estar solicitando el pago diariamente, sugiriendo dejar un depósito adicional para cubrir los gastos extras, se le explica al huésped que es un reglamento del hotel.
          div(numero="2" titulo="Empresarial")
            div.divpaso.divpaso.p-4
              p.m-0 En el momento de solicitud de la reserva se ha recibido información que la empresa será la encargada de la cuenta del alojamiento, la empresa previo a la llegada del huésped debe enviar una carta o un correo empresarial informando qué valores serán cubiertos por la empresa y cuáles deberán ser cancelados directamente por el huésped. 
          div(numero="3" titulo="Agencias de viaje")
            div.divpaso.divpaso.p-4
              p.mb-4 Establecen acuerdos con los hoteles y disponen de unas tarifas especiales en las que usualmente incluye el desayuno. La agencia se hace cargo mediante bonos o voucher que entregan a los clientes para ser entregados en el hotel, el cliente a su salida deberá pagar directamente al hotel los gastos extras o que no haya acordado con la agencia. En el listado de llegadas debe reflejarse esta información con el fin de que el bono sea solicitado al cliente y no le realicen cargo directo a su cuenta, además de tener claro cuáles servicios contrató el huésped a través de la agencia.
              ol.lista-ol.m-0
                li 
                  span.text-bold 1. 
                  | Debe llevar firma del huésped. 
                li 
                  span.text-bold 2. 
                  | En caso de ir con acompañante(s) solicitar sus datos, verificando si ellos pueden firmar por consumos con cargo a su cuenta para proceder a registrar las firmas.
    
    h4.titulo-cuarto Registro de grupos
    p.mb-5 El departamento de ventas y/o reservas envía con anticipación la reserva del grupo. Se hace uso de un memorándum o notificación de grupo y debe incluir la siguiente información: 

    .row.mb-5
      .col-lg-3
      .col-lg-6.d-flex.flex-column
        .cajon.color-secundario.cajon2.p-5(style="height:100%")         
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Nombre del grupo. 
            li 
              i.fas.fa-atom
              | Fecha de llegada.
            li 
              i.fas.fa-atom
              | Fecha de salida.
            li 
              i.fas.fa-atom
              | Hora de llegada.
            li 
              i.fas.fa-atom
              | Hora de salida.
            li 
              i.fas.fa-atom
              | Número y tipo de habitaciones reservadas.
            li 
              i.fas.fa-atom
              | Nombres de los huéspedes.
            li 
              i.fas.fa-atom
              | Documentos de identidad (en caso de tenerlos).
            li 
              i.fas.fa-atom
              | Depósito.
            li 
              i.fas.fa-atom
              | Persona responsable.
            li 
              i.fas.fa-atom
              | VIP del grupo.
            li 
              i.fas.fa-atom
              | Manejo de equipaje y propinas.
            li 
              i.fas.fa-atom
              | Programación de la estadía, eventos dentro y fuera del hotel.
            li 
              i.fas.fa-atom
              | Manejo y pago de las cuentas, consumos extras.
            li 
              i.fas.fa-atom
              | Indicaciones especiales.
          
      .col-lg-3

    p.mb-5 Con base en esta información se procede a hacer el pre-registro y a la llegada de los pasajeros solo será necesaria la firma en el registro y algún dato puntual que haga falta en el mismo. En caso de tener cuenta maestra se solicita la firma del guía o conductor del grupo y será la responsable de los valores a cancelar.
    
    .row.mb-5
      .col-lg-2
      .col-lg-8.d-flex.flex-column
        .cajon.color-secundario.cajon1.p-5(style="height:100%")
          p.mb-4 Existen ocasiones que llegan grupos sin previa reserva. Para este caso se sugiere realizar el siguiente procedimiento:
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Registrar al guía del grupo.
            li 
              i.fas.fa-atom
              | Realizar una lista de las personas y acomodación.
            li 
              i.fas.fa-atom
              | Pedir pago anticipado de la estadía.
            li 
              i.fas.fa-atom
              | Pedir depósito adicional por consumos extras o posibles daños.
            li 
              i.fas.fa-atom
              | Asignar un área especial para su registro.
            li 
              i.fas.fa-atom
              | Entregar una llave por habitación.
            li 
              i.fas.fa-atom
              | Acondicionar las habitaciones.

      .col-lg-2

    h4.titulo-cuarto Registro de extranjeros
    p.mb-5 En el registro para extranjeros se tiene en consideración el mismo procedimiento que para los huéspedes nacionales a excepción del documento de identificación ya que ellos deberán presentar su pasaporte o ID de su país (solo comunidad andina de naciones), a este documento se le saca una fotocopia para respaldar la tarjeta de registro y se procede a escribir la información en el libro de registro de huéspedes, el cual puede llegar a ser solicitado por la Policía de Turismo o Migración. Además, su registro se debe realizar en el sistema de migración. 

    h4.titulo-cuarto Registro VIP
    p.mb-5 Esta es una abreviatura de las palabras inglesas <b>Very Important Person</b>. Aunque todos los huéspedes son importantes, este tipo de huéspedes lo son más por su influencia en el medio donde se desempeñan y a la vez pueden ayudar al hotel a incrementar sus ventas.

    .row.mb-5
      .col-lg-3
      .col-lg-6.d-flex.flex-column
        .cajon.color-secundario.cajon2.p-5(style="height:100%")   
          p.mb-4 Pueden ser:      
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Agentes de viajes.
            li 
              i.fas.fa-atom
              | Periodistas / publicistas del medio turístico.
            li 
              i.fas.fa-atom
              | Organizadores de convenciones.
            li 
              i.fas.fa-atom
              | Funcionarios gubernamentales o presidentes de compañías altamente reconocidas.
      .col-lg-3    

    p.mb-5 El registro de ingreso de estas personas se puede realizar en espacios diferentes al front office y se tendrán algunos detalles adicionales como: 

    .row.mb-5
      .col-lg-7.d-flex.flex-column
        .cajon.color-secundario.cajon1.p-5.mb-4(style="height:100%")
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Una habitación suite.
            li 
              i.fas.fa-atom
              | Un arreglo floral, frutas y/o bebidas en la habitación.
            li 
              i.fas.fa-atom
              | Un detalle típico de la región.
            li 
              i.fas.fa-atom
              | Se da una carpeta con información detallada del hotel.
            li 
              i.fas.fa-atom
              | Cuenta con crédito autorizado.
            li 
              i.fas.fa-atom
              | En algunos casos no se le solicita forma de pago ni se le presenta cuenta de cobro (según políticas del hotel).
            li 
              i.fas.fa-atom
              | Se le recibe y se le lleva al aeropuerto.
            li 
              i.fas.fa-atom
              | En algunos casos cuenta con vigilancia especial.
            li 
              i.fas.fa-atom
              | Los jefes de departamentos del hotel son los encargados de atenderlos directamente.

      .col-lg-5.d-flex.flex-column
        figure(style="height:100%").mb-4
          img(style="height:100%" src='@/assets/curso/tema3/img07.png') 

    h4.titulo-cuarto Auto check-in
    p.mb-5 Los sistemas PMS modernos, permiten realizar el registro de manera remota, es decir, sin presencia física, y para esto se usa la aplicación del hotel que debe estar sincronizada con el PMS, como se muestra en la siguiente figura. 

    .row
      .col-lg-1
      .col-lg-4.div_3_2.p-5.py-4
        figure
          p.BorTit <b>Figura 3.</b> Self check-in systems 
          img(src='@/assets/curso/tema3/img08.png')   
          figcaption Nota. Tomada de Travelarz (2017)
      .col-lg-6.div_3_2_3.p-5.py-5.d-flex
        div.divAutocheck-in.px-4.py-5.d-flex.align-items-center
          div
            p.mb-4 De esta forma, por la aplicación se realiza la captación de información y la identificación de manera biométrica, posteriormente, se realiza una fotografía, con un smartphone, del documento de identidad o pasaporte y se firma digitalmente. Una vez terminado el proceso, el huésped solo pasará a recibir la llave o programarla en su celular. 
            p También existe la posibilidad de tener quioscos de registro, en los que el cliente, a su llegada al hotel, puede registrarse sin interactuar con la recepción. Esto resulta muy benéfico en hoteles con alto volumen de llegadas y en los que se forman filas en el registro.
      .col-lg-1
    //- .bloque-texto-a.color-secundario.bloque3_1.p-4.p-md-5.mb-5 
    //-   .row.m-0.align-items-center.justify-content-between
    //-     .col-lg-4.mb-4.mb-lg-0
    //-       h2.mb-0 
    //-     .col-lg-8
    //-       .bloque-texto-a__texto.p-4
    //-         p Es toda acción mediante la cual una persona de manera directa o a través de un tercero (agente), realiza una petición para contratar unos servicios, principalmente, de alojamiento y en una fecha determinada. Esta reserva puede ser individual o de grupo.
    //-         br
    //-         | Una de las primeras actividades a realizar es conocer las reservas del día con el fin de preparar todo lo concerniente al recibimiento del cliente. Usualmente, es el departamento de reservas quien prepara la información y la entrega a recepción.

    //- .bloque3_1.border
    //-   p sdfasdfa
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Llave mecánica',
        texto:
          'Es el tipo de llave para el tipo de cerradura tradicional. Se recomienda en hoteles donde aún se usa este tipo de llaves, usar llaves de seguridad que son más difíciles de copiar. Posteriormente estas llaves mecánicas evolucionaron a llaves de tarjeta perforadas o Ving-Card, que luego se convirtieron en tarjetas magnéticas.',
        imagen: require('@/assets/curso/tema3/img09.png'),
      },
      {
        titulo: 'Llave magnética para cerradura electrónica',
        texto:
          'Estas llaves se presentan en varios formatos acorde a su tecnología (banda magnética o RDFI - proximidad). Su programación se realiza con un software que integrado al PMS lleva un control de las tarjetas programadas, además de poder inhabilitarlas en caso de pérdida. En la actualidad, con el avance de la tecnología se puede adoptar el sistema de convertir el smartphone del cliente en su propia llave personalizada. Esta tecnología crea un nuevo umbral de seguridad, de control y de personalización en la industria (Canalis, 2021). El recepcionista es el encargado de entregar la llave al huésped en el momento de ingreso, la pérdida de las llaves tiene un costo para el huésped ya que pasa a ser de su responsabilidad durante la estadía.',
        imagen: require('@/assets/curso/tema3/img06.png'),
      },
      {
        titulo: 'Llave maestra',
        texto:
          'Es la llave que abre todas las puertas de las habitaciones del hotel. Su control y manejo es responsabilidad del jefe de recepción o a quien asignen y su uso tiene un protocolo establecido por las directivas del hotel. ',
        imagen: require('@/assets/curso/tema3/img10.png'),
      },
    ],
    contenidocapa1:
      'Dar la bienvenida: con una sonrisa dar la cordial bienvenida al cliente.',
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
    selectDiv(p) {
      this.$refs.myDiv1.style.borderBottom = '0px solid red'
      this.$refs.myDiv2.style.borderBottom = '0px solid red'
      this.$refs.myDiv3.style.borderBottom = '0px solid red'
      this.$refs.myDiv4.style.borderBottom = '0px solid red'
      this.$refs.myDiv5.style.borderBottom = '0px solid red'
      this.$refs.myDiv6.style.borderBottom = '0px solid red'
      this.$refs.myP1.style.color = '#979797'
      this.$refs.myP2.style.color = '#979797'
      this.$refs.myP3.style.color = '#979797'
      this.$refs.myP4.style.color = '#979797'
      this.$refs.myP5.style.color = '#979797'
      this.$refs.myP6.style.color = '#979797'
      this.$refs.myH1.style.color = '#979797'
      this.$refs.myH2.style.color = '#979797'
      this.$refs.myH3.style.color = '#979797'
      this.$refs.myH4.style.color = '#979797'
      this.$refs.myH5.style.color = '#979797'
      this.$refs.myH6.style.color = '#979797'
      if (p == 1) {
        this.$refs.myDiv1.style.borderBottom = '3px solid #FF9800'
        this.$refs.myP1.style.color = '#12263F'
        this.$refs.myH1.style.color = '#12263F'
        this.contenidocapa1 =
          'Dar la bienvenida: con una sonrisa dar la cordial bienvenida al cliente.'
      } else if (p == 2) {
        this.$refs.myDiv2.style.borderBottom = '3px solid #FF9800'
        this.$refs.myP2.style.color = '#12263F'
        this.$refs.myH2.style.color = '#12263F'
        this.contenidocapa1 =
          'Realizar el registro: se invita al huésped de manera amable a diligenciar la tarjeta de registro y solicitando presentación de su documento de identidad. El recepcionista debe observar que todos los datos que se soliciten se encuentren completos.'
      } else if (p == 3) {
        this.$refs.myDiv3.style.borderBottom = '3px solid #FF9800'
        this.$refs.myP3.style.color = '#12263F'
        this.$refs.myH3.style.color = '#12263F'
        this.contenidocapa1 =
          'Promocionar los servicios del hotel: el recepcionista es un vendedor, puede ofrecer habitaciones de mejores características a las solicitadas en la reserva presentando las diferentes opciones, en caso de contar con paquetes de alimentación o servicios complementarios darlos a conocer al huésped.'
      } else if (p == 4) {
        this.$refs.myDiv4.style.borderBottom = '3px solid #FF9800'
        this.$refs.myP4.style.color = '#12263F'
        this.$refs.myH4.style.color = '#12263F'
        this.contenidocapa1 =
          'Asignar la habitación de acuerdo con las necesidades y solicitudes del cliente.'
      } else if (p == 5) {
        this.$refs.myDiv5.style.borderBottom = '3px solid #FF9800'
        this.$refs.myP5.style.color = '#12263F'
        this.$refs.myH5.style.color = '#12263F'
        this.contenidocapa1 =
          'Solicitar garantía: se debe preguntar al huésped cuál será su forma de pago.'
      } else if (p == 6) {
        this.$refs.myDiv6.style.borderBottom = '3px solid #FF9800'
        this.$refs.myP6.style.color = '#12263F'
        this.$refs.myH6.style.color = '#12263F'
        this.contenidocapa1 =
          'Despedida: se le manifiesta al huésped que se desea una feliz estadía, se le entrega la llave al botones que lo acompañará hasta la habitación presentándose por su nombre.  '
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>
