
import axios from 'axios'

const comunalApi = axios.create({
    baseURL: 'http://bilibov.tk',
    headers: {
        'Content-Type':'application/json'
    }
})

export default comunalApi