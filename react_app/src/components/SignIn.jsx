import React from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from "@mui/material";
import {FormGroup} from "@mui/material";
import {useForm} from "react-hook-form";
import axios from "axios";


const SignIn = function () {

    const instance = axios.create({
        baseURL: 'http://localhost:1337/',
        timeout: 1000,
        headers: {"Access-Control-Allow-Origin": "*"}
    });


    const {handleSubmit, register} = useForm();
    const onSubmit = (data) => {
        instance.post('/users', {data})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3> SCHOOL SYSTEM </h3>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="first_name"
                    label="First Name"
                    type="first_name"
                    id="first_name"
                    {...register("first_name")}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="last_name"
                    label="Last Name"
                    type="last_name"
                    id="last_name"
                    {...register("last_name")}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="Email"
                    id="email"
                    {...register("email")}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password1"
                    label="Password"
                    type="password"
                    id="password1"
                    {...register("password1")}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password1"
                    label="Password2"
                    type="password"
                    id="password2"
                    {...register("password2")}
                />

                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Is Student" {...register("is_student")}/>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </div>
        </form>
    )

}

export default SignIn;