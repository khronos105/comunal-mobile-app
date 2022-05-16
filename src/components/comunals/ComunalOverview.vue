<template>
  <ion-img :src="comunal.image" :alt="comunal.date"></ion-img>
  <h1>{{ comunal.date }}</h1>
  <ion-grid>
    <ion-row
      v-for="invoice in comunal.invoices"
      :key="invoice.id"
      class="ion-align-items-center"
    >
      <ion-col class="ion-align-items-center">{{ invoice.title }}</ion-col>
      <ion-col class="ion-align-items-center">
        <ion-button
          :router-link="`/invoice/${invoice.id}`"
        >
          <b>{{ invoice.quantity }}€</b>
          <ion-icon slot="end" :icon="newspaperOutline"></ion-icon>
        </ion-button>
      </ion-col>
    </ion-row>
    <hr />
    <ion-row class="ion-align-items-center">
      <ion-col class="ion-align-items-center">Total</ion-col>
      <ion-col class="ion-align-items-center">
        <b>{{ ammount(comunal.id) }}€</b>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {
  IonImg,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { newspaperOutline } from 'ionicons/icons';
import { mapGetters } from 'vuex'

export default {
  props: ["comunal"],
  components: {
    IonImg,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonButton,
  },
  data(){
      return {
          newspaperOutline
      }
  },
  computed:{
    ...mapGetters('comunal', ['ammount', 'getComunalById']),
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 30px;
}
ion-col {
  font-size: 20px;
  text-align: center;
}
hr {
  display: block;
  width: 100%;
  height: 1px;
  background: #ccc;
}
</style>