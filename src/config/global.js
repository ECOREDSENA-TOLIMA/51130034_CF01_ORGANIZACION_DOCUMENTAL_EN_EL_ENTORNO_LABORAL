export default {
  global: {
    componenteFormativo:
      'Principios archivísticos y Tablas de Retención Documental (TRD)',
    descripcionCurso:
      'Toda empresa tiene la necesidad de contar con archivos organizados, por lo cual se deben tener claros los principios básicos del archivo, la clasificación documental y su importancia dentro de la organización; además, existe la obligatoriedad de elaborar tablas de retención documental como lo expresa la Ley 594 de 2000, más conocida como Ley General de Archivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Organización documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Archivo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructura orgánica de la empresa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Legislación archivística',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clasificación documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Series y subseries documentales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cuadro de clasificación documental',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ciclo vital de los documentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tabla de Retención Documental (TRD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Obligatoriedad de las Tablas de Retención Documental, Ley 594 de 2000',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Importancia y aplicación de las Tablas de Retención Documental',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_51130034_DU.zip',
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
  complementario: [
    {
      tema: '1. Organización documental',
      referencia: 'Conasa. (2024). La importancia de la gestión documental.',
      tipo: 'Página web',
      link:
        'https://conasa.grupocibernos.com/blog/la-importancia-la-gestion-documental',
    },
    {
      tema: '1.3 Legislación archivística',
      referencia: 'Congreso de la República. (2014). Ley 1712 de 2014.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=56882',
    },
    {
      tema: '4. Tabla de Retención Documental',
      referencia:
        'Archivo General de la Nación. (s.f.). Tablas de Retención Documental – TRD.',
      tipo: 'Página web',
      link: 'https://www.archivogeneral.gov.co/agn/custom/711',
    },
    {
      tema:
        '4.1 Obligatoriedad de las Tablas de Retención Documental, Ley 594 de 2000',
      referencia: 'Congreso de Colombia. (2000). Ley 594 de 2000.',
      tipo: 'Ley',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      tema:
        '4.1 Obligatoriedad de las Tablas de Retención Documental, Ley 594 de 2000',
      referencia: 'Archivo General de la Nación. (2013). Acuerdo 004 de 2013.',
      tipo: 'Acuerdo',
      link:
        'http://wsp.presidencia.gov.co/dapre/Documents/acuerdo-4-15mar2013.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Archivo',
      significado:
        'conjunto de documentos, sea cual fuere su fecha, forma y soporte material, acumulados en un proceso natural por una persona o entidad pública o privada, en el transcurso de su gestión.',
    },
    {
      termino: 'Archivo total',
      significado:
        'concepto que hace referencia al proceso integral de los documentos en su ciclo vital.',
    },
    {
      termino: 'Ciclo vital del documento',
      significado:
        'etapas sucesivas por las que atraviesan o pasan los documentos, desde su producción o recepción en la oficina y su conservación temporal, hasta su eliminación o conservación permanente.',
    },
    {
      termino: 'Cuadro de clasificación',
      significado:
        'instrumento o esquema archivístico que muestra la jerarquización de la empresa; en ella, se expresa el listado de todas las series y subseries documentales con su correspondiente codificación.',
    },
    {
      termino: 'Disposición final de documentos',
      significado:
        'hace referencia a la tercera etapa del ciclo vital, resultado de la valoración con miras a su conservación permanente o a su eliminación.',
    },
    {
      termino: 'Fondo documental',
      significado:
        'conjunto de documentos producidos por una persona natural o jurídica, en desarrollo de sus funciones o actividades.',
    },
    {
      termino: 'Organización documental',
      significado:
        'conjunto de actividades técnicas y administrativas, cuya finalidad es la agrupación documental, relacionada en forma jerárquica con criterios orgánicos o funcionales.',
    },
    {
      termino: 'Serie documental',
      significado:
        'es el conjunto de unidades documentales de estructura y contenido homogéneos, producidos de un mismo órgano o sujeto productor, como consecuencia del ejercicio de sus funciones específicas.',
    },
    {
      termino: 'Tipo documental',
      significado:
        'unidad documental simple, originada en una actividad administrativa.',
    },
    {
      termino: 'Valor primario',
      significado:
        'es el que tienen los documentos mientras sirven a la institución productora y al iniciador, destinatario o beneficiario; es decir, a los involucrados en el asunto.',
    },
    {
      termino: 'Valor secundario',
      significado:
        'es el que interesa a los investigadores de información retrospectiva. Surge una vez agotado el valor inmediato o primario. Los documentos que tienen este valor, se conservan permanentemente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (14 de julio de 2000). Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4275',
    },
    {
      referencia:
        'Godoy, J., López, I., Casilimas, C. y otros. (2001). Tablas de retención y transferencias documentales. Bogotá: Archivo General de la Nación.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/9.%20disposicion%20final/DOCUMENTOS%20TECNICOS/MINIMANUAL%20TRD.pdf',
    },
    {
      referencia:
        'Julia, G. y López Ávila, M. I. (2001). Cartilla de Clasificación Documental. Bogotá: Archivo General de la Nación.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%20organizacion/MANUALES/CLASIFICACION%20DOCUMENTAL.pdf',
    },
    {
      referencia:
        'Secretaría General de la Alcaldía Mayor de Bogotá D.C. (27 de febrero de 2015). Circular 3 de 2015 Archivo General de la Nación. Directrices para la elaboración de tablas de retención documental.',
      link:
        'https://normativa.archivogeneral.gov.co/circular-externa-003-de-2015/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder línea de producción',
          centro:
            'Centro Industrial de Mantenimiento Integral -Regional Santander',
        },
        {
          nombre: 'Carmen Milena Ferreira Ardila',
          cargo: 'Experta temática ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro Industrial de Mantenimiento Integral -Regional Santander',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral -Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Animación y Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
