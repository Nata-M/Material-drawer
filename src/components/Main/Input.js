import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const names = [
    {
        value: 'Coca Cola',
        label: 'Coca Cola',
    },
    {
        value: 'Adidas',
        label: 'Adidas',
    },
]


// const useStylesReddit = makeStyles((theme) => ({
//     root: {
//         overflow: 'hidden',
//     },
//     focused: {},
// }));

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    margin: {
        margin: theme.spacing(1),
        textAlign: 'left',
        width: '95%',
        // borderRadius: '8px',
    },
    resize: {
        fontSize: '12px',
        fontWeight: 'bold',
        backgroundColor: '#ffffff',
        height: '6px',
        // borderRadius: '12px',
        border: '1px solid #d8d8d8',
    }
}));




export default function CustomizedInputs(props) {
    const classes = useStyles();
    const [name, setName] = React.useState('E');


    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <TextField
            label={props.label}
            value={name}
            onChange={handleChange}
            fullWidth
            select
            className={classes.margin}
            variant="filled"
            InputProps={{
                disableUnderline: true,
                classes: {
                    input: classes.resize,
                },
            }}
        >
            {names.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}