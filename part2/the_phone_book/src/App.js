import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Header from './components/Header'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: 'Arto Hellas', number: '2289-439716' }]),
    [newName, setNewName] = useState(''),
    [newNumber, setNewNumber] = useState(''),
    [filter, setFilter] = useState('')

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

    setPersons(persons.concat(personObj))
    resetValue()
  }

  const handleChangeName = e => setNewName(e.target.value)
  const handleChangeNumber = e => setNewNumber(e.target.value)
  const handleChangeFilter = e => setFilter(e.target.value)

  return (
    <div>
      <article>
        <Header txt='phonebook' />
        <Filter value={filter} onChange={handleChangeFilter} />
      </article>
      <article>
        <Header txt='Add a new' />
        <PersonForm onFormSubmit={addPerson} name={newName} onChangeName={handleChangeName} number={newNumber} onChangeNumber={handleChangeNumber} />
      </article>
      <article>
        <Header txt='Numbers' />
        <Persons persons={persons} filter={filter} />
      </article>
    </div>
  )
}

export default App