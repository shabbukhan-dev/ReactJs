import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadUsers() {
      setLoading(true);
        setError(null);

      try {
        const data = await getUsers(abortController.signal);
        setUsers(data);
      } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      setError(error.message);
    } finally {
        setLoading(false);
      }
    }

    loadUsers();
    return () => abortController.abort();
  }, []);

if (loading) return <div>Loading users...</div>;
if (error) return <div>Error: {error}</div>;
if (users.length === 0) {
  return <div>No users found.</div>;
}

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} — {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Users;