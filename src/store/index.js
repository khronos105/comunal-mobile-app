
import { createStore } from 'vuex'
import comunal from '@/modules/comunal/store/comunal'

const store = createStore({
    modules:{
        comunal
    }
})

export default store