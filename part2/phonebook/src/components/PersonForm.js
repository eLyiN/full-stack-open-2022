
const PersonForm = (props) => {
    return (
        <form onSubmit={props.newNumberEvent}>
            <div>
                name:
                <input
                    value={props.newName}
                    onChange={props.setName}
                /><br />
                number:
                <input
                    value={props.newNumber}
                    onChange={props.setNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm