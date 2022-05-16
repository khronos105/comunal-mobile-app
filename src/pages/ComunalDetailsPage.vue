<template>
    <base-layout :page-title="comunal ? comunal.title : 'Loging ...'" page-default-back-link="/comunals">
        <h2 v-if="!comunal">Could not found a comunal for the given Id.</h2>
        <comunal-overview
            v-else
            :comunal="comunal"
        ></comunal-overview>
    </base-layout>
</template>

<script>
import ComunalOverview from '../components/comunals/ComunalOverview.vue'

export default {
    components:{
        ComunalOverview
    },
    data(){
        return {
            comunalId: this.$route.params.id,
        }
    },
    computed:{
        comunal() {
            return this.$store.getters.comunal(this.comunalId);
        }
    }
}
</script>

<style>

</style>