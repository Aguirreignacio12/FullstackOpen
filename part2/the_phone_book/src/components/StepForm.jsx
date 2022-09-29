const StepForm = ({ htmlFor, value, onChange }) => {
    return (
        <div>
            <label htmlFor="htmlFor">{htmlFor}</label>
            <input value={value} onChange={onChange} />
        </div>)

}
export default StepForm