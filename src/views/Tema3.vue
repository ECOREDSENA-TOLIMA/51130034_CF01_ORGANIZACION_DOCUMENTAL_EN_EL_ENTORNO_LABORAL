<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ciclo vital de los documentos

    p.mb-5(data-aos="fade-left") El denominado ciclo vital de los documentos, implica los procesos de gestión documental en cada una de sus fases y etapas; estas comprenden desde su producción y recepción en los archivos de gestión, hasta su disposición final, ya sea que se integre de forma permanente a un archivo o se elimine en conformidad al resultado del proceso de valoración.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todo documento que se integre permanentemente forma parte del histórico documental, constituyéndose en un componente valioso para investigación, lo cual es evidencia requerida de un proceso o procedimiento, evidencia testimonial o simplemente carácter informativo. Todo documento tiene un ciclo vital, el cual corresponde a etapas relacionadas con su permanencia en cada uno de los tres tipos de archivo, que debe tener cada institución en sus distintas dependencias:

    .col-sm.mb-5.mb-sm-0
      h4 Listado ordenado cuadro color + separadores
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta.v--green
            span 1
          | Archivos de gestión o activos; son documentos con vigencia informativa porque su producción es actual.

        li 
          .lista-ol--cuadro__vineta.v--green
            span 2
          | Archivos intermedios o inactivos —archivo central— documentos con baja consulta, pero pueden llegar a cubrir una necesidad testimonial o de apoyo a decisiones.

        li 
          .lista-ol--cuadro__vineta.v--green
            span 3
          | Archivos históricos o permanentes.

    p.mb-5(data-aos="fade-left") Basado en lo anterior, a continuación, se detalla este ciclo vital:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-8.col-12(data-aos="flip-up")
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span <i>Aspectos presentes en los tipos de archivos.</i>
        figure.desktop
          img(src='@/assets/curso/temas/tema3/2.svg', alt='Imagen que detalla los aspectos presentes en los tipos de archivos, los cuales parten de los tres tipos existentes, donde el de gestión y central tiene valores primarios y el histórico posee valores secundarios. Además, cada valor tiene respectivos procesos.')
        .row.movil
          .col-12
            a.anexo(:href="obtenerLink('/downloads/Aspectos_presentes_en_los_tipos_de_archivos.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Descargar.</b> Aspectos presentes en los tipos de archivos
    
    p.mb-5(data-aos="fade-left") Todos los documentos poseen un valor que los identifica, dependiendo de la etapa del ciclo vital en el que se encuentran. Además, los valores primarios se dan en la primera y segunda etapa del ciclo vital, mientras que los valores secundarios corresponden al archivo histórico. De acuerdo con esta valoración, se consideran las siguientes facetas contenidas en los documentos:

    .tarjeta.p-4.tarjeta--BG03.px-4.px-md-5.pt-4.mb-5(data-aos="flip-up")
      PasosB.color-acento-botones.p-4
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h5.mb-4 Valor administrativo
            p.mb-0 Contiene un documento, una serie de documentos o un grupo documental, para la entidad productora, relacionado con el trámite o asunto que motivó su creación. Este valor se encuentra en todos los documentos producidos o recibidos en cualquier institución u organismo, para responder a una necesidad administrativa mientras dure su trámite. Son importantes por su utilidad referencial para la toma de decisiones y la planeación.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/3.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h5.mb-4 Valor primario
            p.mb-0 Valor que tiene el documento ya sea, administrativo, legal, fiscal, contable y técnico.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/4.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h5.mb-4 Valor jurídico
            p.mb-0 Documentos que derivan derechos u obligaciones legales, regulados por el derecho común.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/5.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h5.mb-4 Valor legal
            p.mb-0 Aquel que tienen los documentos que sirven de testimonio ante la ley.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/6.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h5.mb-4 Valor fiscal
            p.mb-0 Utilidad o aptitud que tienen los documentos para el Tesoro o Hacienda Pública.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/7.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h5.mb-4 Valor contable
            p.mb-0 Utilidad o aptitud de los documentos que soportan el conjunto de cuentas, registros de los ingresos y egresos y de los movimientos económicos de una entidad pública

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/8.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h5.mb-4 Valor secundario
            p.mb-0 Valor que tienen los documentos para la cultura, la historia y la ciencia. Sirven de referencia para la elaboración o reconstrucción de cualquier actividad de la administración, como fuente primaria para la historia y como testimonio de la memoria colectiva. Son el patrimonio documental de la comunidad que los creó y los utiliza. Algunos documentos nacen con valores permanentes, por las razones arriba citadas y otros alcanzan estos valores como resultado de la valoración.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/9.png', alt='Imagen decorativa')

    .titulo.mb-5
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 Tipos de archivos
    
    p.mb-5(data-aos="fade-left") Dentro del ciclo vital de los documentos, como ya se explicó, existen también los archivos con sus respectivas clasificaciones, así que a continuación, se explica en más detalle su funcionamiento:

    .tarjeta.tarjeta--BG04.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.order-lg-1.order-2
            h4 Archivo de gestión
            p Son todos los documentos que están siendo utilizados o consultados continuamente, por las diferentes dependencias productoras de documentos; es decir, el archivo de gestión está conformado por documentos que se encuentran en las oficinas.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/11.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.order-lg-1.order-2
            h4 Archivo central
            p Es donde se encuentran conservados los documentos transferidos de los diferentes archivos de las oficinas o archivos de gestión, cuya consulta no es tan frecuente, pero siguen teniendo vigencia y son objeto de consulta por las mismas oficinas o por particulares.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/12.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.order-lg-1.order-2
            h4 Archivo histórico
            p Los documentos del archivo histórico son aquellos que, por su valor para la investigación, la ciencia y la cultura, son de conservación permanente. El archivo histórico dentro de sus funciones tiene la de custodiar y conservar dichos documentos.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/13.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
