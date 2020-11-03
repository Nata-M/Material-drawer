import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ListIcon from '@material-ui/icons/List';
import PrintIcon from '@material-ui/icons/Print';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

const useStyles = makeStyles((theme) => ({
    selectBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    container: {
        alignItems: 'center',
        color: '#9a9a9a',
        fontWeight: 'bold',
        boxSizing: 'border-box',
        height: '100%',
        padding: 0,
        borderBottom: '1px solid #ebebeb',
    },
    block: {
        padding: '25px',
        borderLeft: '1px solid #ebebeb',
        textAlign: 'left',
        height: '100%'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: '1px solid #afafaf',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '14ch',
            },
        },
    },
    list: {
        color: '#ff4e00',
        borderRadius: '6px',
        backgroundColor: 'rgb(248, 224, 212)',
        width: '30px',
        height: '30px',
        padding: '4px',
        marginLeft: '8px'
    },
    containerBlock: {
        justifyContent: 'flex-end',
        padding: '16px',
        alignItems: 'center'
    }

}));



function TableHeader() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.container}>
                <Grid className={classes.selectBlock} item xs={1}>
                    <Select disableUnderline></Select>
                </Grid>
                <Grid item className={classes.block} xs={6}>Ads
                </Grid>
                <Grid className={classes.containerBlock} container item xs={5}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <ListIcon className={classes.list} />
                    <PrintIcon className={classes.list} />
                    <ZoomOutMapIcon style={{ backgroundColor: '#ffffff', border: '1px solid #ff4e00' }} className={classes.list} />
                </Grid>
                <Grid item></Grid>
            </Grid>
        </div>
    )
}




export default TableHeader