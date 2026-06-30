import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../../endpoint";

function getAuthHeaders() {
  const token = localStorage.getItem("nts_admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function normalizeCustomers(data) {
  const list = Array.isArray(data)
    ? data
    : data?.data ?? data?.customers ?? data?.["become-customer"] ?? [];
  return list.map((item) => ({
    id: item.id ?? item._id,
    first_name: item.first_name ?? "",
    last_name: item.last_name ?? "",
    phone: item.phone ?? "",
    email: item.email ?? "",
    business_name: item.business_name ?? "",
    shipping_frequency: item.shipping_frequency ?? "",
    message: item.message ?? "",
    created_at: item.created_at ?? item.createdAt ?? "",
  }));
}

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
}

function cell(value) {
  if (value === null || value === undefined || value === "") return "—";
  return value;
}

export default function AdminCustomersList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const { data } = await axios.get(endpoints.AdminCustomerApi, {
          headers: getAuthHeaders(),
        });
        setCustomers(normalizeCustomers(data));
      } catch (err) {
        setError(
          err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to load customer requests."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <>
      <header className="admin-topbar">
        <h1>Become Customer</h1>
      </header>

      <div className="admin-content">
        <div className="admin-panel">
          <div className="admin-panel__head">
            <h2>Customer Requests ({customers.length})</h2>
          </div>

          {loading ? (
            <div className="admin-empty">
              <p>Loading customer requests...</p>
            </div>
          ) : error ? (
            <div className="admin-empty">
              <p>{error}</p>
            </div>
          ) : customers.length === 0 ? (
            <div className="admin-empty">
              <p>No customer requests yet.</p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Business Name</th>
                    <th>Shipping Frequency</th>
                    <th>Message</th>
                    <th>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((item) => (
                    <tr key={item.id ?? `${item.email}-${item.created_at}`}>
                      <td className="admin-table__title">
                        {cell(item.first_name)} {cell(item.last_name)}
                      </td>
                      <td>{cell(item.email)}</td>
                      <td>{cell(item.phone)}</td>
                      <td>{cell(item.business_name)}</td>
                      <td>{cell(item.shipping_frequency)}</td>
                      <td>{cell(item.message)}</td>
                      <td className="admin-table__meta">{formatDate(item.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
