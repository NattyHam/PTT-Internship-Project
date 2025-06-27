import { NavLink, useNavigate } from "react-router-dom";
import { Home, Bell, FileText, LogOut, List, BarChart2, Eye } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItem = (path, label, Icon) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 ${
          isActive ? "bg-primary font-bold" : ""
        }`
      }
    >
      <Icon size={18} />
      {label}
    </NavLink>
  );

  return (
    <aside className="fixed top-24 left-4 bottom-4 w-56 bg-white shadow-lg rounded-2xl p-5 flex flex-col justify-between z-20">


      <nav className="space-y-2">
        {navItem("/", "Home", Home)}
        {navItem("/notification", "Notification", Bell)}
        <div className="text-xs text-gray-500 px-4">Task</div>
        {navItem("/mytask", "My Task", List)}
        {navItem("/form", "Form", FileText)}
        {navItem("/report", "Report", BarChart2)}
        {navItem("/view-data", "View Data", Eye)}
      </nav>

      <div className="mt-auto px-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
