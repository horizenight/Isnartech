import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import { BsFillArrowDownCircleFill , BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function UiList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <List
      sx={{ width: '100%', maxWidth: 660 ,
      color:'#81AFDD',
      backgroundColor:'#031B34;',
      borderRadius:'5px',padding:'0.5px 10px',}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div className="listTitle">

        <ListSubheader disableSticky={true}  component="div" id="nested-list-subheader"
        color="inherit"
        sx={{fontSize:'2rem',
        }}
        
        >
          Who and how benefits from Car Damage Recognition 
        </ListSubheader>
        </div>
      }
    >
    
 
    
      <ListItemButton onClick={handleClick}>
       
        <ListItemText primary="• Insurance companies" />
        {open ?<BsFillArrowDownCircleFill/>: <BsFillArrowUpCircleFill/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{  pl: 4 , pb:0}}>
         
            <ListItemText primary="Prevents from fraud (in 85% cases), speeds up in times the underwriting process" />
          </ListItemButton>
          
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick}>
       
        <ListItemText primary="• Car rental services" />
        {open ?<BsFillArrowDownCircleFill/>: <BsFillArrowUpCircleFill/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{  pl: 4 , pb:0}}>
         
            <ListItemText primary="Decreases operational costs, brings customers’ satisfaction and higher retention rate." />
          </ListItemButton>
          
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick}>
       
        <ListItemText primary="• Car repair services" />
        {open ?<BsFillArrowDownCircleFill/>: <BsFillArrowUpCircleFill/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{  pl: 4 , pb:0}}>
         
            <ListItemText primary="Creates a collaborative environment, brings transparency to the repair process and costs." />
          </ListItemButton>
          
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick}>
       
        <ListItemText primary="• Customer satisfaction" />
        {open ?<BsFillArrowDownCircleFill/>: <BsFillArrowUpCircleFill/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{  pl: 4 , pb:0}}>
         
            <ListItemText primary="Customer is fully aware of damages before and after taking car on rent." />
          </ListItemButton>
          
        </List>
      </Collapse>

             
      
     

    
    </List>
  );
}
