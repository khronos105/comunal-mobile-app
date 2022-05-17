<template>
    <ion-list>
        <ion-list-header>
            <ion-label
                color="dark"
            >
                {{ invoice.title }}
            </ion-label>
        </ion-list-header>
        <ion-item>
            <ion-label position="floating">Ammount</ion-label>
            <ion-input v-model="ammount"></ion-input>
        </ion-item>
        <ion-item>
            <input 
                class="input-file" 
                type="file" 
                @change="onSelectedDoc" 
                ref="docSelector"
            />
            <ion-button @click="onSelectDoc">Subir Doc</ion-button>
        </ion-item>
    </ion-list>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonSelect, IonListHeader, IonButton } from '@ionic/vue'
export default {
    components:{ 
        IonList, 
        IonItem, 
        IonLabel, 
        IonInput, 
        IonTextarea,
        IonSelect,
        IonListHeader,
        IonButton
    },
    props:['invoice', 'modelValue'],
    emits:['update:modelValue'],
    data(){
        return {
            ammount: null,
            file: null
        }
    },
    methods:{
        onSelectDoc(){
            this.$refs.docSelector.click()
            //this.$refs.docSelector.click()
        },
        onSelectedDoc(e){
            const file = e.target.files[0];
            if( !file ) {
                this.file = null
                return
            }

            const fr = new FileReader();
            fr.onload = () => {
                this.file = fr.result

                this.$emit('update:modelValue', {
                    'title': this.invoice.title,
                    'quantity': this.ammount,
                    'file': this.file
                })
            }

            fr.readAsDataURL( file )
        },
    }
}
</script>

<style scoped>
    .input-file{
        display: none;
    }
</style>