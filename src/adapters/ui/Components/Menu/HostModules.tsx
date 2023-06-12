import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useNavigate } from 'react-router-dom';

export const HostModules = () => {
  const navigate = useNavigate();
  let modules = [
    { name: 'Contactos', icon: <GroupAddIcon />, route:"contacts" },
    { name: 'Puntos', icon: <FormatListNumberedRtlIcon />, route:"/sas" },
    { name: 'Sala de planeacion', icon: <Diversity3Icon />, route:"/adasd" }
  ]
  const navigateTo = (module:any) => {
    navigate(module.route)
  }

  return (
    <React.Fragment>
      <List>
        {modules.map((module, index) => (
          <ListItem key={module.name} disablePadding onClick={()=>navigateTo(module)}>
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