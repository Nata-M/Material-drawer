import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    buttonClass: {
        padding: '16px',
        color: '#ffffff',
        textTransform: 'none',
        maxHeight: '46px'
    }
}));

function SearchButton() {
    const classes = useStyles();
    return (
        <Button variant='text' fullWidth className={classes.buttonClass}>
            Search
        </Button>
    )
}


export default SearchButton