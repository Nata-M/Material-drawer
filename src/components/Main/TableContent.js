import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SwitchButton from './SwitchButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

const StyleTableCell = withStyles((theme) => ({
    head: {
        fontSize: '10px',
        width: '100%',
        color: '#000000',
        fontWeight: 'bold',
        '&:hover': {
            color: '#ff4e00',
            cursor: 'pointer',
            transition: '0.5s'
        },
    },
    body: {
        fontSize: 10,
        color: '#000000',
        // width: '100%',
        fontWeight: 'bold'
    },
    alignCenter: {
        align: 'center'
    }
}))(TableCell);


const useStyles = makeStyles({
    nameStyle: {
        backgroundColor: '#eaeaea',
        padding: '4px 8px',
        borderRadius: '30px',
        color: '#151a22',
        width: '100%',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        position: 'relative',
        '&:hover $txt': {
            opacity: 1
        }
    },
    table: {
        width: '100%',
        fontSize: '10px',
        border: 'none'
        // maxHeight: '300px'
    },
    percentage: {
        backgroundColor: '#91c716',
        borderRadius: '30px',
        padding: '4px',
        color: '#ffffff',
        textAlign: 'center',
    },
    redBackground: {
        backgroundColor: '#eb2f20'
    },
    icon: {
        marginLeft: '8px'
    },
    display: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        "& img": {
            width: '18px',
            height: '20px',
        },
    },
    avatar: {
        backgroundColor: '#91c716',
        width: '18px',
        height: '20px',
        marginRight: '6px'
    },
    itemWidth: {
        maxWidth: '20px'
    },
    txt: {
        fontSize: '10px',
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'underline',
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(255,255, 255, 1))',
        position: 'absolute',
        color: '#ff4e00',
        cursor: 'pointer',
        transition: '0.5s',
        right: 8,
        opacity: 0,
        paddingLeft: 16,
    }
});


function createData(name, country, formdata, onesignal, fireb, adclick, userclick, cpc, rpc, adsense, score, process, other) {
    return { name, country, formdata, onesignal, fireb, adclick, userclick, cpc, rpc, adsense, score, process, other };
}

const rows = [
    createData('To be best and make website', 'Kaz', 105, 514, '456/456', 0.18, 0, 78.16, 78.16, '+1.23', 'Good', ' .', '...'),
    createData('Website that changes system corporation', 'Geo', 105, 514, '456/456', 0.18, 0, 78.16, 78.16, '+1.23', 'Normal', ' ', '...'),
    createData('Mis Martin google government manage', 'Turk', 105, 514, '456/456', 0.18, 0, 78.16, 78.16, '-1.23', 'Bad', ' ', '...'),
    createData('Website than changes system corporation', 'USA', 105, 514, '456/456', 0.18, 0, 78.16, 78.16, '-1.23', 'Good', ' ', '...'),
    createData('Make America Great again Kendriq Lamar', 'USA', 105, 514, '456/456', 0.18, 0, 78.16, 78.16, '-1.23', 'Good', ' ', '...'),
];


export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.row}>
                        <StyledTableCell className={classes.itemWidth} text='Ad Name' />
                        <StyledTableCell text='Country' />
                        <StyledTableCell text='FormData' />
                        <StyledTableCell text='Onesignal' />
                        <StyledTableCell text='FireB' />
                        <StyledTableCell text='AdClick' />
                        <StyledTableCell text="UserClick" />
                        <StyledTableCell text="CPC" />
                        <StyledTableCell text="RPC" />
                        <StyledTableCell text="Adsense" />
                        <StyledTableCell text="Score" />
                        <StyleTableCell align="center">Process</StyleTableCell>
                        <StyleTableCell align="left">...</StyleTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <StyleTableCell className={classes.names} component="th" scope="row">
                                <div className={`${classes.nameStyle}`}>
                                    {row.name}
                                    <div className={classes.txt}>
                                        <EditIcon style={{ fontSize: 12 }} />
                                        Edit Name
                                    </div>
                                </div>
                            </StyleTableCell>
                            <StyleTableCell align="left">{row.country}</StyleTableCell>
                            <StyleTableCell align="left">{row.formdata}</StyleTableCell>
                            <StyleTableCell align="left">{row.onesignal}</StyleTableCell>
                            <StyleTableCell align="left">{row.fireb}</StyleTableCell>
                            <StyleTableCell align="left">{row.adclick}</StyleTableCell>
                            <StyleTableCell align="left">{row.userclick}</StyleTableCell>
                            <StyleTableCell align="left">{row.cpc}</StyleTableCell>
                            <StyleTableCell align="left">{row.rpc}</StyleTableCell>
                            <StyleTableCell className={classes.child} align="left">
                                <div className={`${classes.percentage} ${row.adsense < 0 ? classes.redBackground : ''}`}>
                                    {row.adsense}
                                </div>
                            </StyleTableCell>
                            <StyleTableCell align="left">
                                <div className={classes.image}>
                                    <Avatar className={classes.avatar}>
                                        <img alt='' src={require('../../photos/dataninja.svg')} />
                                    </Avatar>
                                    {row.score}
                                </div>
                            </StyleTableCell>
                            <StyleTableCell align="center">
                                <SwitchButton />
                            </StyleTableCell>
                            <StyleTableCell align="left">{row.other}</StyleTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}


function StyledTableCell(props) {
    const text = props.text;
    const classes = useStyles();
    return (
        <StyleTableCell align="left">
            <div className={classes.display}>
                <p>{text}</p>
                <span className={classes.icon}>
                    <i className="fa fa-sort"></i>
                </span>
            </div>
        </StyleTableCell>
    )
}