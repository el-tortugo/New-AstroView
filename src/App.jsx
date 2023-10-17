import { useState } from 'react'
import InfoContainer from './info-container.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Astroview</h1>
    <h2>Uses NASA APIs to display past and present pictures of the day!</h2>
    <InfoContainer />
    <h2>Made by Kehinde Adeoso</h2>
    </div>

  )
}

export default App