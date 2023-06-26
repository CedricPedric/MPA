import React from "react";
import { useForm } from 'react-hook-form';
import "./LoginPage.scss"

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();

        return (
        <form onSubmit={handleSubmit((data) => SendUserData(data))}>
            <input {...register('userName', { required: true })} />
            {errors.userName && <p>Username is required.</p>}
            <input {...register('passWord', { required: true })} />
            {errors.passWord && <p>Password is required.</p>}
            <input type="submit" />
        </form>
        );
}

const SendUserData = (data) => {
    console.log(data)

    fetch('/api/getuser', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.userName,
            password: data.passWord,
        })
    }).then(() => console.log("its been pressed"))}

export default LoginPage