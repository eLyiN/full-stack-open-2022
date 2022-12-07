import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PhonebookList from './components/PhonebookList'
import SearchFilter from './components/SearchFilter'
import personService from './services/persons'
import './index.css'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    console.log('personObject', personObject)
    const duplicate = persons.find(person => person.name === newName)
    console.log('duplicate', duplicate)
    if (duplicate) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(duplicate.id, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== duplicate.id ? person : response))
            setNewName('')
            setNewNumber('')
          })
          .then(response => {
            setErrorMessage(
              `Updated ${personObject.name}`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${personObject.name} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== duplicate.id))
          })
      }
    } else {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('');
          setNewNumber('');
        })
        .then(response => {
          setErrorMessage(
            `Added ${personObject.name}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }


  const handleNameChanges = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChanges = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    console.log('person', person)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <SearchFilter filter={newFilter} setFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        name={newName} number={newNumber}
        setNumber={handleNumberChanges} setName={handleNameChanges}
        newPersonEvent={addPerson} />
      <h3>Numbers</h3>
      <PhonebookList persons={persons} filter={newFilter} handleDelete={handleDelete} />
    </div>
  )
}

export default App