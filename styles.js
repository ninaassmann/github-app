import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: ${inter.style.fontFamily};
    background: #E2DBBE;
    padding: 4rem 0;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  main {
    width: min(calc(100vw - 4rem), 600px);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  section {
    background: #769FB6;
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;
