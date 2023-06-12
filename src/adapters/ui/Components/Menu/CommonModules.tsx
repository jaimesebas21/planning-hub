import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import LogoutIcon from '@mui/icons-material/Logout';

export const CommonModules = () => {
  return (
    <React.Fragment>
        <List>
          {[{name:'Mis cartas', icon:<ViewCarouselIcon/>}, {name:'Abandonar', icon:<LogoutIcon/>}].map((module, index) => (
            <ListItem key={module.name} disablePadding>
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
