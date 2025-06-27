import { useLocation, useNavigate } from "react-router-dom";
import rcFormMap from "../../configs/rcFormMap";

const FormList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const route = searchParams.get("route");

  const formList = rcFormMap[route] || [];

  const handleSelectForm = (formId) => {
    navigate(`/form/${route}/${formId}`);

  };

  return (
    <div className="pt-20 pl-64 pr-6 pb-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-primary-dark mb-4 text-center">
          Forms under {route}
        </h2>

        {formList.length === 0 ? (
          <p className="text-center text-gray-500">No forms available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formList.map((formId) => (
              <div
                key={formId}
                onClick={() => handleSelectForm(formId)}
                className="cursor-pointer bg-white shadow rounded-lg p-4 hover:bg-blue-50"
              >
                <h3 className="text-lg font-semibold text-primary">{formId}</h3>
                <p className="text-sm text-gray-600">Click to fill this form</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormList;
