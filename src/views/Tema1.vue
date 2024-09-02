<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Organización documental
    p.mb-4(data-aos="fade-left") Es el conjunto de actividades que van encaminadas a clasificar, ordenar y describir los documentos de una entidad, con el fin de subsanar las dificultades producidas por la falta de información, generalmente causada por la pérdida de documentos; esto, como producto de la desorganización, ante la carencia de sistematización en la disposición final de los documentos generados por la institución.

    h4.titulo1.mb-4(data-aos="fade-left") Importancia de la organización de documentos de archivos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0 Para toda institución es primordial y necesario tener archivos organizados, porque ellos, constituyen la memoria institucional. Los documentos de archivo son una herramienta esencial de las organizaciones, recursos de significación e identidad corporativa, los cuales, al encontrarse organizados, sirven como memoria y testimonio de la evolución de la entidad.
        br
        br
        | Los archivos organizados garantizan el acceso a la información de manera ágil y oportuna, simplifican trámites y evitan la acumulación de documentos innecesarios, facilitando con ello, la toma de decisiones. Resulta muy importante de resaltar, que los archivos son la imagen de quien los produce.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Archivo

    .row.justify-content-center(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema1/2.svg', alt='Imagen decorativa')
            
          h4.text-center a) Un lugar de almacenamiento físico

        .col-xl.col-md-6.tarjeta.color1.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema1/3.svg', alt='Imagen decorativa')
            
          h4.text-center b) Un fichero informático que recurre a un sistema de soporte.
    
    p.mb-5(data-aos="fade-left") En cualquiera de las dos situaciones, el archivo facilita la acción de orden y clasificación para los documentos generados, ya sea por una o varias personas, o por un sistema social o institucional.

    h4.titulo1.mb-4(data-aos="fade-left") Clases de archivo

    p.mb-5(data-aos="fade-left") Los archivos se estructuran en una gran variedad o clases, algunos de los criterios clasificatorios definen los siguientes tipos:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-10.col-12
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/4.svg', alt='Imagen decorativa')

          div(x="6%" y="43%" tooltip="Archivo público" numero="+")
            h5 Archivo público:
            p Conjunto de documentos sistematizados y catalogados en archivos públicos que pertenecen a entidades oficiales — empresas estatales —, igualmente, se consideran como tales, aquellos que se disponen o se materializan por la prestación de un servicio público por entidades privadas.

          div(x="8%" y="82.5%" tooltip="Archivo privado" numero="+")
            h5 Archivo privado:
            p Son los documentos generados o producidos por personas naturales o jurídicas de derecho privado.

          div(x="94%" y="68%" tooltip="Archivo privado de interés público" numero="+")
            h5 Archivo privado de interés público:
            p Son aquellos archivos que, por el valor para la historia, la investigación, la ciencia o la cultura son de interés público, y pronunciado como tal por el legislador.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Estructura orgánica de la empresa
    
    p.mb-4(data-aos="fade-left") Para la organización de archivos en una empresa, es necesario conocer primero la estructura orgánica de la entidad; esta estructura organizativa se representa de forma gráfica, expresando la disposición en que se encuentran divididas las dependencias o unidades administrativas, de acuerdo con sus funciones.
    p.mb-4(data-aos="fade-left") A continuación, se detalla un organigrama empresarial:

    .row.justify-content-center.mb-5
      .col-12(data-aos="flip-up")
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Organigrama de una empresa.</i>
        figure
          img(src='@/assets/curso/temas/tema1/5.svg', alt='Imagen que contiene un organigrama que ejemplifica la estructura organizacional de una empresa, el cual tiene su respectivo director general, los vicepresidentes de diferentes departamentos y los roles de cada dependencia.')
    
    h5.titulo1.mb-5(data-aos="fade-left") Documentación 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-6.col-10.mb-3
            figure
              img(src="@/assets/curso/temas/tema1/10.png", alt="Imagen decorativa")
          .col-lg-6.col-12.mb-3
            p.mb-3 Básicamente es una labor intelectual, en donde se dispone de un elemento, con el objetivo de ordenarlo mediante el apoyo de un sistema esquemático, de un plan o de un marco previamente definido, el cual se trasforma en referente para la clasificación documental; haciendo referencia a la clasificación fundamentada en operaciones técnicas y administrativas, encargadas de realizar una agrupación documental, establecida de forma jerárquica, de manera que resulte factible conservar y recuperar la información.
            p.mb-0 Las agrupaciones documentales generan documentos desde una unidad administrativa — en ejercicio de sus funciones — las cuales, según el organigrama, dan origen a los fondos documentales, las secciones y las subsecciones:
      
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/6.svg", alt="Imagen decorativa").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/7.svg", alt="Imagen decorativa").img100
            .col
              h5 Fondo documental
              p Es el total de los documentos producidos o recibidos por una persona natural o jurídica en ejercicio de sus funciones. Los fondos documentales, son las agrupaciones documentales que constituyen el conjunto de actividades desarrolladas o materializadas, dentro de una empresa o por una persona natural.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/8.svg", alt="Imagen decorativa").img100
            .col
              h5 Sección
              p Es la división o unidad administrativa productora de documentos; es decir, las secciones son las subdivisiones administrativas de la entidad que la origina.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/9.svg", alt="Imagen decorativa").img100
            .col
              h5 Subsección
              p La subsección es una división de la sección documental; en este caso, podrían ser las oficinas.
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Legislación archivística

    p.mb-5(data-aos="fade-left") El objetivo de la reglamentación archivística, es el de proporcionar, tanto a instituciones, como a personas encargadas del desarrollo e investigación archivística, aquellos elementos dispuestos a manera de parámetros y lineamientos, con el fin de que su aplicación general facilite la acción de la comunidad archivística, tanto en su desempeño, como en el entendimiento de sus acciones al hablar un lenguaje común.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon1.color-primario.p-4
          p El presente desarrollo temático hace énfasis en la Ley 1712 de 2014, ya que esta normatividad habla y subraya la transparencia y el derecho que tiene toda persona o institución para acceder a la información.
    p(data-aos="fade-left") Este principio regulador, expresa la obligatoriedad para todas las empresas, de tener los documentos de archivo estructurados y organizados, con el fin de brindar información a quien lo requiera de forma oportuna y veraz.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
