import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rootcodeFormMap from '../configs/rootcodeFormMap'
import '../index.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-blue-500 text-white p-4 rounded">
        Hello, Ptt Link!
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Select Rootcode</h1>
        <ul className="grid gap-2">
          {Object.keys(rootcodeFormMap).map((code) => (
            <li key={code}>
              <button
                onClick={() => navigate(`/formlist/${code}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {code}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
