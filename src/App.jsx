// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Customers from './pages/Customers';
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex min-h-screen w-full bg-#f3f4f6'>
        <Sidebar/>
  
  <div className="flex-1 p-4">
    <Header />
    
    <Routes>
        <Route path="*"element={<NotFound/>} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
    </Routes>
</div>
</div>
  )
       
}

export default App
