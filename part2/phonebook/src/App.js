import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  console.log('esto es persons', {persons})
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    }
  
 const handleNameChanges = (event) => {
  console.log('evento target value es',event.target.value)
    setNewName(event.target.value)
 }

 const Person = (props) => {
  return(<div>
    {props.name}
  </div>)
 }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handleNameChanges}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    {persons.map(person => 
      <Person name={person.name}/>)}
    </div>
  )
}

export default App