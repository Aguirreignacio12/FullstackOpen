import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, txt }) => {
  return (<button onClick={onClick}>{txt}</button>)
}

const Anecdote = ({ txt, votes }) => {
  return <>
    <p>{txt}</p>
    <p>has {votes} votes</p>
  </>
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0),
    [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const i = Math.floor(Math.random() * anecdotes.length)
    return setSelected(i)
  }

  const handleVoteAnecdote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  return <>
    <div>
      <Anecdote txt={anecdotes[selected]} votes={points[selected]} />
      <Button onClick={handleNextAnecdote} txt={'next anecdote'} />
      <Button onClick={handleVoteAnecdote} txt={'vote'} />
    </div>
  </>
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)