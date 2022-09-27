import Course from "./Course"
const Courses = ({ courses }) => {
    const allCourses = courses.map(
        (course) =>
            <Course key={course.id} course={course} />)
    return allCourses
}
export default Courses