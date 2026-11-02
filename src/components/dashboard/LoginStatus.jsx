import {useState} from 'react'

const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn)

 return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>You are logged out</h2>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default LoginStatus
