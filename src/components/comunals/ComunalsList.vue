<template>
    <ion-list>
        <comunal-item 
            v-for="comunal in comunals"
            :key="comunal.id"
            :comunal="comunal"
        ></comunal-item>
        <ion-text 
            color="danger" 
            v-if="comunals.length == 0"
            class="text-center"
        >
            <h5>No items found.</h5>
        </ion-text>
    </ion-list>
</template>

<script>
import { IonList, IonText } from '@ionic/vue'
import ComunalItem from './ComunalItem.vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        ComunalItem,
        IonList,
        IonText
    },
    computed:{
        ...mapGetters('comunal', ['comunals'])
    }
}
</script>

<style scoped>
.text-center{
    text-align: center;
}
</style>