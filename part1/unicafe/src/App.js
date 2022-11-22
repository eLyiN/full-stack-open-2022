import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const result = ((props.good - props.bad) / (props.good + props.bad + props.neutral))
  const percentage = (props.good / (props.good + props.bad + props.neutral) * 100)
  if (props.feedback === "average") {
    return (
      <div>
        {props.feedback} {result}
      </div>
    )
  }
  else if (props.feedback === "positive") {
    return (
      <div>
        {props.feedback} {percentage} %
      </div>
    )
  }
  return (
    <div>
      {props.feedback} {props.counter}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics feedback="good" counter={good} />
      <Statistics feedback="neutral" counter={neutral} />
      <Statistics feedback="bad" counter={bad} />
      <Statistics feedback="total" counter={good + bad + neutral} />
      <Statistics feedback="average" good={good} bad={bad} neutral={neutral} />
      <Statistics feedback="positive" good={good} bad={bad} neutral={neutral} />
    </div>

  )
}

export default App