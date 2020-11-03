import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form';
import SearchButton from './SearchButton';
import ButtonIcon from './Buttons';
import TextButton from './TextButtons';
import PrintIcon from '@material-ui/icons/Print';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SelectButton from './SelectButton';
import TableContent from './TableContent';
import TableHeader from './TableHeader';
import TableFooterGrid from './TableFooterGrid';
import LocationBlock from './location/LocationBlock';
// import { Table } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        padding: '32px 32px 0 32px',
        borderRadius: '6px',
    },
    paper: {
        width: '100%',
        color: '#2e3849',
        fontSize: '5px',
        border: '1px solid #d8d8d8',
        borderRadius: '8px',
        maxHeight: '46px'
    },
    button: {
        backgroundColor: '#ff4e00',
        maxHeight: '50px',
    },
    buttonContainer: {
        borderBottom: '1px solid #d8d8d8',
        // justifyContent: 'space-between'
    },
    textButtons: {
        justifyContent: 'flex-end',
        borderBottom: '1px solid #d8d8d8',
    },
    selectButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    grid: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        borderRadius: '6px',
        marginTop: '50px',
        alignItems: 'flex-end'
    }
}));

function Main() {
    const classes = useStyles();
    const [locationDrawerOpen, setLocationDrawerOpen] = useState(false)
    return (
        <div>
            <form className={classes.root}>
                <div>
                    <Grid container spacing={2}>
                        <Grid container item xs={4}>
                            <Paper elevation={0} className={classes.paper}>
                                <Form label='User' names={[
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
                        <Grid container item xs={4}>
                            <Paper elevation={0} className={classes.paper}>
                                <Form label='Network' names={[
                                    {
                                        value: 'Facebook',
                                        label: 'Facebook',
                                    },
                                    {
                                        value: 'Google',
                                        label: 'Google',
                                    },
                                ]} />
                            </Paper>
                        </Grid>
                        <Grid container item xs={4}>
                            <Paper elevation={0} className={classes.paper}>
                                <Form label='Country'
                                    names={[
                                        {
                                            value: 'Georgia',
                                            label: 'Georgia',
                                        },
                                        {
                                            value: 'USA',
                                            label: 'USA',
                                        },
                                    ]} />
                            </Paper>
                        </Grid>
                        <Grid container item xs={4}>
                            <Paper elevation={0} className={classes.paper}>
                                <Form label='Ad Name'
                                    names={[
                                        {
                                            value: 'Ad',
                                            label: 'Website change',
                                        },
                                        {
                                            value: 'Ad',
                                            label: 'Create website',
                                        },
                                    ]} />
                            </Paper>
                        </Grid>
                        <Grid container item xs={4}>
                            <Paper elevation={0} className={classes.paper}>
                                <Form label='Label' names={[
                                    {
                                        value: 'label',
                                        label: 'label',
                                    },
                                ]}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={0} className={classes.button}>
                                <SearchButton />
                            </Paper>
                        </Grid>
                        <Grid className={classes.buttonContainer} container item sm={8}>
                            <ButtonIcon text='Coca Cola' onClick={() => setLocationDrawerOpen(true)} />
                            <ButtonIcon text='Facebook' />
                            <ButtonIcon text='All' />
                            <ButtonIcon text='11.03.2019' />
                        </Grid>
                        <Grid className={classes.textButtons} container item xs={4}>
                            <TextButton text='Export' decoration='underline' icon={PrintIcon} />
                            <TextButton text='Reset' decoration='none' color='#ff4e00' icon={RotateLeftIcon} />
                        </Grid>
                        <Grid className={classes.selectButton} container item>
                            <SelectButton />
                        </Grid>
                    </Grid>
                </div>
            </form>
            <Grid className={classes.grid}>
                <TableHeader />
                <TableContent />
                <TableFooterGrid />
            </Grid>
            <Grid><LocationBlock open={locationDrawerOpen} onClose={() => setLocationDrawerOpen(false)} /></Grid>
        </div>
    );
}

export default Main