import React from 'react';
import IconButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    buttonClass: {
        color: '#939393',
        // flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        textTransform: 'none',
        fontSize: '14px',
    },
    buttonRed: {
        color: 'red'
    }
}));

function TextButton(props) {
    const text = props.text;
    const classes = useStyles();
    const Icon = props.icon;

    return (
        <IconButton variant='text' style={{ color: props.color, textDecoration: props.decoration }} className={classes.buttonClass}>
            <Icon />
            {text}
        </IconButton>
    )
}


export default TextButton