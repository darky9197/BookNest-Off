import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../Contexts';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const settings = ['Account', 'Logout'];


function ResponsiveAppBar() {
    const { data } = React.useContext(AppContext);
    if (data === null) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    const { loginState } = data;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [profileName, setProfileName] = React.useState<string>("P");
    // const [loginstate, setLoginState] = React.useState<boolean>(false);




    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSetting = (setting: string) => {
        switch (setting) {
            case 'Account':
                break;
            case 'Logout':
                localStorage.removeItem("userToken");
                window.location.href = '/';
                break;
        }
    }

    React.useEffect(() => {
        const data = localStorage.getItem("userToken");
        if (!data) return;
        const token = JSON.parse(data);

        const getName = async () => {
            const response = await axios.get('http://localhost:8080/user/getUser', {
                params: {
                    email: token.email
                }
            });
            const nameArr = await response.data.personal_data.name.split(" ");
            let pName = "";
            nameArr.forEach((str: string) => {
                pName = pName + str[0].toUpperCase();
            })
            // console.log(pName)
            setProfileName(pName);
        }
        getName();
    }, [])

    // React.useEffect(() => {
    //     setLoginState(data.loginState);
    // }, [data.loginState])

    return (
        <AppBar position="relative" style={{ backgroundColor: '#fff', boxShadow: '0px 2px 5px var(--clr-3)' }}>
            <Container >
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: { md: 'space-between' } }}>
                    <Typography
                        variant="h1"
                        noWrap
                        sx={{
                            mr: 2,
                            cursor: 'pointer',
                            userSelect: 'none',
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 800,
                            fontSize: '1.5rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                            BOOKNEST
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            onClick={handleOpenNavMenu}
                            sx={{ color: "black" }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, color: { xs: "#000" } }}
                        >

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center', color: 'black' }} >Sell Books</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/package-lock.json"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        BOOKNEST
                    </Typography>

                    {
                        (loginState) ?
                            <Box sx={{ flexGrow: 0, display: 'flex', gap: '20px' }}>
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <Link to='/sellbook' style={{ textDecoration: 'none' }}>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'black', display: 'block' }}
                                        >
                                            Sell Books
                                        </Button>
                                    </Link>
                                </Box>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <div style={{
                                            background: "grey",
                                            height: "45px",
                                            width: '45px',
                                            padding: ".4rem",
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        >
                                            <span style={{ color: 'white', fontSize: "1rem" }}>{profileName}</span>
                                        </div>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={() => {
                                            handleCloseUserMenu();
                                            handleSetting(setting);
                                        }}>
                                            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box> :
                            <div className="d-flex gap-2">
                                <Link to="/Signin" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                                        Sign in
                                    </Button>
                                </Link>
                            </div>
                    }

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
