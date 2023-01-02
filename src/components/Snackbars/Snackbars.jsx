import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { PokeCartContext } from '../PokeCartContext/PokeCartContext';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
    const {open, setOpen,snackbarMsg,snackbarState,closeSnackbar} = React.useContext(PokeCartContext)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        closeSnackbar();
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarState} sx={{ width: '100%' }}>
                {snackbarMsg}
                </Alert>
            </Snackbar>
        </Stack>
    );
}