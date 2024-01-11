import { Link } from 'react-router-dom'

///
import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import * as Yup from "yup"
import axios from 'axios'

import FileBase64 from 'react-file-base64';

//
//modal
import { Box, TextField, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



//satyle 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const api = "http://localhost:3000/data"




function Order() {
    const initialValues = {
        username: "",
        password: "",
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Username is reguired"),
        password: Yup.string().required("Password is reguired"),
    })

    const onSubmit = (values, { resetForm, setSubmitting }) => {
        try {
            const { initialValues } = axios.post()
        } catch (error) {
            console.log(error);
        }
        console.log(values);
        resetForm();
        setSubmitting(false)
    }


    const [base64F, setBase64F] = useState(null)
    const [base64F1, setBase64F1] = useState(null)

    const handleImg = (file) => {
        setBase64F(file.base64)
    }

    const handleImg1 = (file) => {
        setBase64F1(file.base64)
    }

    //modal 
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //modal  add
    const [openAdd, setOpenAdd] = useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };


    const [todo, setTodo] = useState([])
    const [addName, setAddName] = useState("")
    const [addCity, setAddCity] = useState("")
    const [addFood, setAddFood] = useState("")

    const [editName, setEditName] = useState("")
    const [editCity, setEditCity] = useState("")
    const [editFood, setEditFood] = useState("")
    const [idx, setIdx] = useState(null)


    // function get
    async function get() {
        try {
            let { data } = await axios.get(api)
            setTodo(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        get()
    }, [])


    // Delete user
    async function deleteUser(id) {
        try {
            let { data } = await axios.delete(`${api}/${id}`)
            get()
        } catch (error) {
            console.log(error);
        }
    }

    // Edit user
    async function editUser(id, user) {
        try {
            let { data } = await axios.put(`${api}/${id}`, user);
            get()
        } catch (error) {
            console.log(error);
        }
    }

    // Add user
    async function addUser(user) {
        try {
            let { data } = await axios.post(api, user)
            get()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {/* <h1>Vocansia</h1>
            {
                data.map((e) => {
                    return (
                        <p key={e.id}>
                            <Link to={`user/${e.id}`} >{e.name}</Link>
                        </p>
                    )
                })
            } */}

            {/* section 15 TODOLIST*/}
            <section className='lg:py-[80px] lg:px-[80px] dark:bg-[#232323] sm:p-[24px]'>
                <TableContainer
                    sx={{
                        width: "95%",
                        margin: "0 auto",
                        paddingBottom: "50px",
                        paddingTop: "10px",
                    }}
                >
                    <button
                        className="bg-[black] py-[5px] px-[15px] rounded-[5px] text-white mb-[20px]"
                        onClick={() => {
                            handleClickOpenAdd();
                        }}
                    >
                        ADD
                    </button>
                    <Table sx={{ minWidth: 400 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right" sx={{ textAlign: "start" }}>Img</StyledTableCell>
                                <StyledTableCell align="right" sx={{ textAlign: "center" }}>Name</StyledTableCell>
                                <StyledTableCell align="right" sx={{ textAlign: "center" }}>Country</StyledTableCell>
                                <StyledTableCell align="right" sx={{ textAlign: "center" }}>Food</StyledTableCell>
                                <StyledTableCell align="right" sx={{ textAlign: "center" }}>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todo.map((e) => (
                                <StyledTableRow>
                                    <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                                        {<img src={e.file} className="rounded-[50%] h-[100px] w-[100px]" />}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="right"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {e.name}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="right"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {e.city}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="right"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {e.food}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="right"
                                        sx={{ textAlign: "center" }}
                                    >
                                        <Box className="flex justify-center items-center gap-[20px]">
                                            <button
                                                className="bg-[#bf8080] px-[25px] text-[white] p-[8px] rounded-[10px]"
                                                onClick={() => deleteUser(e.id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="bg-[#6a6a9e] px-[20px] text-[white] p-[8px] rounded-[10px]"
                                                onClick={() => {
                                                    handleClickOpen();
                                                    setIdx(e.id);
                                                    setEditName(e.name);
                                                    setBase64F(e.file);
                                                    setEditCity(e.city);
                                                    setEditFood(e.food);
                                                }}
                                            >
                                                Edit
                                            </button>
                                        </Box>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>


            {/* //modal Edit*/}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
                <Formik
                    initialValues={{
                        name: editName,
                        food: editFood,
                        city: editCity,
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Пожалуйста, заполните это поле';
                        }
                        if (!values.food) {
                            errors.food = 'Пожалуйста, заполните это поле';
                        }
                        if (!values.city) {
                            errors.city = 'Пожалуйста, заполните это поле';
                        }
                        return errors;
                    }}                    
                    onSubmit={(values, { resetForm }) => {
                        let obj = {
                            name: values.name,
                            food: values.food,
                            city: values.city,
                            file: base64F,
                        };
                        editUser(idx, obj);
                        handleClose();
                        resetForm();
                    }}
                >
                    <Form>
                        <DialogContent>
                            <DialogContentText
                                sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
                                id="alert-dialog-description"
                            >
                                <Field name="name" as={TextField} label="Name" />
                                <ErrorMessage name="name" />
                                <Field name="food" as={TextField} label="Food" />
                                <ErrorMessage name="food" />
                                <Field name="city" as={TextField} label="City" />
                                <ErrorMessage name="city" />
                                <FileBase64 multiple={false} onDone={handleImg} />
                                <img src={base64F} className="rounded-[50%] w-[50px] h-[50px]" />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Save</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>

            {/* modal add */}
            <Dialog
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Add User"}</DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            name: '',
                            food: '',
                            city: '',
                            file: '',
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Пожалуйста, заполните это поле';
                            }
                            if (!values.food) {
                                errors.food = 'Пожалуйста, заполните это поле';
                            }
                            if (!values.city) {
                                errors.city = 'Пожалуйста, заполните это поле';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            let user = {
                                name: values.name,
                                city: values.city,
                                food: values.food,
                                file: values.file,
                            };
                            addUser(user);
                            resetForm();
                            handleCloseAdd();
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                    <Field name="name" placeholder="Name" as={TextField} />
                                    <ErrorMessage name="name" component="div" />

                                    <Field name="food" placeholder="food" as={TextField} />
                                    <ErrorMessage name="food" component="div" />

                                    <Field name="city" placeholder="country" as={TextField} />
                                    <ErrorMessage name="city" component="div" />

                                    <FileBase64 multiple={false} onDone={handleImg1} />
                                    <img src={base64F1} className="rounded-[50%] w-[50px] h-[50px]" />

                                    <DialogActions>
                                        <Button onClick={handleCloseAdd}>Cancel</Button>
                                        <Button type="submit" disabled={isSubmitting}>Save</Button>
                                    </DialogActions>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Order
