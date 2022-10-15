import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/* For the list items inside each accordion */
import Box from '@mui/material/Box';
import ListItem from './ListItem';
/* Now from react-router-dom */


const ControlledAccordion = ({item,i, setExpanded, expanded,currentPath,setCurrentPath}) => {
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    /* Liftin state up from our ListItems */
    const [selectedIndex, setSelectedIndex] = React.useState(null);


    return (
        <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding:0 }}>
               
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    { item.subNav.map((subNav,i)=>{
                        return(
                            <ListItem 
                                currentPath={currentPath} setCurrentPath={setCurrentPath}
                                key={subNav.path} i={i} 
                                selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} 
                                title={subNav.title} path={subNav.path}> 
                                
                            </ListItem>
                            )
                        }) 
                    }
                </Box>

            </AccordionDetails>
      </Accordion>
    )
}

export default ControlledAccordion