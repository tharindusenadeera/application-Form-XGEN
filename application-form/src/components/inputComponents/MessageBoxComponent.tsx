import { FC, useState } from "react";
import { messagebox_component_props_types } from "../../constants/interfaces";
import { ButtonComponent } from "./ButtonComponent";
import {
  DialogActionsComponent,
  DialogComponent,
  DialogContentComponent,
  DialogContentTextComponent,
  DialogTitleComponent,
} from "./DialogComponent";

export const MessageBoxComponent: FC<messagebox_component_props_types> = ({
  title,
  message,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ButtonComponent
        variant="outlined"
        title="Open alert dialog"
        onClick={handleClickOpen}
      />

      <DialogComponent
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitleComponent id="alert-dialog-title">
          {title}
        </DialogTitleComponent>
        <DialogContentComponent>
          <DialogContentTextComponent id="alert-dialog-description">
            {message}
          </DialogContentTextComponent>
        </DialogContentComponent>
        <DialogActionsComponent>
          <ButtonComponent title="Done" onClick={handleClose} />
        </DialogActionsComponent>
      </DialogComponent>
    </>
  );
};
