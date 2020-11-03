import React from 'react';
import { makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#eceeef',
        minWidth: '35px',
        borderRadius: '46px',
        fontSize: 'small'
    },
}));

function Delete() {
    const classes = useStyles();
    return (
        <IconButton size='small' className={classes.button}>
            <DeleteIcon />
        </IconButton>
    )
}
export default Delete