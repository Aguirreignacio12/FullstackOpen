import Content from './Content'
import Header from './Header'
import Total from './Total'
const Course = ({ course }) => {
    console.log(course)
    return <>
        <Header txt={course.name} />
        <ul>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </ul>
    </>
}
export default Course