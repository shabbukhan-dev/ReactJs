// src\components\context\Dashboard.jsx
"use client";

import React from 'react';
import { useAuth } from './AuthContext';

export default function Dashboard() {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '20px auto'
      }}>
        <p>Please login to view dashboard</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name}!</p>
      <p>You are logged in as: {user?.role}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}