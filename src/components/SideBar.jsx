import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'
import { SideBarData } from '../helpers/SideBarData';
/* Implementing Accordion */
import ControlledAccordion from '../components/ControlledAccordion'


const NavBarWrap = styled.div`
  background-color: slategrey ;
  /* width:220px;
  left:${ ({open}) => open===true ? '0' : '-220px' }; */
  width:${ ({open}) => open===true ? '200px' : '0px' };
  height:100vh;
  position:relative;
  z-index: 2;
  transition: .5s !important;
  & > .header{
    height: 2.8rem;
  }
  & a:visited, & a{
    color: slategrey;
  }

`;
const Close = styled(AiOutlineClose)`
  font-size:2em;
  cursor: pointer;
  position:absolute;
  right:6px;
  top:6px;
  z-index:10;
`;
const Open = styled(GiHamburgerMenu)`
  font-size:2em;
  cursor: pointer;
  position:absolute;
  right: -36px;
  top:5px;

`

const SideBar = () => {
  /* To open nav */
  const [open,setOpen] = useState(true);
  /* To expand accordion */
  const [expanded, setExpanded] = React.useState(false);
  /* I will need another variable to confirm whether the current selected ListItem is the ONLY ONE ListItem currently selected */
  const [currentPath, setCurrentPath] = React.useState(null)

  return (
    <>
      <NavBarWrap open={open}>
        <div className='header'>
          <Close onClick={()=>setOpen(!open)}/>
          { !open ? <Open onClick={()=>setOpen(!open)} /> : '' }
        </div>

        
          {
            open && SideBarData.map((item,i)=>{
              return (

                <ControlledAccordion 
                  expanded={expanded} setExpanded={setExpanded} 
                  key={i} i={i} item={item}
                  currentPath={currentPath} setCurrentPath={setCurrentPath}
                  />

     
              )
            })
          }
       


      </NavBarWrap>
    </>
  )
}

export default SideBar