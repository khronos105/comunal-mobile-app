<template>
    <base-layout :page-title="comunal ? comunal.date : 'Loging ...'" page-default-back-link="/comunals">
        <h2 v-if="!comunal">Could not found a comunal for the given Id.</h2>
        <comunal-overview
            v-else
            :comunal="comunal"
        ></comunal-overview>
    </base-layout>
</template>

<script>
import ComunalOverview from '../components/comunals/ComunalOverview.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    components:{
        ComunalOverview
    },
    data(){
        return {
            comunalId: this.$route.params.id,
        }
    },
    methods:{
        ...mapActions('comunal', ['getCommunals'])
    },
    computed:{
        ...mapGetters('comunal', ['getComunalById']),
        comunal() {
            return this.getComunalById(this.comunalId);
        }
    },
    created(){
        if(!this.comunal){
            this.getCommunals()
        }
    }
}
</script>

<style>

</style>