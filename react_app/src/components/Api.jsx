import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Api = function () {
    const navigate = useNavigate();

    const instance = axios.create({
        baseURL: 'http://localhost:1337',
        timeout: 1000,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    const api_data = function() {
        instance.get('/users/')
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    navigate('/login')
                }
            });
    };

    return (
        <div>
            {api_data()}
        </div>
    )

}

export default Api;