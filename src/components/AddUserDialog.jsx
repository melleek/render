import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";

const AddUserDialog = ({ open, handleClose, addUser }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Add User"}</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ name: "", food: "", city: "" }}
          onSubmit={(values, actions) => {
            let user = { name: values.name, city: values.city, food: values.food };
            addUser(user);
            actions.resetForm();
            handleClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="name" as={TextField} label="Name" fullWidth />
              <Field name="food" as={TextField} label="Food" fullWidth />
              <Field name="city" as={TextField} label="City" fullWidth />
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" disabled={isSubmitting}>Save</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;