import { useState } from "react";
import { useNavigate } from "react-router-dom";
import rcFormMap from "../../configs/rcFormMap";
import { ArrowLeft } from "lucide-react";
import Home from "../home/Home";

const pigTypes = ["Cleaning", "Gauging", "ILI"];

const FormEntry = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("fill");
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedPigType, setSelectedPigType] = useState("");

  const handleNext = () => {
    if (!selectedRoute || !selectedPigType) {
      alert("Please select both route code and pig type");
      return;
    }
    const formId = rcFormMap[selectedRoute];
    navigate(`/form/list?route=${selectedRoute}`);
  };

  return (
    <div className="pt-20 pl-64 pr-6 pb-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Tab Bar + Back Button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate("/")} className="text-primary hover:text-blue-600">
              <ArrowLeft size={20} />
            </button>
            <h2 className="text-xl font-bold text-primary-dark">Form</h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-t-xl shadow-sm overflow-hidden ">
          <button
            onClick={() => setActiveTab("fill")}
            className={`flex-1 px-6 py-3 text-center text-sm font-semibold transition ${
              activeTab === "fill"
                ? "bg-blue-100 text-primary-dark border-b-2 border-primary"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Fill new form
          </button>
          <button
            onClick={() => setActiveTab("view")}
            className={`flex-1 px-6 py-3 text-center text-sm font-semibold transition ${
              activeTab === "view"
                ? "bg-blue-100 text-primary-dark border-b-2 border-primary"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            View filled form
          </button>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-b-xl shadow p-8 ">
          {activeTab === "fill" ? (
            <>
              <h3 className="text-lg font-semibold mb-6 text-center">Fill new Form</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Route Code */}
                <div>
                  <label className="block text-sm font-medium mb-2">Select route code</label>
                  <select
                    className="w-full border px-4 py-2 rounded shadow-sm text-center"
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    {Object.keys(rcFormMap).map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pig Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">Select Pig type</label>
                  <select
                    className="w-full border px-4 py-2 rounded text-center shadow-sm"
                    value={selectedPigType}
                    onChange={(e) => setSelectedPigType(e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    {pigTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="bg-primary text-white px-8 py-2 rounded hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 py-20">Coming Soon...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormEntry;
