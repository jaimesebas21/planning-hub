import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import LogoutIcon from '@mui/icons-material/Logout';
import { IMenu } from './interface/IMenu';
import { useNavigate } from 'react-router-dom';

export const CommonModules = () => {
  const navigate = useNavigate();

  let commonModules:IMenu[] = [
    {name:'Mis cartas', icon:<ViewCarouselIcon/>, route:''}, 
    {name:'Abandonar', icon:<LogoutIcon/>, route:'/'}]
  return (
    <React.Fragment>
        <List>
          {commonModules.map((module, index) => (
            <ListItem key={module.name} disablePadding onClick={()=> navigate(module.route , {replace:true})}>
              <ListItemButton>
                <ListItemIcon>
                  {module.icon}
                </ListItemIcon>
                <ListItemText primary={module.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </React.Fragment>
  )
}
