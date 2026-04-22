import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";
import { useState } from "react";

export default function Customers() {

  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Gold"
  });

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = () => {
    const newCustomer = {
      customerId: "C" + (customers.length + 1).toString().padStart(3, "0"),
      ...formData
    };

    setCustomers([...customers, newCustomer]);
    setShowForm(false);

    // reset form
    setFormData({
      customerName: "",
      email: "",
      phone: "",
      loyalty: "Gold"
    });
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <PageHeader
        title="Customers"
        breadcrumb="Customer List"
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Add Customer
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow w-[400px] space-y-4">

            <h2 className="text-lg font-semibold">Add Customer</h2>

            <input
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Customer Name"
              className="w-full border p-2 rounded"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 rounded"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border p-2 rounded"
            />

            <select
              name="loyalty"
              value={formData.loyalty}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option>Gold</option>
              <option>Silver</option>
              <option>Bronze</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-3 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-3 py-2 bg-blue-500 text-white rounded"
              >
                Submit
              </button>
            </div>

          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">

          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3">Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {customers.length > 0 ? (
              customers.map((cust) => (
                <tr key={cust.customerId} className="border-b hover:bg-gray-50">

                  <td className="py-3">{cust.customerId}</td>

                  <td>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-gray-400" />
                      {cust.customerName}
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-gray-400" />
                      {cust.email}
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-gray-400" />
                      {cust.phone}
                    </div>
                  </td>

                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      cust.loyalty === "Gold"
                        ? "bg-yellow-100 text-yellow-700"
                        : cust.loyalty === "Silver"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {cust.loyalty}
                    </span>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No data available
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}