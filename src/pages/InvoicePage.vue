<template>
  <base-layout page-title="All comunals" page-default-back-link="/comunals">
    <pdf v-if="src" :src="src" :page="1">
      <template slot="loading"> loading content here... </template>
    </pdf>
  </base-layout>
</template>

<script>
import pdf from "pdfvuer";
import "pdfjs-dist/build/pdf.worker.entry"; // not needed since v1.9.1
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    pdf,
  },
  data() {
    return {
      src: null,
      invoiceId: this.$route.params.id,
    };
  },
  created() {
    this.getInvoice(this.invoiceId).then(({ data }) => {
      this.src = data.docs[0].url;
    });
  },
  methods: {
    ...mapActions("comunal", ["getInvoice"]),
  },
};
</script>