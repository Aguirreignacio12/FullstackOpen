import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Header from './components/Header'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '2289-439716' }
  ])
  const [newName, setNewName] = useState(''),
    [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const verifyName = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )
    const resetValue = () => {
      setNewName('')
      setNewNumber('')
    }

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


  return (
    <div>
      <article>
        <Header txt='phonebook' />
        <PersonForm onFormSubmit={addPerson} name={newName} onChangeName={handleChangeName} number={newNumber} onChangeNumber={handleChangeNumber} />
      </article>
      <article>
        <Header txt='Numbers' />
        <Persons persons={persons} />
      </article>
    </div>
  )
}

export default App