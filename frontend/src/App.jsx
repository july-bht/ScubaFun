import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import AdminLayout from "./layout/admin/AdminLayout";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Places from "./pages/Places";
import Info from "./pages/Info";
import Contact from "./pages/Contact";

import AdminHome from "./pages/admin/AdminHome";

function App() {
  return (
    <div className="">
      <Router>

        {/* Public */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="trips" element={<Trips />} />
            <Route path="places" element={<Places />} />
            <Route path="info" element={<Info />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* ADMIN-routes  */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
          </Route>

          {/* Shop */}

        </Routes>
      </Router>
    </div >
  );
}

export default App;
