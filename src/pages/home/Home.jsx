import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="pt-20 pl-64 pr-6 pb-6 "> 
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Search Bar */}
        <div className="flex items-center bg-white shadow rounded-xl px-4 py-2 w-full">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
            type="text"
            placeholder="Search tasks..."
            className="w-full bg-transparent outline-none text-sm text-gray-700"
        />
        </div>

        {/* My Task + Notification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* My Tasks */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-primary-dark">My Tasks</h3>
            <div className="space-y-3">
              <button onClick={() => navigate("/form")} className = "bg-primary text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                Fill Form
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
                Approve
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-primary-dark">Notification</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✔️ You have 2 pending approvals</li>
              <li>📝 New form RC0250 is available</li>
            </ul>
          </div>
        </div>

        {/* Dashboard */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6 text-primary-dark">Dashboard: Task Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Stats Overview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-100 rounded-lg p-4 text-center shadow-sm">
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-blue-600">30</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 text-center shadow-sm">
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">20</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-4 text-center shadow-sm">
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600">10</p>
              </div>
            </div>

            {/* Task List */}
            <ul className="space-y-2">
              <li className="bg-gray-100 p-3 rounded shadow-sm">📌 Task A: Waiting</li>
              <li className="bg-gray-100 p-3 rounded shadow-sm">✅ Task B: Done</li>
              <li className="bg-gray-100 p-3 rounded shadow-sm">🕒 Task C: In Progress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
