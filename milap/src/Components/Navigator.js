import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    title: {
        display: 'fixed',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    CustomButon: {
        color: 'black',
    },
    CustomButonSize: {
        color: 'black',
        fontSize: '0.9em',
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const history = useHistory();
    const handleClickHome = () => history.push('/');
    const handleClickUs = () => history.push('/nosotros');
    const handleClickDate = () => history.push('/cita');
    //const handleClickGlasses = () => history.push('/prueba');
    const handleClickLenses = () => history.push('/lentes');

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleClickUs}>
                    Sobre Nosotros
            </MenuItem>
            <MenuItem onClick={handleClickDate}>
                    Agenda Tu Cita
            </MenuItem>
            {/* <MenuItem onClick={handleClickGlasses}>
                    Modelos de Gafas
            </MenuItem> */}
            <MenuItem onClick={handleClickLenses}>
                
                    Cotiza Tus Lentes
                
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="absolute" color="transparent">
                <Toolbar>
                    <Typography className={classes.title} variant="h5" noWrap>
                        <Button className={classes.CustomButonSize} onClick={handleClickHome}>
                            Optica Milap
                            </Button>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <MenuItem onClick={handleClickUs}>
                            
                                Sobre Nosotros
                           
                        </MenuItem>
                        <MenuItem onClick={handleClickDate}>
                            
                                Agenda Tu Cita
                           
                        </MenuItem>
                        {/* <MenuItem onClick={handleClickGlasses}>
                            
                                Modelos de Gafas
                           
                        </MenuItem> */}
                        <MenuItem onClick={handleClickLenses}>
                            
                                Cotiza Tus Lentes
                            
                        </MenuItem>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}

        </div>
    );
}
