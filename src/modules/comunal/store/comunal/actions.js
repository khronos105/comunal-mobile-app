import comunalApi from '@/api/comunalApi'
import axios from 'axios'

export const addMemory = async(context, memoryData) => {
    context.commit('addMemory', memoryData)
}

export const getCommunals = async(context) => {
    await comunalApi.get('/comunals')
        .then(({data}) => {
            context.commit('setComunals', data)
        })
}

export const getInvoiceTitles = async(context) => {
    return await comunalApi.get('/invoices')
}

export const getInvoice = async(context, invoiceId) => {
    return await comunalApi.get(`/invoices/${invoiceId}`)
}

export const createComunal = async(context, dataStore) => {
    const dataToStore = {...dataStore}
    const formData = new FormData();
    formData.append('invoices', JSON.stringify(dataToStore))
    await axios.post('http://bilibov.tk/comunals', formData).then(data => {
        if(data.status === 201){
            context.commit('setComunal', data.data)
        }
    })
}

export const deleteComunal = async(context, invoiceId) => {
    await axios.delete(`http://bilibov.tk/comunals/${invoiceId}`).then(data => {
        if(data.status === 200){
            context.commit('deleteComunal', data.data)
        }
    }).catch(e => {
        console.log(e)
    })
}

