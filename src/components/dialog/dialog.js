import React from "react";
import Button from "@material-ui/core/Button";
// import TextField from "@matarial-ui/core/TextField";
// import Dialog from "@matarial-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
            <Button variant="outline" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="form-dialog-title">Subscribre</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email adress"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Salvar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Excluir
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
