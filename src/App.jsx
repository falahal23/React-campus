import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Customers from './pages/Customers';
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot" element={<Forgot/>} />
      </Route>
    </Routes>
  )
}

export default App;