import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

export const RedRadio = withStyles({
    root: {
        color: '#a0a0a0',
        '&$checked': {
            color: '#ff4e00',
        },
    },
    checked: {},
})((props) => <Radio color="#ff4e00" fontWeight='bold' {...props} />);

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    CollapsibleRadioLabel: {
        marginRight: '20px',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    radio: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    label: {
        fontSize: '100px',
        '& .MuiTypography-body1': {
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'FiraGO'
        }
    }
}));

export default function RadioButton(props) {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState(1);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Grid className={classes.main}>
            <label className={classes.CollapsibleRadioLabel}>{props.label}:</label>
            {props.values.map((value, index) =>
                <FormControlLabel className={classes.label} key={index} values={value.val} control={
                    <RedRadio
                        checked={selectedValue === value.val}
                        onChange={handleChange}
                        className={classes.radio}
                        value={value.val}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                        size="small"
                    />
                } label={value.name} />
            )}
        </Grid>
    );
}
