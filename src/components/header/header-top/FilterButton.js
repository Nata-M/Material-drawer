import React from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
    icon: {
        borderRadius: '46px',
        backgroundColor: '#2c7df0',
        color: '#ffffff',
        padding: '18px 20px',
        height: '25px',
        textTransform: 'none',
        marginRight: '18px',
        boxShadow: 'none',
    }
}));

function FilterButton() {
    const classes = useStyles();
    return (
        <IconButton className={classes.icon}>
            <FilterListIcon />
            Filter
        </IconButton>
    )
}
export default FilterButton