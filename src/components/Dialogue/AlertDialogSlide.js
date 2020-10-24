import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './AlertDialogSlide.css';
import { Button } from '../Button/Button';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Want to watch a movie?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ textAlign: 'center' }}
            id="alert-dialog-slide-description"
          >
            Please sign up
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dialog-action-container">
          <div className="disagree">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              draggable={false}
              to="/"
              onClick={handleClose}
            >
              <Button
                buttonSize="btn--medium"
                buttonStyle="btn--dialog"
                buttonColor="disagree-red"
              >
                Disagree
              </Button>
            </Link>
          </div>

          <div className="agree">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              draggable={false}
              to="/login"
              onClick={handleClose}
            >
              <Button
                buttonSize="btn--medium"
                buttonStyle="btn--dialog"
                buttonColor="agree-green"
              >
                Agree
              </Button>
            </Link>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
