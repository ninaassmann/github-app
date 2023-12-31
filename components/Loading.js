import Button from "./Button.styled";
import Input from "./Input.styled";

export default function Loading({ handleSubmit, text }) {
  return (
    <main>
      <header>
        <h1>GitHub App</h1>
      </header>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="username">Enter a valid username</label>
        <Input
          type="text"
          placeholder="e.g. ninaassmann"
          id="username"
          name="username"
        />
        <Button>Check User</Button>
      </form>
      <article>
        <h3>{text}</h3>
      </article>
    </main>
  );
}
