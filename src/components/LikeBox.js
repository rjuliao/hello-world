import { Box, Grid } from '@mui/material';
import ButtonUi from './ButtonUi';
import { useState } from 'react';

function LikeBox(){
    const [counter, setCounter] =  useState(0)
    const [decrement, setDecrement]  = useState(0)
    const [disabled, setDisabled] = useState(true)

    function handleLike(){
        console.log('like')
        setCounter(counter + 1)
        setDisabled(false)
    }

    function handleUnlike(){
      if(counter === 0){
        setDisabled(true)
        setDecrement(0)
        console.log('no more likes')
      }else{
        setCounter(counter -1)
        setDecrement(decrement + 1)
      }
    }

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
                    <Grid item xs={8}>
                        <ButtonUi innerText={'Like'} counter={counter} onClick={handleLike}/>
                    </Grid>
                    <Grid item xs={8}>
                        <ButtonUi innerText={'Dislike'}isDisabled={disabled} counter={decrement} onClick={handleUnlike}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LikeBox;