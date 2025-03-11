// import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";

// interface Error {
//   message: string;
// }

function App() {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<User[]>([]); // We have to specify the type of state variable as an array of User objects because while fetching data, we are expecting an array of users
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAll<User>(); // Here we have to mention <User> for generic HttpRequest
    // .get("https://jsonplaceholder.typicode.com/users")
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      }) // To have auto completion and type safety for properties of each user, we can define an interface for the data we are getting
      .catch((err) => {
        if (err instanceof CanceledError) return; //
        setError(err.message);
        setIsLoading(false);
      });
    // .finally(() => {
    //   setIsLoading(false); // Doesn't work with the strict mode turned on
    // });

    return () => cancel();
  }, []);

  // Using: Approach 1 - Optimistic update - Update the UI first and then make the API call
  // Approach 2 - Pessimistic approach - Call the server then update the UI
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Harsh" }; // Can make a form also
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      // .then((res) => setUsers([res.data, ...users]));
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="spinner-border"></p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}{" "}
            {/* Above you can see that to add a space between the elements here, we need to do {" "} */}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
