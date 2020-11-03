import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: '#91c716',
        },
    }
});
export default theme;