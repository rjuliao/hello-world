import { Box, Grid } from '@mui/material';
import ButtonUi from './ButtonUi';
import { useState } from 'react';

function LikeBox(props){
    
    return(
        <>
            <Box  
                display='flex' 
                justifyContent="center" 
                alignItems="center" 
                sx={{
                    width: 400,
                    height: 200,
                    bgcolor: 'secondary.main'
                }}
            >
                <Grid container spacing={2} columns={16}>
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