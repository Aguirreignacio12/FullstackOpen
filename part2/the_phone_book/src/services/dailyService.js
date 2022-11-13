import axios from 'axios'
const baseUrl = 'http://localhost:3000/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const detelePerson = id => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request
}
const update = (id, newNumber) => {
  const request = axios.put(`${baseUrl}/${id}`, newNumber )
  return request.then(response => response.data)
}
export { getAll, create, detelePerson, update }