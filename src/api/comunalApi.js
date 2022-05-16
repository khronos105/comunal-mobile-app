
import axios from 'axios'

const comunalApi = axios.create({
    baseURL: 'http://bilibov.tk'
})

export default comunalApi