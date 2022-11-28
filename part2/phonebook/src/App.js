import { useState } from 'react'

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
      <div>
        filter shown with
        <input
          value={newFilter}
          onChange={handleFilter}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addNewName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChanges}
          /><br />
          number:
          <input
            value={newNumber}
            onChange={handleNumberChanges}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(
        person => person.name.toLowerCase().includes(newFilter.toLowerCase())
      ).map(filtered => {
        return (
          <div key={filtered.name} >
            {filtered.name} {filtered.number}
          </div>)
      })}
    </div>
  )
}

export default App