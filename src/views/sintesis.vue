<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe a través de un mapa conceptual la temática tratada durante este componente formativo, el cual destaca los aspectos más relevantes que hacen parte de los principios archivísticos y Tablas de Retención Documental.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene el mapa conceptual que resume la temática tratada durante este componente formativo, partiendo del hecho que para que haya una adecuada organización documental, debe existir una clasificación y ciclo vital de los documentos; además, de acuerdo a la normatividad de la Ley General de Archivos, se deben implementar las Tablas de Retención Documental.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
