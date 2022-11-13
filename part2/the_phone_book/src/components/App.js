import { React, useEffect, useState } from 'react'
import PersonForm from './PersonForm'
import Header from './Header'
import { getAll, create, detelePerson, update } from '../services/dailyService'
import Notification from './Notificacion'
import Persons from './Persons'
import Filter from './Filter'
import '../App.css'

const App = () => {
  const [persons, setPersons] = useState([]),
    [newName, setNewName] = useState(''),
    [newNumber, setNewNumber] = useState(''),
    [filter, setFilter] = useState(''),
    [successMessage, setSuccessMessage] = useState(null),
    [errorMessage, setErrorMessage] = useState(null)

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
    const personObj = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (existingPerson) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const changedNumber = { ...existingPerson, number: newNumber }
      const id = existingPerson.id

      update(id, changedNumber)
        .then(returnedPerson => {
          setPersons(persons
            .map(person =>
              (person.id !== id ? person : returnedPerson)
            ))
          setSuccessMessage(`number of ${returnedPerson.name} updated`)
        })
      resetValue()
      return
    }

    if (newName === '' || newNumber === '') {
      alert(`All fields are required.`)
      resetValue()
      return
    }

    create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setSuccessMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 2000);
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
      <article className='art-form'>
        <Header txt='Add a new' />
        <PersonForm onFormSubmit={addPerson} name={newName} onChangeName={handleChangeName} number={newNumber} onChangeNumber={handleChangeNumber} />
        <Notification successMessage={successMessage} errorMessage={errorMessage} />
      </article>
      <article className='art-search'>
        <Header txt='phonebook' />
        <Filter value={filter} onChange={handleChangeFilter} />
      </article>
      <article className='art-persons'>
        <Header txt='Numbers' />
        <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
      </article>
    </div>
  )
}

export default App