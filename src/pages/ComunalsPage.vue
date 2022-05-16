<template>
    <base-layout 
        page-title="All comunals" 
        page-default-back-link="/comunals"
    >
        <template v-slot:actions-end>
            <ion-button 
                router-link="/comunals/add"
            >
                <ion-icon
                    slot="icon-only" 
                    :icon="add"
                ></ion-icon>
            </ion-button>
        </template>
        <comunals-list :comunals="comunals"></comunals-list>
    </base-layout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue'
import { add } from 'ionicons/icons'
import ComunalsList from '../components/comunals/ComunalsList.vue';

export default {
    components:{
        ComunalsList,
        IonButton,
        IonIcon
    },
    data(){
        return {
            add
        }
    },
    computed:{
        comunals(){
            return this.$store.getters.comunals;
        }
    }
}
</script>