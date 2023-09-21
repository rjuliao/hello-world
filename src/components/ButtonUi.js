import * as React from 'react';
import { Button } from "@mui/material";

function ButtonUi({isDisabled, counter, onClick}){

    return(
        <>
            <Button variant='contained' disabled={isDisabled} onClick={onClick}>
                Like {counter}
            </Button>
        </>
    )
}

export default ButtonUi;