import { useState } from "react";
import Form from "./Form";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <Form addUser={addUser} />  {/* Pass the addUser function as a prop to the Form component */}

      <ul>
        {users.map((u, index) => (
          <li key={index}>
            {u.name}  -  {u.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;