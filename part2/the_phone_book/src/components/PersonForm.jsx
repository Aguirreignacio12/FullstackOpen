import Button from './Button'

const PersonForm = ({ onFormSubmit, onChangeName, name, onChangeNumber, number }) => {

    return <>
        <form onSubmit={onFormSubmit}>
            <div>
                <label>name:</label>
                <input value={name} onChange={onChangeName} />
            </div>
            <div>
                <label>number:</label>
                <input value={number} onChange={onChangeNumber} />
            </div>
            <div>
                <Button type='submit' txt='add' />
            </div>
        </form>
    </>
}
export default PersonForm