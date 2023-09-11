import Button from "@/components/Button.styled";
import Input from "@/components/Input.styled";
import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

export default function HomePage() {
  const [username, setUsername] = useState("ninaassmann");
  const {
    data: repos,
    isLoading: reposLoading,
    error: reposError,
  } = useSWR(`https://api.github.com/users/${username}/repos`);

  const { data, isLoading, error } = useSWR(
    `https://api.github.com/users/${username}`
  );

  if (error || reposError) return <Loading />;
  if (isLoading || reposLoading) return <Loading />;

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
        {username && (
          <article>
            {data.name ? (
              <section>
                <Header>
                  <Image
                    src={data.avatar_url}
                    alt={data.name}
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3>
                      {data.name} <br />
                      <small>{username}</small>
                    </h3>

                    <p>Public Repositories: {data.public_repos}</p>
                  </div>
                </Header>
                <ul>
                  {repos && (
                    <>
                      <h4>Repositories</h4>
                      {repos.map((repo) => (
                        <ListItem key={repo.id}>
                          <Link href={repo.html_url}>
                            <dl>
                              <dt>{repo.name}</dt>
                              <dd>{repo.description}</dd>
                            </dl>
                          </Link>
                        </ListItem>
                      ))}
                    </>
                  )}
                </ul>
              </section>
            ) : (
              <h3>Please enter a valid username</h3>
            )}
          </article>
        )}
      </main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & img {
    border-radius: 0.5rem;
  }
`;

const ListItem = styled.li`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: #769fb6;

  &:nth-last-of-type(even) {
    background: #6b828f;
  }

  &:hover {
    filter: brightness(0.95);
  }
`;
