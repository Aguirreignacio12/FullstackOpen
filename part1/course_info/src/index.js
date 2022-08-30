import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ parts }) => {
  return <>
    {console.log(parts)}
    <p>{parts[0].name} {parts[0].exercises}</p>
    <p>{parts[1].name} {parts[1].exercises}</p>
    <p>{parts[2].name} {parts[2].exercises}</p>
  </>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts} />
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development',
    parts = [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))