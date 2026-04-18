import { useState } from "react";

function Form({ addUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") {
      setError("Name is required");
      return;
    }

    if (age === "" || isNaN(age) || age <= 18) {
      setError("Age must be number > 18");
      return;
    }

    addUser({ name, age });

    setName("");
    setAge("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{marginRight: "10px"}}
      />

      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{marginRight: "10px"}}
      />

      <button type="submit">Add User</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Form;