import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    profile: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: '20px'
    }
}));

function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.profile}>
            <Avatar>
                <img alt='profile' src={require('../../../photos/profile.png')} />
            </Avatar>
            <Select disableUnderline />
        </div>
    )
}
export default Profile