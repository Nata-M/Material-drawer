import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        height: '120px',
        width: '100%',
    },
    headerTop: {
        height: '50%',
        width: '100%',
        borderBottom: '1px solid #d5d5d5',
        padding: '0 0 0 16px',
    },
    headerBottom: {
        height: '50%',
        width: '100%',
        padding: '0 0 0 32px',
    }
}));


function Header() {
    const classes = useStyles();
    return (
        <Grid container className={classes.header}>
            <Grid container item className={classes.headerTop}>
                <HeaderTop />
            </Grid>
            <Grid container item className={classes.headerBottom}>
                <HeaderBottom />
            </Grid>
        </Grid>
    )
}

export default Header