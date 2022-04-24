import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import { BsFillArrowDownCircleFill , BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <List
      sx={{ width: '100%', maxWidth: 360 ,
      color:'white',}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          We are focusing on 
        </ListSubheader>
      }
    >
    
       
        <ListItemText primary="Field pre assessment for sowing & watering" />
     
    
        <ListItemText primary="Sowing exact & Spraying by drone (Saving)" />
     
    
      <ListItemButton onClick={handleClick}>
       
        <ListItemText primary="Crop health analysis (Saving)" />
        {open ?<BsFillArrowDownCircleFill/>: <BsFillArrowUpCircleFill/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 , pb:0}}>
         
            <ListItemText primary="• Disease" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,pb:"" }}>
            <ListItemText primary="•	Lodging " />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,pb:"" }}>
            <ListItemText primary="•	Green Snap " />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,pb:"" }}>
            <ListItemText primary="•	Weather damage " />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,pb:"" }}>
            <ListItemText primary="•	Pest damage & treatment plan" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,pb:"" }}>
            <ListItemText primary="•	Nitrogen status " />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,pb:"" }}>
            <ListItemText primary="•	Fungicide & treatment plan" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4,pb:"" }}>
            <ListItemText primary="•	Weed mapping & treatment plan" />
          </ListItemButton>
      
        </List>
      </Collapse>

             
      <ListItemText primary="Yield prediction" />
      <ListItemText primary="Harvesting time estimation" />
      <ListItemText primary="Insure crops" />
     

    
    </List>
  );
}
