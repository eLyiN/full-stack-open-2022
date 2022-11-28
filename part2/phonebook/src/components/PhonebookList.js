
function PhonebookList({ persons, filter }) {
    return (
        <div>
            {persons.filter(
                person => person.name.toLowerCase().includes(filter.toLowerCase())
            ).map(filtered => {
                return (
                    <div key={filtered.name} >
                        {filtered.name} {filtered.number}
                    </div>)
            })}
        </div>
    )
}

export default PhonebookList;