import { useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const inputValue = event.target.username.value;
    setUsername(inputValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter a valid username"
          id="username"
          name="username"
        />
        <button>Check User</button>
      </form>
      <p>{username}</p>
    </div>
  );
}
