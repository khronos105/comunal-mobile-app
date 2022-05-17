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

export const createComunal = async(context, dataToStore) => {
    const formData = new FormData();
    formData.append('invoices', JSON.stringify(dataToStore))
    console.log(dataToStore)
    //return await comunalApi.post(`/comunals/`, {'fuu':'bar'})
    const res = await axios.post('http://bilibov.tk/comunals', formData)
    console.log(res)
}