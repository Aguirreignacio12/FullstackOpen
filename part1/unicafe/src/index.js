import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../src/index.css'

const Header = ({ txt }) => <h2>{txt}</h2>

const Button = ({ onClick, txt }) => <button onClick={onClick}>{txt}</button>

const Statistic = ({ txt, value }) => {
  return (
    <tr><td>{txt}</td><td>{value}</td></tr>)
}

const Statistics = ({ clicks }) => {
  let all = clicks.good + clicks.neutral + clicks.bad,
    average = (clicks.good * 1 + clicks.bad * -1) / all,
    positive = (all ? (clicks.good * 100) / all : 0) + '%'

  if (all === 0) {
    return (<p>No feedback given</p>)
  }

  return <>
    <table>
      <tbody>
        <Statistic txt={'good'} value={clicks.good} />
        <Statistic txt={'neutral'} value={clicks.neutral} />
        <Statistic txt={'bad'} value={clicks.bad} />
        <Statistic txt={'all'} value={all} />
        <Statistic txt={'average'} value={average} />
        <Statistic txt={'positive'} value={positive} />
      </tbody>
    </table>
  </>
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks, good: clicks.good + 1
    }
    setClicks(newClicks)
  }

  const handleNeutralClicks = () => {
    const newClicks = {
      ...clicks, neutral: clicks.neutral + 1
    }
    setClicks(newClicks)
  }

  const handleBadClicks = () => {
    const newClicks = {
      ...clicks, bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <article>
        <Header txt={'give feedback'} />
        <Button onClick={handleGoodClick} txt={'good'} />
        <Button onClick={handleNeutralClicks} txt={'neutral'} />
        <Button onClick={handleBadClicks} txt={'bad'} />
      </article>
      <article>
        <Header txt={'Statistics'} />
        <Statistics clicks={clicks} />
      </article>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)