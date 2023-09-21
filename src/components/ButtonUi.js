import * as React from 'react';
import { Button } from "@mui/material";

function ButtonUi({isDisabled, counter, onClick, innerText}){

    return(
        <>
            <Button variant='contained' disabled={isDisabled} onClick={onClick}>
                {innerText} {counter}
            </Button>
        </>
    )
}

export default ButtonUi;