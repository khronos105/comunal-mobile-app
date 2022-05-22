<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
            <ion-buttons v-if="show" slot="start">
                <ion-back-button :default-href="pageDefaultBackLink">Back</ion-back-button>
            </ion-buttons>
            <ion-title>{{ pageTitle }}</ion-title>
            <ion-buttons slot="end">
                <slot name="actions-end"></slot>
            </ion-buttons>
          </ion-toolbar>
      </ion-header>
      <ion-content>
          <slot />
      </ion-content>
  </ion-page>
</template>

<script>
import { 
    IonPage, 
    IonHeader, 
    IonTitle, 
    IonContent,
    IonToolbar,
    IonBackButton,
    IonButtons
} from '@ionic/vue'

export default {
    props:{
        pageTitle:{
            type: String,
            required: true
        },
        pageDefaultBackLink:{
            type: String,
            required: true
        }
    },
    components:{
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
        IonBackButton,
        IonButtons
    },
    computed:{
        show(){
            return (this.$route.path !== '/comunals') ? true : false;
        }
    }
}
</script>