import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        textTransform: 'none',
        marginRight: '12px',
        height: '25px',
        backgroundColor: '#eceeef',
        boxShadow: 'none',
        borderRadius: '46px',
        padding: '18px 16px',
        color: '#2c435a',
        fontSize: '12px'
    }
}));

function HeaderButton(props) {
    const classes = useStyles();
    const text = props.text;
    const img1 = props.img;
    return (
        <Button variant='contained' className={classes.buttonStyle}>
            {img1}
            {text}
        </Button>
    )
}
export default HeaderButton