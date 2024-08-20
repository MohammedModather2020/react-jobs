import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


// mui
import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";



const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [tvLang, setTvLang] = useState('عربي'); // Default language label
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setTvLang(lng === 'en' ? 'عربي' : 'English'); // Switch the language label
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'; // Change text direction
  };

  useEffect(() => {
    // Initialize language direction based on current language
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">
            {t('home')}
          </Button>
          <Button color="inherit" component={Link} to="/jobs">
            {t('jobs')}
          </Button>
          <Button color="inherit" onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
            {tvLang}
          </Button>
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            {t('home')}
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/jobs">
            {t('jobs')}
          </MenuItem>
          <MenuItem onClick={() => { handleClose(); changeLanguage(i18n.language === 'en' ? 'ar' : 'en') }}>
            {tvLang}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}


export default Navbar;
