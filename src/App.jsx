import { useState } from 'react'
import InfoContainer from './info-container.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <InfoContainer />
  )
}

export default App