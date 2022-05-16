<template>
    <ion-item :router-link="`/comunals/${comunal.id}`">
        <ion-thumbnail slot="start">
            <ion-img :src="comunal.image" :alt="comunal.date"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ comunal.date }}
        </ion-label>
        <ion-note slot="end" color="primary">
            {{ ammount(comunal.id) }}€
        </ion-note>
    </ion-item>
</template>

<script>
import { 
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
    IonNote
} from '@ionic/vue'
import { mapGetters } from 'vuex'

export default {
    props:{
        comunal:{
            type: Object
        }
    },
    components:{
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
        IonNote
    },
    computed:{
        ...mapGetters('comunal', ['ammount'])
    }
}
</script>