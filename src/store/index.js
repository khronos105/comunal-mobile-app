import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            comunals: [
                { 
                    id: 'comunal1', 
                    title: '31-05-2022', 
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    invoices:[
                        {
                            id: 'invoice1',
                            title: 'Endesa Luz',
                            ammount: 87,
                            file: 'https://khronos.tk/invoices/files/invoice.pdf'
                        },
                        {
                            id: 'invoice2',
                            title: 'Digi',
                            ammount: 21,
                            file: 'https://khronos.tk/invoices/files/invoice2.pdf'
                        },
                        {
                            id: 'invoice3',
                            title: 'Endesa Gas',
                            ammount: 200,
                            file: 'https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf'
                        }
                    ]
                },
                { 
                    id: 'comunal2', 
                    title: '31-04-2022', 
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    invoices:[
                        {
                            id: 'invoice4',
                            title: 'Endesa Luz',
                            ammount: 56,
                            file: 'https://docs.swissuplabs.com/images/m2/pdf-invoices/frontend/invoice-stripes.png'
                        },
                        {
                            id: 'invoice5',
                            title: 'Digi',
                            ammount: 21,
                            file: 'https://docs.swissuplabs.com/images/m2/pdf-invoices/frontend/invoice-stripes.png'
                        },
                        {

                            id: 'invoice6',
                            title: 'Endesa Gas',
                            ammount: 240,
                            file: 'https://docs.swissuplabs.com/images/m2/pdf-invoices/frontend/invoice-stripes.png'
                        }
                    ]
                },
            ]
        }
    },
    mutations: {
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            }

            state.comunals.unshift(newMemory)
        }
    },
    actions: {
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData)
        }
    },
    getters:{
        comunals(state){
            return state.comunals
        },
        comunal(state){
            return (comunalID) => {
                return state.comunals.find(comunal => comunal.id === comunalID)
            } 
        },
        ammount: (state) => (comunalID) => {
            const comunal =  state.comunals.find(comunal => comunal.id === comunalID)
            let ammount = 0
            comunal.invoices.forEach((item, index) => {
                ammount += item.ammount
            })
            return ammount
        },
        invoice: (state) => (invoiceID) => {
            let invoices = [];
            state.comunals.forEach((comunal, index) => {
                invoices.push(comunal.invoices)
            })
            return invoices.flat().find(invoice => invoice.id === invoiceID)
        },
    }
});

export default store