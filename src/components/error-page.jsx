import { useRouteError, useNavigate } from "react-router-dom";
import styled from 'styled-components';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const ErrorPage = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & i{
        color:slategrey
    }
  `
  const Btn = styled.button`
    padding: 4px 10px;
  `

  const navigate = useNavigate();

  return (
    <ErrorPage id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Btn onClick={() => navigate(-1)}>Go Back</Btn>
    </ErrorPage>
  );
}