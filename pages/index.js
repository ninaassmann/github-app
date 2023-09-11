import { useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [username, setUsername] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const inputValue = event.target.username.value;
    setUsername(inputValue);
    event.target.reset();
  }

  return (
    <>
      <main>
        <header>
          <h1>GitHub App</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter a valid username</label>
          <Input
            type="text"
            placeholder="e.g. ninaassmann"
            id="username"
            name="username"
          />
          <Button>Check User</Button>
        </form>
        <section>
          <p>{username}</p>
        </section>
      </main>
    </>
  );
}

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: #188fa7;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
