import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ButtonIcon from '../Buttons';
import RadioButton from './RadioButton';
import { Drawer } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#ffffff',
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 48px',
        margin: 0,
        borderBottom: '3px solid #dddddd'
    },
    title: {
        color: '#000000',
        fontFamily: 'FiraGO',
        fontSize: '14px',
        fontWeight: 'bold',
        margin: '0',
        padding: 0
    },
    title2: {
        color: '#ff4e00',
        fontFamily: 'FiraGO',
        fontSize: '14px',
        fontWeight: '900',
        textTransform: 'none',
        fontStyle: 'normal',
        margin: '0',
        padding: 0
    },
    add: {
        flexDirection: 'column',
        padding: '0 48px'
    },
    options: {
        display: 'flex',
    },
    block: {
        flexDirection: 'column',
        width: '100%',
        padding: '0 48px',
        marginTop: '26px',
        marginBottom: '60px'
    },
    img: {
        width: '100%'
    },
    buttonBlock: {
        justifyContent: 'space-between',
        padding: '16px 0'
    },
    button: {
        textTransform: 'none',
        backgroundColor: '#ff4e00',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '12px 84px',
        '&:hover': {
            backgroundColor: '#ff4e00'
        }
    },
    card: {
        display: 'flex',
        alignItems: 'center'
    },
    textBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        marginLeft: '10px'
    },
    txt: {
        fontSize: '12px',
        color: '#7c899d',
        fontFamily: 'FiraGO'
    },
    txt2: {
        color: '#2e3849',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 20px',
        border: '1px dashed #bfbfbf',
        borderRadius: '27px'
    },
    buttons: {
        display: 'flex',
        alignItems: 'baseline',
        margin: '20px 0',
    },
    secondaryText: {
        fontSize: '12px',
        fontFamily: 'FiraGO',
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: '10px'
    },
    txtStyle: {
        fontSize: '12px',
        fontFamily: 'FiraGO',
        color: '#ff4e00',
        textDecoration: 'underline',
        fontWeight: 'bold'
    },
    box: {
        border: '1px solid #d8d8d8',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '8px',
        borderRadius: '8px',
    },
    radio: {
        width: '100%',
        display: 'flex'

    },
    drawerPaper: {
        width: '50%',
        right: 0
    }
}));


function LocationBlock() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.header}>
                <Typography className={classes.title}>Choose Location</Typography>
                <Button className={classes.title2}><i class="fa fa-times" style={{ marginRight: '8px' }}></i>Close</Button>
            </Grid>
            <Grid container item className={classes.add}>
                <Grid item className={classes.radio}>
                    <RadioButton label='Find new customers by' values={
                        [
                            { name: 'near an address', val: 'a' },
                            { name: 'specific zip codes and cities', val: 'b' },
                        ]
                    } />
                </Grid>
                <Grid className={classes.box}>
                    <Grid item className={classes.textBlock}>
                        <Typography className={classes.txt}>Whats's your business address?</Typography>
                        <Typography className={classes.txt2}>Telavi</Typography>
                    </Grid>
                    <Button className={classes.title2}><i class="fa fa-plus" style={{ marginRight: '8px' }}></i>Add</Button>
                </Grid>
                <Grid item className={classes.buttons}>
                    <ButtonIcon text='Batumi' />
                    <ButtonIcon text='Kutaisi' />
                    <ButtonIcon text='Tbilisi' />
                </Grid>
                <Grid item className={classes.item}>
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <img style={{ weight: '9px', height: '11px' }} alt='notifictaion' src={require('../../../photos/notification.svg')} />
                        <Typography className={classes.secondaryText}>It's Not effective, please be sure that you have selected...</Typography>
                    </Grid>
                    <Typography className={classes.txtStyle}>Learn Digital Marketing</Typography>
                </Grid>
            </Grid>
            <Grid container item className={classes.block}>
                <img className={classes.img} alt='map' src={require('../../../photos/map.png')} />
                <Grid container item className={classes.buttonBlock}>
                    <Grid item className={classes.card}>
                        <img alt='user' src={require('../../../photos/user_acc.svg')} />
                        <Grid item className={classes.textBlock}>
                            <Typography className={classes.txt}>Potential audience size</Typography>
                            <Typography className={classes.txt2}>2,014,340 People</Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Button className={classes.button}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

function LocationDrawer(props) {
    const open = props.open
    const onClose = props.onClose
    const classes = useStyles();


    return (
        <Drawer open={open} onClose={onClose} anchor='right' classes={{
            paper: classes.drawerPaper,
        }}>
            <LocationBlock />
        </Drawer>
    )
}

export default LocationDrawer