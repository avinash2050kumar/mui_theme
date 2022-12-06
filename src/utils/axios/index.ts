import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000' //Replace with env value

const axiosClient = axios.create({
	baseURL: API_BASE_URL,
	responseType: 'json',
	timeout: 20 * 1000 // 20 seconds
})

export default axiosClient
