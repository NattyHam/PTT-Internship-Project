import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../pages/App';
import Formlist from '../pages/Formlist';
import InputForm from '../pages/InputForm';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/formlist/:rootcode" element={<Formlist />} />
        <Route path="/form/:formId" element={<InputForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
