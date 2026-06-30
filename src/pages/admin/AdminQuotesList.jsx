import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../../endpoint";

function getAuthHeaders() {
  const token = localStorage.getItem("nts_admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function normalizeQuotes(data) {
  const list = Array.isArray(data) ? data : data?.data ?? data?.quotes ?? [];
  return list.map((item) => ({
    id: item.id ?? item._id,
    first_name: item.first_name ?? "",
    last_name: item.last_name ?? "",
    phone: item.phone ?? "",
    email: item.email ?? "",
    shipping_origin: item.shipping_origin ?? "",
    shipping_destination: item.shipping_destination ?? "",
    preferred_ship_date: item.preferred_ship_date ?? "",
    comments: item.comments ?? "",
    consent: item.consent,
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

export default function AdminQuotesList() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const { data } = await axios.get(endpoints.AdminQuoteApi, {
          headers: getAuthHeaders(),
        });
        setQuotes(normalizeQuotes(data));
      } catch (err) {
        setError(
          err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to load quote requests."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <>
      <header className="admin-topbar">
        <h1>Request Quote</h1>
      </header>

      <div className="admin-content">
        <div className="admin-panel">
          <div className="admin-panel__head">
            <h2>Quote Requests ({quotes.length})</h2>
          </div>

          {loading ? (
            <div className="admin-empty">
              <p>Loading quote requests...</p>
            </div>
          ) : error ? (
            <div className="admin-empty">
              <p>{error}</p>
            </div>
          ) : quotes.length === 0 ? (
            <div className="admin-empty">
              <p>No quote requests yet.</p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Ship Date</th>
                    <th>Comments</th>
                    <th>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((item) => (
                    <tr key={item.id ?? `${item.email}-${item.created_at}`}>
                      <td className="admin-table__title">
                        {cell(item.first_name)} {cell(item.last_name)}
                      </td>
                      <td>{cell(item.email)}</td>
                      <td>{cell(item.phone)}</td>
                      <td>{cell(item.shipping_origin)}</td>
                      <td>{cell(item.shipping_destination)}</td>
                      <td>{cell(item.preferred_ship_date)}</td>
                      <td>{cell(item.comments)}</td>
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
