import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { PokeCartContext } from '../PokeCartContext/PokeCartContext';
import { Slide } from '@material-ui/core';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

export default function CustomizedSnackbars() {
    const {open,snackbarMsg,snackbarState,closeSnackbar} = React.useContext(PokeCartContext)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        closeSnackbar();
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} TransitionComponent={TransitionDown}>
                <Alert onClose={handleClose} severity={snackbarState} sx={{ width: '100%' }}>
                {snackbarMsg}
                </Alert>
            </Snackbar>
        </Stack>
    );
}