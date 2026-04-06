import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Marketplace from "../pages/Marketplace";

import FarmerDashboard from "../pages/farmer/FarmerDashboard";
import AddMillet from "../pages/farmer/AddMillet";
import FarmerOrders from "../pages/farmer/FarmerOrders";

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import Cart from "../pages/customer/Cart";
import Orders from "../pages/customer/Orders";
import Profile from "../pages/Profile";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/marketplace" element={<Marketplace />} />



      {/* Farmer Routes */}

<Route
path="/profile"
element={
<ProtectedRoute>
<Profile/>
</ProtectedRoute>
}
/>



      <Route
        path="/farmer/dashboard"
        element={
          <ProtectedRoute>
            <FarmerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/farmer/add-millet"
        element={
          <ProtectedRoute>
            <AddMillet />
          </ProtectedRoute>
        }
      />

      <Route
        path="/farmer/orders"
        element={
          <ProtectedRoute>
            <FarmerOrders />
          </ProtectedRoute>
        }
      />



      {/* Customer Routes */}

      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />



      {/* 404 Route */}

      <Route
        path="*"
        element={
          <div className="text-center mt-5">
            <h2>404 Page Not Found</h2>
          </div>
        }
      />

    </Routes>
  );
}

export default AppRoutes;