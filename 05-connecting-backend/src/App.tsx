import axios, { Axios, AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  // say we are just interested in first two properties only
  id: number;
  name: string;
}

// interface Error {
//   message: string;
// }

function App() {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<User[]>([]); // We have to specify the type of state variable as an array of User objects because while fetching data, we are expecting an array of users
  const [error, setError] = useState("");
  useEffect(() => {
    // This function can't be made async so we make another async function inside it
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <p className="text-danger">{error}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
