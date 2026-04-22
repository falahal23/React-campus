import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Customers from './pages/Customers';
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

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

        <Route path="/" element={<Dashboard />} />

  <Route 
    path="/error-400" 
    element={
      <ErrorPage
        code="400"
        message="Bad Request"
        image="/images/400.png"
      />
    }
  />

  <Route 
    path="/error-401" 
    element={
      <ErrorPage
        code="401"
        message="Unauthorized Access"
        image="/images/401.png"
      />
    }
  />

  <Route 
    path="/error-403" 
    element={
      <ErrorPage
        code="403"
        message="Forbidden Access"
        image="/images/403.png"
      />
    }
  />

  {/* 404 */}
  <Route 
    path="*" 
    element={
      <ErrorPage
        code="404"
        message="Page Not Found"
        image="/images/404.png"
      />
    }
  />
    </Routes>
</div>
</div>
  )
       
}

export default App
