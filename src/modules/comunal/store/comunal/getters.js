
export const comunals = (state) => {
    return state.comunals;
}

export const getComunalById = (state) => (comunalID) => {
    const id = parseInt(comunalID)
    return state.comunals.find(comunal => comunal.id === id)
}


export const ammount = (state) => (comunalID) => {
    const comunal =  state.comunals.find(comunal => comunal.id === comunalID)
    let ammount = 0
    comunal.invoices.forEach((item, index) => {
        ammount += item.quantity
    })
    return ammount
}