export default {
  global: {
    componenteFormativo:
      'Organización del área y front office                                ',
    descripcionCurso:
      'La recepción interviene en la coordinación e interrelación con las demás áreas del hotel, siendo el primer contacto que se tiene con el cliente, donde un trato amable y profesional, responde a sus necesidades y asegurará que desee volver y lo recomiende. La importancia de conocer los procedimientos contribuye con el cumplimiento de la misión y visión del establecimiento hotelero.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Huésped',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recepción hotelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura organizacional del área',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Personal de recepción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Registro de huéspedes (check-in)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Reserva',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Disponibilidad (Availability)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Informe de ocupación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Formas impresas',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Llaves de habitaciones',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Procedimiento técnico para el registro de huéspedes',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Normativa de prevención de explotación sexual comercial de niños, niñas y adolescentes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Normativa aplicable para nacionales y extranjeros ',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Documentos de identificación legalmente aceptados',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Protocolos internos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Porte del uniforme',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Presentación personal',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Trato con el huésped',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Uso de áreas del hotel',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Reportes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Recibo y entrega de turno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Bitácoras',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Álvarez, D., I. (2015). Blog del hotel.',
      link:
        'https://blogdelhotel.wordpress.com/2015/09/09/la-importancia-del-uniforme-embajador-de-la-compania/ ',
    },
    {
      referencia:
        'Bardy, J. (2011). Hotel Front Office Management. John Wiley & Sons.',
    },
    {
      referencia: 'Canalis, X. (2021). Hosteltur.',
      link:
        'https://www.hosteltur.com/141678_historia-de-la-llave-de-hotel.html',
    },
    {
      referencia: 'Concepto.de. (2021). Concepto de higiene.',
      link: 'https://concepto.de/higiene/#ixzz6NgCe1Q4t',
    },
    {
      referencia:
        'MinComercio. (s.f.). Manual de Buenas Prácticas para la Prevención de la ESCNNA en Viajes y Turismo. MinComercio.',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (1996). Ley General de Turismo.',
      link: 'https://www.camara.gov.co/ley-general-de-turismo',
    },
    {
      referencia:
        'Villanueva, R. (2012). Organización y prestación del servicio de recepción en alojamientos. IC Editores.',
    },
  ],
  glosario: [
    {
      termino: 'Acontecimiento',
      significado: 'suceso, especialmente si es importante.',
    },
    {
      termino: 'Asidua',
      significado:
        'que realiza con constancia y con cierta continuidad o frecuencia alguna cosa.',
    },
    {
      termino: 'Back-office',
      significado:
        'parte de la empresa donde se realizan las actividades de gestión de la propia empresa en las que el cliente no tiene contacto directo con el personal, como el departamento de informática, recursos humanos, contabilidad, etc. Es todo lo que está detrás del mostrador, todo lo que no está de cara al cliente.',
    },
    {
      termino: 'Coadyuvar',
      significado: 'contribuir o ayudar a la consecución de una cosa.',
    },
    {
      termino: 'Conserje',
      significado:
        'persona encargada de la conserjería, que se ocupa entre otras funciones de dar a los clientes una información general y particular del establecimiento y del destino.',
    },
    {
      termino: 'Dato',
      significado:
        'elemento de conocimiento que no tiene significado por sí mismo, es algo incompleto que necesita pasar por un proceso de elaboración que le dé sentido, convirtiéndose en información. ',
    },
    {
      termino: 'Esporádico',
      significado:
        'que sucede o se hace con poca frecuencia, con intervalos de tiempo irregulares, y de forma aislada, sin relación con otros casos anteriores o posteriores.',
    },
    {
      termino: 'Front-office',
      significado:
        'parte de la empresa donde se realizan las actividades que tienen trato directo con el cliente. Es la oficina visible, como el departamento de ventas o reservas y el departamento de recepción. ',
    },
    {
      termino: 'Información',
      significado:
        'está hecha a base de datos, los cuales, independientemente no tienen sentido; es un conjunto de datos organizados, que forman un mensaje sobre un tema en concreto.',
    },
    {
      termino: 'No Show',
      significado:
        'este término se utiliza cuando un cliente que tenía una reservación no acude, quedando la habitación vacante.',
    },
    {
      termino: 'Premura',
      significado: 'prisa o urgencia con que se hace algo.',
    },
    {
      termino: 'Productiva',
      significado:
        'que arroja un resultado favorable al comparar los precios con los costes.',
    },
    {
      termino: 'Sectores productivos',
      significado: 'Que es útil o provechoso.',
    },
    {
      termino: 'Reportar',
      significado: 'transmitir o comunicar noticias.',
    },
    {
      termino: 'Requerimientos',
      significado:
        'petición de una cosa que se considera necesaria, especialmente el que hace una autoridad.',
    },
    {
      termino: 'VIP',
      significado:
        'Very Important Person. Persona muy especial para el establecimiento.',
    },
    {
      termino: 'Walk in',
      significado:
        'Cliente que no tiene reserva prevista. El cliente se presenta en el hotel de improviso.',
    },
  ],
  complementario: [
    {
      texto: 'Vlex. (s.f.). Ley General de Turismo (Ley 300 de 1996). ',
      tipo: 'Página web',
      link:
        'https://legislacion.vlex.com.co/vid/ley-expide-turismo-dictan-disposiciones-60003686?_ga=',
    },
    {
      texto:
        'Ministerio de Industria y Comercio. (2018). Norma Técnica Sectorial NTSH003. ',
      tipo: 'PDF',
      descarga:
        '/downloads/Norma-Tecnica-Sectorial-Colombiana-NTS-–-TS-003.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Isabel Suárez Delgado',
        cargo: 'Instructora',
        centro: 'Centro de Gestión y Servicios',
      },
      {
        nombre: 'Harbey Castelblanco',
        cargo: 'Experto técnico',
        centro: 'Centro Nacional Colombo Alemán',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
