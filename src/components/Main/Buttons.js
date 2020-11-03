import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    buttonStyle: {
        backgroundColor: '#eaeaea',
        borderRadius: '46px',
        color: '#536a8b',
        fontSize: '11px',
        padding: '12px 18px',
        fontWeight: 'bold',
        marginRight: '12px',
        fontFamily: 'FiraGO'
    },
    img: {
        marginLeft: '8px'
    }
}));


function ButtonIcon(props) {
    const classes = useStyles();
    const text = props.text;
    return (
        <IconButton className={classes.buttonStyle} aria-label="delete" {...props}>
            {text}
            <img className={classes.img} alt='trash' src={require('../../photos/trash.svg')} />
        </IconButton>
    )
}


export default ButtonIcon