const SearchFilter = (props) => {
    return (
        <div>
            filter shown with
            <input
                value={props.newFilter}
                onChange={props.setFilter}
            />
        </div>
    )
}

export default SearchFilter