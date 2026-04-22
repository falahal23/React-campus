import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign
} from "react-icons/fa";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

import PageHeader from "../components/PageHeader";

export default function Dashboard() {

  // 📊 DATA GRAFIK (Area Chart)
  const chartData = [
    { name: "Jan", orders: 30 },
    { name: "Feb", orders: 45 },
    { name: "Mar", orders: 60 },
    { name: "Apr", orders: 40 },
    { name: "May", orders: 80 },
    { name: "Jun", orders: 65 }
  ];

  // 🍩 DATA DONUT CHART
  const pieData = [
    { name: "Completed", value: 400 },
    { name: "Pending", value: 300 },
    { name: "Cancelled", value: 200 }
  ];

  const COLORS = ["#22c55e", "#eab308", "#ef4444"];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <PageHeader 
        title="Dashboard" 
        breadcrumb="Home"
      />

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

        {/* Orders */}
        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
          <div className="bg-hijau text-white rounded-full p-4">
            <FaShoppingCart />
          </div>
          <div>
            <p className="text-2xl font-bold">75</p>
            <p className="text-gray-400">Total Orders</p>
          </div>
        </div>

        {/* Delivered */}
        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
          <div className="bg-biru text-white rounded-full p-4">
            <FaTruck />
          </div>
          <div>
            <p className="text-2xl font-bold">175</p>
            <p className="text-gray-400">Delivered</p>
          </div>
        </div>

        {/* Cancelled */}
        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
          <div className="bg-merah text-white rounded-full p-4">
            <FaBan />
          </div>
          <div>
            <p className="text-2xl font-bold">40</p>
            <p className="text-gray-400">Cancelled</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
          <div className="bg-kuning text-white rounded-full p-4">
            <FaDollarSign />
          </div>
          <div>
            <p className="text-2xl font-bold">Rp.128K</p>
            <p className="text-gray-400">Revenue</p>
          </div>
        </div>

      </div>

      {/* CHART SECTION */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* 📈 AREA CHART */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Orders Overview
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Area 
                type="monotone" 
                dataKey="orders" 
                stroke="#22c55e" 
                fill="#bbf7d0"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 🍩 DONUT CHART */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Order Status
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}