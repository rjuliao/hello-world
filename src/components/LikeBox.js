import { Box, Grid, Typography } from '@mui/material';
import ButtonUi from './ButtonUi';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

function LikeBox(props){
    const theme = useContext(ThemeContext)
    return(
        <>
            <Box  
                display='flex' 
                justifyContent="center" 
                alignItems="center" 
                sx={{
                    height: 300,
                    bgcolor: theme.palette.secondary.secondary
                }}
            >
                <Grid container spacing={2} columns={16}>
                    <Grid item display='flex' justifyContent='center' xs={16}>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                            <Typography variant='h1'>Name: {props.title}</Typography>
                            <Typography variant='h2'>Author: {props.author}</Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item display='flex' justifyContent='center' xs={8}>
                        <ButtonUi 
                            innerText={'Like'} 
                            color={'success'} 
                            counter={props.cCounter} 
                            onClick={props.onLike}
                        />
                    </Grid>
                    <Grid item display='flex' justifyContent='center' xs={8}>
                        <ButtonUi 
                            innerText={'Dislike'} 
                            isDisabled={props.cDisable} 
                            color={'error'} 
                            counter={props.cDecrement} 
                            onClick={props.onDislike}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LikeBox;