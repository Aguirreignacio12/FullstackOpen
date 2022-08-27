import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return <>
    <h1>{course}</h1>
  </>
}

const Part = ({part,exercise}) => {
  
  return (
    <p>{part} {exercise}</p>
  )
}

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  )
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
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))