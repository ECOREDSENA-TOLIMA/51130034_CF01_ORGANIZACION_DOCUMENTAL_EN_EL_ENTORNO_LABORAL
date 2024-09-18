<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Clasificación documental
    p.mb-4(data-aos="fade-left") La clasificación documental es el primer paso que se debe realizar para el proceso de organización documental.
    p.mb-5(data-aos="fade-left") Con la clasificación de documentos, se logra la identificación y el agrupamiento sistemático de documentos semejantes y características comunes; por esto, es de vital importancia conocer la estructura orgánica de la empresa y los trámites que se adelantan en las diferentes dependencias en ejercicio de las funciones. La clasificación refleja la estructura orgánica de la empresa, de tal manera que las agrupaciones documentales resultan de las subdivisiones de la organización, tal como se ejemplifica a continuación:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-8(data-aos="flip-up")
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <i>Clasificación documental.</i>
        .row.justify-content-center
          figure.desktop
            img(src='@/assets/curso/temas/tema2/1.svg', alt='Imagen que contiene un esquema que representa la clasificación documental de manera jerárquica, iniciando con la serie documental, de la cual se desprenden los expedientes y de estos, el documento de archivo.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/1_.svg', alt='Imagen que contiene un esquema que representa la clasificación documental de manera jerárquica, iniciando con la serie documental, de la cual se desprenden los expedientes y de estos, el documento de archivo.')
    
    p.mb-4(data-aos="fade-left") Los pasos para la clasificación documental ayudan a reconstruir cómo es la entidad y funciona su proceso de generación de documentos, estableciendo el vínculo originario que los documentos tuvieron en el momento de su creación, en el cumplimiento de una actividad práctica y administrativa.
    p.mb-5(data-aos="fade-left") Partiendo de lo anterior, los pasos se dan de la siguiente manera:

    .titulo.mb-5
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 Pasos para la clasificación documental

    .row.justify-content-center.mb-5
      .col-xl-10.col-md-12.mb-5.mb-md-0
        PasosA.color-acento-botones(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h5 Primer paso
              p.mb-0 El primer paso para la clasificación documental, se centra en el reconocimiento de los productores de documentos; es decir: fondo – sección – subsección.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema2/2.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center
            .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/tema2/3.png', alt='Imagen decorativa')
            .col-lg-6(data-aos="fade-left")
              h5 Segundo paso
              p.mb-0 El segundo paso, corresponde a la identificación de la estructura orgánica: conocer la jerarquía de la empresa, para determinar cuál de las dependencias pertenecen al nivel directivo y cuál al subalterno.

          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h5 Tercer paso
              p.mb-0 El tercer paso, identifica las series y asuntos documentales; estas series documentales resultan de las funciones y actividades desarrolladas por las dependencias, para el cumplimiento de los objetivos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema2/4.png', alt='Imagen decorativa')
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Series y subseries documentales

    p.mb-4(data-aos="fade-left") El instrumento que permite la clasificación y descripción archivística, mediante las agrupaciones documentales, se expresa en el listado de series y subseries documentales, debidamente codificadas; estas se caracterizan porque se ordenan siguiendo el trámite administrativo señalado, se integran en un solo tipo o varios tipos de documentos, conservando siempre el orden original y expresando continuidad en el tiempo.
    p.mb-5(data-aos="fade-left") Al respecto, se definen y ejemplifican de la siguiente manera:

    .container.BG01.px-4.px-md-5.pt-4(data-aos="flip-up")
      .row.justify-content-center 
        .col-xl-4.col-lg-6.col-8.mb-3.p-4
          figure
            img(src='@/assets/curso/temas/tema2/5.svg', alt='Imagen decorativa')
        .col-xl-6.col-12.mb-3.p-4
          p <b>Serie documental</b>: conjunto de unidades documentales de estructura y contenido homogéneos, emanadas de un mismo órgano o sujeto productor, como consecuencia del ejercicio de sus funciones específicas. Ejemplos: historias laborales, contratos, actas e informes. A una serie documental, anteriormente se le llamaba asuntos y los documentos se agrupan por asuntos.
          p <b>Subserie documental</b>: es el conjunto de unidades documentales que conforman una serie.
          p Ejemplos:

    .row.justify-content-center(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema2/6.svg', alt='Imagen decorativa')
            
          h4.text-center Serie documental
          p Actas; esta sería la serie o el asunto; pero como en una empresa se manejan varios tipos de actas, se podrían separar y agrupar entre sí.
        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema2/7.svg', alt='Imagen decorativa')
            
          h4.text-center Subserie documental
          p Actas comité técnico - actas de junta directiva.

    .titulo.mb-5
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 Tipo documental

    p(data-aos="fade-left") Un tipo documental es una unidad documental simple, originada en una actividad administrativa; es decir, los tipos documentales son los documentos que componen una serie o una subserie. Ejemplo: recibos de caja, comprobantes de egreso, facturas, cuentas de cobro, entre otros.
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Cuadro de clasificación documental

    p.mb-4(data-aos="fade-left") El cuadro de clasificación, es un esquema que muestra la jerarquización y clasificación dada a la documentación producida por una institución; en ella, se registra las secciones, las subsecciones, las series y las subseries documentales. Los cuadros tendrán tantas casillas, como cantidad de unidades documentales que existan. Cada unidad productora se identifica con un número.
    p.mb-5(data-aos="fade-left") Ejemplo:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-11.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/8.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG02.p-xl-6.p-lg-2.p-sm-4.px-3
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Primer dígito
            p.text-white.text-center.mb-0 Alcaldía.

      .col-lg-4.col-md-11.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/9.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG02.p-xl-6.p-lg-2.p-sm-4.px-3
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Segundo dígito
            p.text-white.text-center.mb-0 Secretaría.

      .col-lg-4.col-md-11.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/10.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG02.p-xl-6.p-lg-2.p-sm-4.px-3
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Tercer dígito
            p.text-white.text-center.mb-0 Oficinas que dependen de la secretaría.
    
    p.mb-4(data-aos="fade-left") El código alfanumérico que se asigne, será con la sigla que identifique la dependencia, seguido del número que le asignen a cada serie.
    p.mb-5(data-aos="fade-left") En el cuadro de clasificación se distinguen dos niveles, el primero está conformado por la estructura orgánica de la empresa, como son la secciones y subsecciones; el segundo, está conformado por las series y subseries documentales.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-8(data-aos="flip-up")
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <i>Ejemplo cuadro de clasificación municipal.</i>
        .row.justify-content-center
          figure.desktop
            img(src='@/assets/curso/temas/tema2/11.svg', alt='Imagen que contiene un ejemplo de un cuadro de clasificación municipal, donde se incluyen los códigos del fondo, la sección y la subsección; además de la institución que los representan.')
            figcaption Fuente: SENA 
        figure.movil
          img(src='@/assets/curso/temas/tema2/11_.svg', alt='Imagen que contiene un ejemplo de un cuadro de clasificación municipal, donde se incluyen los códigos del fondo, la sección y la subsección; además de la institución que los representan.')
          figcaption Fuente: SENA 

</template>

<script>
export default {
  name: 'Tema2',
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
