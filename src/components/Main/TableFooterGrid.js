import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    container: {
        padding: '8px',
        width: '100%',
        justifyContent: 'flex-end',
    },


    buttonStyle: {
        background: "#ffffff",
        '&:hover': {
            background: "#ff4e00",
            color: '#ffffff'
        },
        minWidth: '35px',
        borderRadius: '46px',
        fontSize: 'small',
        marginRight: '2px',
        color: '#6c6c6c'
    },
}));

function Buttons(props) {
    const classes = useStyles();
    const text = props.text;
    return (
        <Button className={classes.buttonStyle}>{text}</Button>
    )
}

function TableFooterGrid() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Grid container className={classes.container}>
                <Buttons text='1' />
                <Buttons text='2' />
                <Buttons text='3' />
                <Buttons text='4' />
                <Buttons text='5' />
            </Grid>
        </div>
    )
}


export default TableFooterGrid