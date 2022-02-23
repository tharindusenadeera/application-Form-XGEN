import { Dialog } from "@material-ui/core";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";
import {
  dialog_component_props_types,
  dialogaction_component_props_types,
  dialogcontent_component_props_types,
  dialogcontenttext_component_props_types,
  dialogtitle_component_props_types,
} from "../../constants/interfaces";

//DIALOG COMPONENT
export const DialogComponent: FC<dialog_component_props_types> = ({
  open,
  ariaDescribedby,
  ariaLabelledby,
  BackdropComponent,
  children,
  classes,
  disableEscapeKeyDown,
  fullScreen,
  fullWidth,
  maxWidth,
  onBackdropClick,
  onClose,
  PaperComponent,
  PaperProps,
  scroll,
  sx,
  TransitionComponent,
  transitionDuration,
  TransitionProps,
}) => {
  return (
    <Dialog
      open={open}
      aria-Describedby={ariaDescribedby}
      aria-Labelledby={ariaLabelledby}
      BackdropComponent={BackdropComponent}
      children={children}
      classes={classes}
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onBackdropClick={onBackdropClick}
      onClose={onClose}
      PaperComponent={PaperComponent}
      PaperProps={PaperProps}
      scroll={scroll}
      //   sx={sx}
      TransitionComponent={TransitionComponent}
      transitionDuration={transitionDuration}
      TransitionProps={TransitionProps}
    />
  );
};

//DIALOG ACTIONS COMPONENET
export const DialogActionsComponent: FC<dialogaction_component_props_types> = ({
  children,
  classes,
  disableSpacing,
  sx,
}) => {
  return (
    <DialogActions
      children={children}
      classes={classes}
      disableSpacing={disableSpacing}
      sx={sx}
    />
  );
};

//DIALOG CONTENT COMPONENET
export const DialogContentComponent: FC<
  dialogcontent_component_props_types
> = ({ children, classes, dividers, sx }) => {
  return (
    <DialogContent
      children={children}
      classes={classes}
      dividers={dividers}
      sx={sx}
    />
  );
};

//DIALOG CONTENTTEXT COMPONENET
export const DialogContentTextComponent: FC<
  dialogcontenttext_component_props_types
> = ({ children, classes, sx }) => {
  return <DialogContentText children={children} classes={classes} sx={sx} />;
};

//DIALOG TITLE COMPONENET
export const DialogTitleComponent: FC<dialogtitle_component_props_types> = ({
  children,
  classes,
  sx,
}) => {
  return <DialogTitle children={children} classes={classes} sx={sx} />;
};
