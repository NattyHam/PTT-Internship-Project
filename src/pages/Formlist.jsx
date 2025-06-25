import { useParams, useNavigate } from 'react-router-dom'
import rootcodeFormMap from '../configs/rootcodeFormMap'

function Formlist() {
  const { rootcode } = useParams()
  const navigate = useNavigate()

  const forms = rootcodeFormMap[rootcode] || []

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Forms for {rootcode}</h1>

        <ul className="space-y-2">
          {forms.map((formId) => (
            <li key={formId}>
              <button
                onClick={() => navigate(`/form/${formId}`)}
                className="bg-[#00adef] text-white px-4 py-2 rounded"
              >
                Form {formId}
              </button>
            </li>
          ))}
        </ul>
      
    </div>
  )
}

export default Formlist
