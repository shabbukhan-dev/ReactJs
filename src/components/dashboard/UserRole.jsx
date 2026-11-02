import { useState } from 'react';
import AdminDashboard from "./AdminDashboard";
import UserDashboard from './UserDashboard';

const UserRole = () => {
  // Made user stateful for dynamic updates
  const [user, setUser] = useState({
    id: 1,
    name: "John",
    role: "admin"
  });

  // Toggle role function
  const toggleRole = () => {
    setUser(prev => ({
      ...prev,
      role: prev.role === 'admin' ? 'user' : 'admin'
    }));
  };

  return (
    <div style={styles.container}>
      {/* Display user info */}
      <div style={styles.userInfo}>
        <h2>Welcome, {user.name}!</h2>
        <p>
          <strong>Role:</strong>{" "}
          <span style={{
            color: user.role === 'admin' ? '#4CAF50' : '#2196F3',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            {user.role}
          </span>
        </p>
      </div>

      {user.role === 'admin' ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}

      {/* Toggle button for testing */}
      <div style={styles.buttonContainer}>
        <button onClick={toggleRole} style={styles.toggleButton}>
          Switch to {user.role === 'admin' ? 'User' : 'Admin'} Role
        </button>
      </div>
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto'
  },
  userInfo: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  buttonContainer: {
    marginTop: '20px',
    textAlign: 'center'
  },
  toggleButton: {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default UserRole;