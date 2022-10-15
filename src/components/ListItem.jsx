import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';


const ListItem = ({title, selectedIndex, setSelectedIndex, i, path, setCurrentPath, currentPath}) => {

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        /* Remember, current path is only to make sure that ONLY one List Item is being selected at any given time. */
        setCurrentPath(path);
    };


  return (
    <List component="nav" aria-label="secondary mailbox folder">
      <Link to={path}>
          <ListItemButton
            selected={selectedIndex === i && path===currentPath}
            onClick={(event) => handleListItemClick(event, i)}
          >
              <ListItemText primary={title} />      
          </ListItemButton>
      </Link>
    </List>
  )
}

export default ListItem