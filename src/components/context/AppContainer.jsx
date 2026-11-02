// src\components\context\AppContainer.jsx
"use client";

import React from 'react';
import { useAuth } from './AuthContext';
import Login from './Login';
import Profile from './Profile';
import Dashboard from './Dashboard';

export default function AppContainer() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px' 
    }}>
      <h1>Auth Context Demo</h1>
      
      {isLoggedIn ? (
        <>
          <div style={{ 
            padding: '10px', 
            backgroundColor: '#d4edda', 
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            <p>✅ Logged in as: <strong>{user?.name}</strong></p>
            <button 
              onClick={logout}
              style={{ 
                padding: '5px 15px', 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
          
          <Profile />
          <Dashboard />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}