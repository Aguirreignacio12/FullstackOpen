import Part from './Part'
const Content = ({ parts }) => {
    console.log(parts)
    return <>
        <ul>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </ul>
    </>
}
export default Content