import {
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogActions,
} from "@mui/material";
import { usePopup } from "../../../context/UserPopup";

const UserPopup = (props) => {
  const { onSubmit, onClose, title, children } = props;
  const { openPopup, setOpenPopup } = usePopup();
  // openPopup={openPopup}
  // setOpenPopup={setOpenPopup}

  return (
    <Dialog open={openPopup} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
        {/* Include your Formik form here */}
        {/* Use `initialValues` to initialize the form */}
      </DialogContent>
    </Dialog>
  );
};

export default UserPopup;
