import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';

function AppBarTop({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
      }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Button color="inherit" href='/'>{t('home')}</Button>
          <Button color="inherit" href='/about'>{t('about')}</Button>

          <Button color='inherit' onClick={()=>changeLanguage('en')}>EN</Button>
          <Button color='inherit' onClick={()=>changeLanguage('fi')}>FI</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withTranslation()(AppBarTop);
