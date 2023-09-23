import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { ThemeContext } from "styled-components";

function AppBarMenu({onReset}) {
    const theme = useContext(ThemeContext)
    
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color={theme.palette.primary.main}
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component='div' sx={{ flexGrow: 1}}>
                        News
                    </Typography>
                    <Button color="inherit" onClick={onReset}>Reset</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarMenu