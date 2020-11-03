import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({

    buttonClass: {
        textTransform: 'none',
        color: '#ff4e00',
        padding: '4px',
        fontSize: '14px',
    },
    selectStyle: {
        color: '#ff4e00',
        border: 'none',
    }
}));

function SelectButton() {
    const classes = useStyles();
    return (
        <div>
            <Button value='Detailed Filter' className={classes.buttonClass}>
                Detailed Filter
                <select className={classes.selectStyle}></select>
                {/* <Select labelStyle={{ color: 'green' }} className={classes.selectStyle} disableUnderline /> */}
            </Button>
        </div>
    )
}


export default SelectButton