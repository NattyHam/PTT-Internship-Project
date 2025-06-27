// src/components/layout/LayoutWrapper.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
