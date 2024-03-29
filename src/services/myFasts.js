import axios from 'axios'
const baseUrl = '/api/history'

export const getAll = () => {
 const request = axios.get(baseUrl)
    return request.then(response => response.data)
    
}

export const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
 return request.then((response) => response.data)
}

export const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
 return request.then((response) => response.data)
}

export const del = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

// export default {
//     getAll: getAll,
//     create: create,
//     update: update,
// }
