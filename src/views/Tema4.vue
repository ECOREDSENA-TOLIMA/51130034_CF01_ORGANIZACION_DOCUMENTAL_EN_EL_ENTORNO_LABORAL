<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Tabla de Retención Documental
    p.mb-5(data-aos="fade-left") La Tabla de Retención Documental (TRD), es donde se registra un listado de series documentales con sus correspondientes tipos documentales, a los cuales se les asigna su tiempo de permanencia en las diferentes fases del archivo, ya explicadas: archivo de gestión, archivo central o archivo histórico.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-4.col-md-8.col-12.mb-3.d-lg-flex.d-none
            figure
              img(src='@/assets/curso/temas/tema4/1.svg', alt='Imagen decorativa')
          .col-lg-8.col-12.mb-3
            p La Tabla de Retención Documental, es un instrumento archivístico que facilita la clasificación documental en concordancia con la estructura funcional de cada entidad; en ella, se indica los criterios de retención y disposición final, de acuerdo con la valoración asignada.
            .bloque-texto-b.color-primario.py-4
              .bloque-texto-b__texto
                p.mb-0 Las series documentales están referidas al conjunto de documentos que corresponden al mismo uso administrativo, tienen características similares en su contenido y en algunas ocasiones, similitudes en su aspecto externo.

    .tarjeta.tarjeta1.p-3
      .row.justify-content-around.align-items-center
        .col-lg-1.col-3
          img(src="@/assets/template/document.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Tabla de Retención Documental
              p.text-small.mb-0 Para conocer el formato de la Tabla de Retención Documental, se invita a que acceda y navegue el anexo TRD.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_TRD_CF1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Obligatoriedad de las Tablas de Retención Documental, Ley 594 de 2000
    p.mb-5(data-aos="fade-left") Esta ley reconoce la importancia de la conservación documental, mediante la gestión archivística y resalta su papel orientador para una buena administración empresarial. Con la implementación de la presente ley, se precisa la obligatoriedad de la aplicación de las reglas, pautas y principios para regular la acción archivística de la Nación.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-8.col-12.mb-3
            p La normatividad reglamentada por la Ley 594 de 2000, también conocida como la Ley General de Archivos, proporciona los parámetros orientadores a las entidades públicas o privadas para una gestión archivística exitosa, considerando que su proceso inicia con la recolección de cada documento y continúa hasta su almacenamiento, garantizando con ello, la adecuada conservación y facilidad de consulta. De manera concreta, la Ley 594 de 2000 en su Artículo 24, afirma la obligatoriedad de las Tablas de Retención Documental, para todas las entidades del Estado.
            .cajon.cajon1.color-primario.p-4
              p Para mayor información, el aprendiz puede consultar la bibliografía aportada sobre la ley citada en: (Congreso de la República de Colombia, 2000).
          .col-lg-4.col-8.mb-3.d-lg-flex.d-none
            figure
              img(src='@/assets/curso/temas/tema4/5.svg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-left") Con respecto a esta normatividad, se tiene lo siguiente:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Artículo 24")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/2.png', alt='Imagen decorativa')
          .col-lg-6
            h4.mb-3 Artículo 24
            p.mb-3 La Ley General de Archivos —Ley 594 de 2000— reguló la gestión de documentos y estableció la obligatoriedad para las entidades públicas y privadas con funciones públicas de elaborar programas de gestión de documentos; en su artículo 24, define y establece la obligatoriedad de elaborar y adoptar las Tablas de Retención Documental (TRD), como un instrumento archivístico que caracteriza a cada entidad, de acuerdo con sus particulares funciones y procedimientos, la recepción, archivo y conservación de los documentos generados. Igualmente, orienta y exige la aplicación de los principios de eficiencia pertinentes a la función administrativa y la racionalidad propia que debe caracterizar a todo sistema de archivo, cobijado bajo el régimen del sector público. Desde esta perspectiva, la adopción de las TRD se constituyen en agentes dinamizadores para la acción estatal, al apoyar adecuadamente los requerimientos de fluidez en los proceso informativos.

      .py-3.py-md-4(titulo="Acuerdo 004 de 2013")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/3.png', alt='Imagen decorativa')
          .col-lg-6
            h4.mb-3 Acuerdo 004 de 2013
            p.mb-3 Con el objetivo de dar cumplimiento a lo ordenado por la Ley 594 de 2000 en su artículo 24 —Obligatoriedad de las tablas de retención. Será obligatorio para las entidades del Estado elaborar y adoptar las respectivas Tablas de Retención Documental—, se expidió el presente acuerdo — 004 de 2013 —. Este acuerdo reglamenta el procedimiento para la elaboración, presentación, evaluación, aprobación e implementación de las Tablas de Retención Documental, con el fin de efectuar y facilitar tanto la gestión documental, como la organización de los archivos de las entidades del Estado, teniendo como referente la metodología basada en la agrupación de los documentos en series y subseries.
            .row
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Alcance del acuerdo
                  .indicador--click(v-if="mostrarIndicador")
            ModalA(:abrir-modal.sync="modal1")
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  h4 Alcance del acuerdo
                  p Las Tablas de Retención Documental se deben elaborar y aplicar, tanto para la organización y disposición de documentos físicos, como para los documentos electrónicos. Las TRD de las entidades del orden nacional, de las Gobernaciones y Distritos, de sus entidades centralizadas, descentralizadas, autónomas y de las entidades privadas que cumplen funciones públicas, de los municipios, distritos y departamentos, han sido concebidas en el marco normativo colombiano como instrumentos archivísticos, a través de cuya implementación se busca garantizar la protección de la información pública y del patrimonio documental; igualmente, se considera que las TRD son instrumentos archivísticos necesarios para la adecuada gestión de los documentos y archivos del Estado, con el fin de disponer de archivos técnicamente organizados.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema4/4.png', alt='Imagen decorativa')

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Importancia y aplicación de las Tablas de Retención Documental

    .row.justify-content-center.mb-5
      .col-lg-7.col-12.mb-3
        p Las Tablas de Retención Documental, sin duda alguna, revisten gran importancia desde la perspectiva administrativa, ya que su instauración como parte valida del proceso institucional, facilita el manejo de la información al contribuir con la racionalización de la producción documental, además de ayudar a la administración a la prestación de un servicio efectivo, mediante la facilidad de control y acceso a los documentos generados, durante los tiempos de retención estipulados. Igualmente, las TRD garantizan que los documentos seleccionados para su conservación, tengan un carácter de permanencia y fidelidad en la información recabada, sin disminución de la regulación de transferencia que debe asistir a cada fase de archivo documental.
        p Para la aplicación de la Tabla de Retención Documental se debe tener en cuenta:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta.v--green
              span 1
            | Hacer difusión de lo plasmado en dicha tabla.
          li 
            .lista-ol--cuadro__vineta.v--green
              span 2
            | Fechar el inicio procedimental, a partir del cual son de obligatorio cumplimiento.
          li 
            .lista-ol--cuadro__vineta.v--green
              span 2
            | Elaborar instructivo, de cómo aplicar esta tabla.
      .col-lg-5.col-8.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema4/6.svg', alt='Imagen decorativa')
    
    p.mb5(data-aos="fade-left") La administración de las diferentes entidades e instituciones, se ven beneficiadas con la aplicación de las tablas de retención documental, porque:

    .row.justify-content-center.mb-4
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema4/7.svg' alt='AvatarTop')
          h4.text-center Dan cumplimiento con la Ley 594 de 2000
          p Elaboración y aplicación Tablas de Retención Documental.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema4/8.svg' alt='AvatarTop')
          h4.text-center Optimizan los procesos de transferencias primarias y secundarias
          p Gracias a esta herramienta se indica qué documentos se deben transferir.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema4/9.svg' alt='AvatarTop')
          h4.text-center Facilita el acceso a la información
          p Indica donde se encuentran los documentos de acuerdo con su ciclo vital.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema4/10.svg' alt='AvatarTop')
          h4.text-center Contribuye a la racionalización de la producción de documento
          p Se conocen cuáles son las oficinas productoras de dichos documentos.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema4/11.svg' alt='AvatarTop')
          h4.text-center Garantiza la selección y conservación de los documentos que tienen carácter permanente
          p La Tabla de Retención Documental, indica cuáles documentos son de conservación permanente por su valor histórico, científico o cultural.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema4/12.svg' alt='AvatarTop')
          h4.text-center Permite a la administración de las empresas brindar un servicio eficaz y eficiente
          p Gracias a la organización de los documentos, se logra ubicar de forma oportuna para el momento en el que el usuario interno o externo lo requiera, cumpliendo con el tiempo establecido para la entrega de la información.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
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

<style lang="sass"></style>
