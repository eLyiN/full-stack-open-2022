
function PhonebookList({ persons, filter, handleDelete }) {
    return (
        <div>
            {persons.filter(
                person => person.name.toLowerCase().includes(filter.toLowerCase())
            ).map(filtered => {
                return (
                    <div key={filtered.name} >
                        {filtered.name} {filtered.number} <button onClick={() => handleDelete(filtered.id)}>delete</button>
                    </div>)
            })}
        </div>
    )
}

export default PhonebookList;