import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Header from './components/Header'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const verifyName = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (verifyName) {
      alert(`${newName} is already added to phonebook.`)
      setNewName('')
      return
    }

    const personObj = {
      name: newName,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObj))
    setNewName('')
  }

  const handleChangeName = e => setNewName(e.target.value)


  return (
    <div>
      <article>
        <Header txt='phonebook' />
        <PersonForm onFormSubmit={addPerson} name={newName} onChangeName={handleChangeName} />
      </article>
      <article>
        <Header txt='Numbers' />
        <Persons persons={persons} />
      </article>
    </div>
  )
}

export default App