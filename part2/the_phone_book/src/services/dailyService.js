import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deletePerson = id => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request
}
const update = (id, newNumber) => {
  const request = axios.put(`${baseUrl}/${id}`, newNumber )
  return request.then(response => response.data)
}
export { getAll, create, deletePerson, update }