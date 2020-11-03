import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Form from '../../Main/Form';
import Paper from '@material-ui/core/Paper';
import HeaderTopLink from './HeaderTopLink';
import SearchIcon from '@material-ui/icons/Search';
import Profile from './Profile';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    paper: {
        width: '100%',
        color: '#2e3849',
        fontSize: '5px',
        maxHeight: '12px',
        display: 'flex',
        flexDirection: 'column'
    },
    avatar: {
        backgroundColor: '#ffffff',
        border: '1px solid #d5d5d5',
    },
    container: {
        height: '100%',
        alignItems: 'center',
    },
    headerTopRow: {
        width: '100%',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    selectAccount: {
        display: 'flex',
        borderRight: '1px solid #d5d5d5',
        padding: '10px',
    },
    selectAcc: {
        fontSize: '10px',
        color: '#727272',
    },
    logo: {
        fontSize: '12px',
        fontWeight: 'bold',
    },
    column: {
        paddingLeft: '8px',
        border: 'none',
    },
    select: {
        border: 'none',
        width: '25%',
        outline: 'none',
    },
    textField: {
        maxWidth: '25px',
        maxHeight: '8px',
        border: 'none',
    },
    headerTopLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderRight: '1px solid #d5d5d5',
        textTransform: 'none',
    },
    sselect: {
        "& div": {
            backgroundColor: "red",
            width: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0
        },
        "& input": {
            width: 0,
            padding: 0
        },
        "& span": {
            padding: 0
        },
        "& li": {
            fontSize: 10,
            width: '8px'
        },
        ".MuiSelect-select.MuiSelect-select": {
            paddingRight: 0
        }
    },
}));


function HeaderTop() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.selectAccount} xs={5} item>
                <Avatar className={classes.avatar}>
                    <img className={classes.img} alt="complex" src={require('../../../photos/cola.png')} />
                </Avatar>
                <Grid item xs={4}>
                    <Paper elevation={0} className={classes.paper}>
                        <Form className={classes.textField} label='Select Account'
                            names={[
                                {
                                    value: 'Coca Cola',
                                    label: 'Coca Cola',
                                },
                                {
                                    value: 'Adidas',
                                    label: 'Adidas',
                                },
                            ]} />
                    </Paper>
                </Grid>
            </Grid>
            <Grid className={classes.headerTopLink} item xs={2}>
                <HeaderTopLink textDecoration='underline' color='#2c435a' text='Create Website'></HeaderTopLink>
            </Grid>
            <Grid className={classes.headerTopLink} item xs={2}>
                <HeaderTopLink color='#ff4e00' text='+ Create Ad'></HeaderTopLink>
            </Grid>
            <Grid className={classes.headerTopLink} item xs={1}>
                <HeaderTopLink text='' color='#2c435a' icon={SearchIcon}></HeaderTopLink>
            </Grid>
            <Grid className={classes.headerTopLink} item xs={2}>
                <Profile />
            </Grid>
        </Grid>

    )
}


export default HeaderTop