const API_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers(signal) {
  const response = await fetch(`${API_URL}/users`,
        {
            signal
        }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}