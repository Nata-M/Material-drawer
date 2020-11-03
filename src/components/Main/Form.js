import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '0',
            padding: '0',
            width: '95%',
        },
    },
    textfield: {
        textAlign: 'left',
        margin: 'none',
        width: '95%',
    },
    resize: {
        fontSize: '12px',
        fontWeight: 'bold',
        height: '6px',
        backgroundColor: '#ffffff',
    }

}));


function Form(props) {

    const classes = useStyles();
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const names = props.names || [];
    return (
        <div className={classes.root}>
            <TextField
                className={classes.textfield}
                select
                size='small'
                variant='filled'
                InputProps={{
                    disableUnderline: true,
                    classes: {
                        input: classes.resize,
                    },
                }}
                label={props.label}
                value={name}
                onChange={handleChange}
            >
                {names.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}


export default Form