// const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";
// const api =async(path, method = "GET", token = null, body = null)=>{
//   const headers = {};
//   if (token) headers["Authorization"] = `Bearer ${token}`;
//   if (body) headers["Content-Type"] = "application/json";

//   const res = await fetch(`${API_BASE}${path}`, {
//     method,
//     headers,
//     body: body ? JSON.stringify(body) : undefined,
//   });

//   const text = await res.text();
//   let data;
//   try {
//     data = text ? JSON.parse(text) : null;
//   } catch {
//     data = text;
//   }

//   if (!res.ok) throw data || { error: `HTTP ${res.status}` };
//   return data;
// }

// export default api

import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";

const api = async (path, method = "GET", token = null, body = null) => {
  try {
    const res = await axios({
      url: `${API_BASE}${path}`,
      method,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      data: body || undefined,
    });

    return res.data; // axios auto-parses JSON
  } catch (err) {
    if (err.response) {
      // Backend returned error response
      throw err.response.data || { error: `HTTP ${err.response.status}` };
    }
    throw { error: err.message || "Network Error" };
  }
};

export default api;
