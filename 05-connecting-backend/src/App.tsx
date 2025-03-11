import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  // say we are just interested in first two properties only
  id: number;
  name: string;
}

interface Error {
  message: string;
}

function App() {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<User[]>([]); // We have to specify the type of state variable as an array of User objects because while fetching data, we are expecting an array of users
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      // tell get that we are expecting an array of users
      .get<User[]>("https://jsonplaceholder.typicode.com/userss")
      // .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data)) // To have auto completion and type safety for properties of each user, we can define an interface for the data we are getting
      .catch((err) => setError(err.message));
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
