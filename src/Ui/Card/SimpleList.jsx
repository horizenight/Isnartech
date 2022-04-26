import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import { BsFillArrowDownCircleFill , BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function SimpleList({ListTitle,features,toggle=false}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  
  return (
    
    <List
      sx={{ width: '100%', maxWidth: 360 ,
      color:'#81AFDD',
      backgroundColor:'#031B34;',
      borderRadius:'5px',padding:'0.5px 10px',}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div className="listTitle">

        <ListSubheader disableSticky={true}  component="div" id="nested-list-subheader"
        color="inherit"
        sx={{fontSize:'1.5rem',lineHeight:'1.5rem',padding:'1rem'
        }}
        
        >
          {ListTitle}
        </ListSubheader>
        </div>
      }
    >

  {features.map((feature)=> <ListItemText primary={feature.data} key={feature.id}/>)}
    


    
    </List>
  );
}
