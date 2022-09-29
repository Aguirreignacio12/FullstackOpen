const PersonForm = ({ onFormSubmit, onChangeName, name }) => {

    return <>
        <form onSubmit={onFormSubmit}>
            <div>
                <label>name:</label>
                <input value={name} onChange={onChangeName} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </>
}
export default PersonForm