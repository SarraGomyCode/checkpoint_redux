import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { editItem } from "../Redux/Actions/editAction";

const EditList = ({ task }) => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState(task);

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = () => {
    setOpen(false);
    dispatch(editItem(task.id, text));
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Task"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              autoFocus
              margin="dense"
              id="date"
              label="Task"
              value={task.task} onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChange} color="primary" autoFocus>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditList;
