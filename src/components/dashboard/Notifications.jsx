// import { useState } from "react";

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);

//   // ✅ Add notification function
//   const addNotification = () => {
//     const newNotifications = [
//       "Message received",
//       "New friend request",
//       "Profile updated",
//       "Comment on your post",
//       "New follower"
//     ];
    
//     // Get random notification
//     const randomIndex = Math.floor(Math.random() * newNotifications.length);
//     const randomNotification = newNotifications[randomIndex];
    
//     setNotifications(prev => [...prev, randomNotification]);
//   };

//   // ✅ Clear all notifications
//   const clearNotifications = () => {
//     setNotifications([]);
//   };

//   // ✅ Remove specific notification
//   const removeNotification = (index) => {
//     setNotifications(prev => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🔔 Notifications</h2>

//       {/* ✅ Using ternary + && + .map() */}
//       {notifications.length === 0 ? (
//         // ✅ When empty - Show "No new notifications"
//         <div style={styles.emptyState}>
//           <p>📭 No new notifications</p>
//         </div>
//       ) : (
//         // ✅ When notifications exist
//         <div>
//           {/* ✅ Using && to conditionally show count */}
//           {notifications.length > 0 && (
//             <p style={styles.count}>
//               You have <strong>{notifications.length}</strong> new 
//               notification{notifications.length > 1 ? 's' : ''}
//             </p>
//           )}

//           {/* ✅ Using .map() to display each notification */}
//           <ul style={styles.list}>
//             {notifications.map((notification, index) => (
//               <li key={index} style={styles.listItem}>
//                 <span>• {notification}</span>
//                 <button 
//                   onClick={() => removeNotification(index)}
//                   style={styles.removeButton}
//                 >
//                   ✕
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* ✅ Using && to conditionally show clear button */}
//           {notifications.length > 0 && (
//             <button onClick={clearNotifications} style={styles.clearButton}>
//               Clear All
//             </button>
//           )}
//         </div>
//       )}

//       {/* ✅ Add notification button */}
//       <div style={styles.buttonContainer}>
//         <button onClick={addNotification} style={styles.addButton}>
//           ➕ Add Notification
//         </button>
//       </div>
//     </div>
//   );
// };

// // ✅ Styles
// const styles = {
//   container: {
//     maxWidth: '500px',
//     margin: '50px auto',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '10px',
//     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//     fontFamily: 'Arial, sans-serif'
//   },
//   emptyState: {
//     textAlign: 'center',
//     padding: '40px 20px',
//     color: '#888',
//     fontSize: '18px'
//   },
//   count: {
//     fontSize: '16px',
//     color: '#333',
//     marginBottom: '15px',
//     padding: '10px',
//     backgroundColor: '#e3f2fd',
//     borderRadius: '5px'
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//     marginBottom: '15px'
//   },
//   listItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '12px 15px',
//     marginBottom: '8px',
//     backgroundColor: 'white',
//     borderRadius: '6px',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//     fontSize: '14px'
//   },
//   removeButton: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     color: '#ff4444',
//     cursor: 'pointer',
//     fontSize: '16px',
//     padding: '5px 10px',
//     borderRadius: '4px',
//     transition: 'background-color 0.2s'
//   },
//   clearButton: {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#f44336',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     transition: 'background-color 0.3s'
//   },
//   addButton: {
//     padding: '10px 20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     transition: 'background-color 0.3s'
//   },
//   buttonContainer: {
//     marginTop: '20px',
//     textAlign: 'center'
//   }
// };

// export default Notifications;


import { useState } from "react";

const Notifications= () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const messages = [
      "Message received",
      "New friend request",
      "Profile updated"
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    setNotifications(prev => [...prev, random]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <h2>Notifications</h2>

      
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <div>
          
          {notifications.length > 0 && (
            <p>You have <strong>{notifications.length}</strong> notifications</p>
          )}
          
         
          <ul>
            {notifications.map((msg, index) => (
              <li key={index}> {msg} </li>
            ))}
          </ul>
          
          {notifications.length > 0 && (
            <button onClick={clearNotifications}>Clear All</button>
          )}
        </div>
      )}

      <button onClick={addNotification}> Add Notification</button>
    </div>
  );
};

export default Notifications;