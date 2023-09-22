import * as React from 'react';
import { Button } from "@mui/material";

function ButtonUi({color, isDisabled, counter, onClick, innerText}){

    return(
        <>
            <Button variant='contained' color={color} disabled={isDisabled} onClick={onClick}>
                {innerText} {counter}
            </Button>
        </>
    )
}

export default ButtonUi;