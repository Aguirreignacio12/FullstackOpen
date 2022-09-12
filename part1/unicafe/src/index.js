import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../src/index.css'

const Header = ({ txt }) => <h2>{txt}</h2>

const Button = ({ onClick, txt }) => <button onClick={onClick}>{txt} </button>

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <><p>No feedback given</p></>
  }
  return <>
    <span>Good {good}</span>
    <span>Neutral {neutral}</span>
    <span>Bad {bad}</span>
    <span>All {all}</span>
    <span>Average {average}</span>
    <span>Positive{positive}</span>
  </>
}

const App = () => {
  const [good, setGood] = useState(0),
    [neutral, setNeutral] = useState(0),
    [bad, setBad] = useState(0)

  let all = good + neutral + bad,
    average = (good * 1 + bad * -1) / all,
    positive = (all ? (good * 100) / all : 0) + '%'

  return (
    <div>
      <article>
        <Header txt={'give feedback'} />
        <Button onClick={() => { setGood(good + 1) }} txt={'good'} />
        <Button onClick={() => { setNeutral(neutral + 1) }} txt={'neutral'} />
        <Button onClick={() => { setBad(bad + 1) }} txt={'bad'} />
      </article>
      <article>
        <Header txt={'Statistics'} />
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
      </article>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)