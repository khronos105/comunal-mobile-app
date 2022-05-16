import comunalApi from '@/api/comunalApi'

export const addMemory = async(context, memoryData) => {
    context.commit('addMemory', memoryData)
}

export const getCommunals = async(context) => {
    comunalApi.get('/comunals')
        .then(({data}) => {
            context.commit('setComunals', data)
        })
}

export const getInvoice = async(context, invoiceId) => {
    return comunalApi.get(`/invoices/${invoiceId}`)
}