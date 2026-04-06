import React from "react";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/AuthContext";

function App() {

  return (

    

      <AuthProvider>

        <div className="d-flex flex-column min-vh-100">

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="container mt-4 flex-grow-1">

            <AppRoutes />

          </main>

          {/* Footer */}
          <Footer />

        </div>

      </AuthProvider>


  );

}

export default App;