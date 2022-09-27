import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ course }) => {
    console.log(course)
    return <>
        <article>
            <Header txt={course.name} size={2}/>
            <ul>
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </ul>
        </article>
    </>
}
export default Course