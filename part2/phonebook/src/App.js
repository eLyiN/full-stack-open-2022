import { useState } from 'react'
import PersonForm from './components/PersonForm'
import PhonebookList from './components/PhonebookList'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

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