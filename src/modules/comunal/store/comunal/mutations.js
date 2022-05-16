
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