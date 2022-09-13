import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ onClick, txt }) => <button onClick={onClick}>{txt}</button>


const Anecdote = ({ txt, votes }) => {
  return <>
    <p>{txt}</p>
    <p>has {votes} votes</p>
  </>
}

const MostVoted = ({ anecdotes, points }) => {
  const maxPoints = Math.max(...points),
    i = points.indexOf(maxPoints),
    maxVoted = anecdotes[i]

  if (maxPoints === 0) return (<p>anecdotes without vote</p>)
  return <>
    <p>{maxVoted}</p>
    <p>{maxPoints}</p>
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
      <article>
        <Header title={'Anecdote for the day'} />
        <Anecdote txt={anecdotes[selected]} votes={points[selected]} />
        <Button onClick={handleNextAnecdote} txt={'next anecdote'} />
        <Button onClick={handleVoteAnecdote} txt={'vote'} />
      </article>
      <article>
        <Header title={'Anecdote with most votes'} />
        <MostVoted anecdotes={anecdotes} points={points} />
      </article>
    </div>
  </>
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)