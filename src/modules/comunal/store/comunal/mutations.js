
export const addMemory = (state, memoryData) => {
    const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
    }

    state.comunals.unshift(newMemory)
}

export const setComunals = (state, data) => {
    state.comunals = [ ...data ]
}

export const setComunal = (state, data) => {
    state.comunals.unshift(data)
}

export const deleteComunal = (state, data) => {
   state.comunals = state.comunals.filter(item => item.id !== data.id)
}

