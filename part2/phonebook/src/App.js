import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PhonebookList from './components/PhonebookList'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const addNewName = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName('')
      setNewNumber('')
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChanges = (event) => {
    console.log('evento target value es', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChanges = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={newFilter} setFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        name={newName} number={newNumber}
        setNumber={handleNumberChanges} setName={handleNameChanges}
        newNumberEvent={addNewName} />
      <h3>Numbers</h3>
      <PhonebookList persons={persons} filter={newFilter} />
    </div>
  )
}

export default App