
const PersonForm = (props) => {
    return (
        <form onSubmit={props.newPersonEvent}>
            <div>
                name: <input value={props.name} onChange={props.setName} />
            </div>
            <div>
                number: <input value={props.number} onChange={props.setNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm