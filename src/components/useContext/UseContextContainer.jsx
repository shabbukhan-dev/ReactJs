import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function UseContextContainer() {
  const user = {
    name: "John",
    role: "Frontend Developer"
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default UseContextContainer;