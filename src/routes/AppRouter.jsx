// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";
import FormEntry from "../pages/form/FormEntry";
import FormList from "../pages/form/FormList";
import InputForm from "../pages/form/InputForm";
import LayoutWrapper from "../components/layout/LayoutWrapper";

const isAuthenticated = () => !!localStorage.getItem("token");

const AppRouter = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            isAuthenticated() ? <LayoutWrapper /> : <Navigate to="/login" />
          }
        >
          <Route index element={<Home />} />
          <Route path="form" element={<FormEntry />} />
          <Route path="form/list" element={<FormList />} />
          <Route path="form/:routeId/:formId" element={<InputForm />} />

        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
