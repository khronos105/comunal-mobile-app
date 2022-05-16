<template>
    <ion-list>
        <comunal-item 
            v-for="comunal in comunals"
            :key="comunal.id"
            :comunal="comunal"
        ></comunal-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import ComunalItem from './ComunalItem.vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        ComunalItem,
        IonList
    },
    computed:{
        ...mapGetters('comunal', ['comunals'])
    }
}
</script>