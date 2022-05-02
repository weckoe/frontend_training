import React from "react";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import axios from "axios";


const LogIn = function () {

    const instance = axios.create({
        baseURL: 'http://localhost:1337',
        timeout: 1000,
    });

    const {handleSubmit, register} = useForm();
    const onSubmit = (data) => {
        instance.post('/token/', data)
            .then(function (response) {
                localStorage.setItem('token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
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
                    label="Password"
                    {...register("password")}
                />

                <Button type="submit">Submit</Button>
            </div>
        </form>
    )

}

export default LogIn;