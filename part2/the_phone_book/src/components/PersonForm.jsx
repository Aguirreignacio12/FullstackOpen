import Button from './Button'
import StepForm from './StepForm'

const PersonForm = ({ onFormSubmit, onChangeName, name, onChangeNumber, number }) => {

    return <>
        <form onSubmit={onFormSubmit}>
            <StepForm htmlFor='name * ' value={name} onChange={onChangeName} />
            <StepForm htmlFor='number * ' value={number} onChange={onChangeNumber} />
            <div>
                <Button type='submit' txt='add' />
            </div>
        </form>
    </>
}
export default PersonForm