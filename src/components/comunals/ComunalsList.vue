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

export default {
    components:{
        ComunalItem,
        IonList
    },
    props:{
        comunals:{
            type: Array
        }
    }
}
</script>