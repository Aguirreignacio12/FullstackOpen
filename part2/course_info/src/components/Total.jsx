const Total = ({ parts }) => {
    const all = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <li>Total of {all} exercises</li>
}
export default Total