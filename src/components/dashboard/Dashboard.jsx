import {useState} from 'react'
import LoginStatus from './LoginStatus';
import UserRole from './UserRole';
import Notifications from './Notifications';

export const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <LoginStatus />
    // <UserRole />
    <Notifications />
  )
}