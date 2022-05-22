<template>
  <base-layout
    page-title="Add a Comunal"
    page-default-back-link="/comunals"
  >
    <invoice-input 
        v-for="invoice in invoiceTypes"
        :key="invoice.id"
        :invoice="invoice"
        @update:modelValue="addData"
    ></invoice-input>
    <ion-button
        color="primary"
        expand="block"
        @click="submit"
    >Create</ion-button>
  </base-layout>
</template>

<script>
import { IonButton } from '@ionic/vue'
import InvoiceInput from '../components/comunals/InvoiceInput.vue'
import { mapActions } from 'vuex'

export default {
    components:{ 
        InvoiceInput,
        IonButton
    },
    data(){
        return{
            invoiceTypes: [],
            formData:[]
        }
    },
    methods:{
        ...mapActions('comunal', ['getInvoiceTitles', 'createComunal']),
        addData(data){
            this.formData.push(data)
        },
        async submit(){
            await this.createComunal(this.formData)
            this.formData = []
            this.$router.push('/comunals')
        }
    },
    created(){
        this.getInvoiceTitles()
            .then(({data}) => {
                this.invoiceTypes = data
            })
    },
}
</script>

<style>
    ion-button{
        margin-top: 40px
    }
</style>