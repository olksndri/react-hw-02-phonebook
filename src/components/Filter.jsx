export const Filter = ({ onInput, filterId, filter }) => { 
    return ( 
        <>
            <label htmlFor={filterId}>Search contacts by name</label>
            <input type="text" id={filterId} onInput={onInput} value={filter}/>
        </>
    )
}