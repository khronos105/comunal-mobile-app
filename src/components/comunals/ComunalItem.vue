<template>
    <ion-item :router-link="`/comunals/${comunal.id}`">
        <ion-thumbnail slot="start">
            <ion-img :src="comunal.image" :alt="comunal.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ comunal.title }}
        </ion-label>
        <ion-note slot="end" color="primary">
            {{ ammount(comunal) }}€
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
    methods:{
        ammount(comunal){
            return this.$store.getters.ammount(comunal.id);
        }
    }
}
</script>