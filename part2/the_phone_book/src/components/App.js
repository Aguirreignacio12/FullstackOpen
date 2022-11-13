import { React, useEffect, useState } from 'react'
import PersonForm from './PersonForm'
import Header from './Header'
import { getAll, create, detelePerson } from '../services/dailyService'
import Persons from './Persons'
import Filter from './Filter'
import '../App.css'

const App = () => {
  const [persons, setPersons] = useState([]),
    [newName, setNewName] = useState(''),
    [newNumber, setNewNumber] = useState(''),
    [filter, setFilter] = useState('')

  const getPersons = () => {
    getAll().then(
      persons =>
        setPersons(persons)
    )
      .catch(<h1>Obteniendo datos del servidor </h1>)
  }

  useEffect(getPersons, [])

  const addPerson = (e) => {
    e.preventDefault()

    const resetValue = () => {
      setNewName('')
      setNewNumber('')
    }

    const verifyName = persons.some(
      person =>
        person.name.toLowerCase() === newName.toLowerCase()
    )

    if (verifyName) {
      alert(`${newName} is already added to phonebook.`)
      resetValue()
      return
    }

    if (newName === '' || newNumber === '') {
      alert(`All fields are required.`)
      resetValue()
      return
    }

    const personObj = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        resetValue()
      })
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`delete ${name}?`)) {
      detelePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
    return
  }


  const handleChangeName = e => setNewName(e.target.value)
  const handleChangeNumber = e => setNewNumber(e.target.value)
  const handleChangeFilter = e => setFilter(e.target.value)

  return (
    <div className='App-content'>
      <article className='art-search'>
        <Header txt='phonebook' />
        <Filter value={filter} onChange={handleChangeFilter} />
      </article>
      <article className='art-form'>
        <Header txt='Add a new' />
        <PersonForm onFormSubmit={addPerson} name={newName} onChangeName={handleChangeName} number={newNumber} onChangeNumber={handleChangeNumber} />
      </article>
      <article className='art-persons'>
        <Header txt='Numbers' />
        <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
      </article>
    </div>
  )
}

export default App