import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import HeaderButton from './HeaderButton';
import FilterButton from './FilterButton';
import Delete from './DeleteIcon';

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonGroup: {
        alignItems: 'center',
        paddingLeft: '64px'
    }
}));

function HeaderBottom() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid style={{ padding: '0' }} className={classes.buttonGroup} container item xs={4}>
                <HeaderButton img={<img alt='' src="" />} text='11 Dec - 15 Dec' />
                <HeaderButton text='Facebook' />
                <HeaderButton text='Google' />
            </Grid>
            <Grid container className={classes.buttonGroup} item xs={3}>
                <FilterButton />
                <Delete />
            </Grid>
        </Grid>
    )
}
export default HeaderBottom