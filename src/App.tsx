import React, { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./pages/Login"; 
import { Bets } from "./pages/Bets";
import { NotFound } from "./pages/notFound";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Login />} 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/bets" 
            element={
              <ProtectedLayout>
                <Bets />
              </ProtectedLayout>
            }
          />
          <Route 
            path='*' 
            element={<NotFound />} 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App
