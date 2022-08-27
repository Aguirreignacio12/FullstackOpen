import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return <>
    <h1>{course}</h1>
  </>
}

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return <>
    <p>
      {part1} {exercises1}
    </p>
    <p>
      {part2} {exercises2}
    </p>
    <p>
      {part3} {exercises3}
    </p>
  </>
}
const Total = ({ exercises1, exercises2, exercises3 }) => {

  return <>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  </>
}

const App = () => {
  const course = 'Half Stack application development',
    part1 = 'Fundamentals of React',
    exercises1 = 10,
    part2 = 'Using props to pass data',
    exercises2 = 7,
    part3 = 'State of a component',
    exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} part2={part2} part3={part3}
        exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))