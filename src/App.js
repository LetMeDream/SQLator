import './App.css';
import SideBar from './components/SideBar';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';

function App() {

  const Container = styled.div`
    display:flex;
    position:relative;
    &>:nth-child(2){
      flex:1;
      z-index:1;
    }
  `

  

  return (
    <Container>
        <SideBar />
        <Outlet/>
    </Container>
  );
}

export default App;
