import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: ""
};

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        console.log("form values", values)
        dispatch(registerUser({userData:values, navigate}))
    };

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="Full Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                    />
                    <Field
                        as={Select}
                        name="role"
                        fullWidth
                        variant="outlined"
                        label="Role"
                        margin="normal"
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                    </Field>

                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant="contained">
                        Register
                    </Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Already have an account?
                <Button size='small' onClick={() => navigate("/account/login")}>
                    Login
                </Button>
            </Typography>
        </div>
    );
};

export default RegisterForm;
