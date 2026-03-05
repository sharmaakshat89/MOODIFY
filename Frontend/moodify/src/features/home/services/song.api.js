import axios from 'axios'

const api= axios.create({
    baseUrl:'http://localhost:5000',
    withCredentials:true
})

export async function getSong(mood){
    const response= await api.get('/api/songs?mood=' + mood)
    return response.data
}