import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://xosedev-backend.com:8080/api/v3',
    timeout: 30000
})

export default instance;