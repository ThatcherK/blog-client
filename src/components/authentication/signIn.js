import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import instance from '../../config/axiosConfig';

export default function SignIn() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required!'),
            password: Yup.string().min(8, 'Minimum 8 characters').required('Required!')
        }),
        onSubmit: (event, onSubmitProps) => {
            handleLogIn(event);
            onSubmitProps.resetForm()
        }
    });
    const payload = {
        username: formik.values.username,
        password: formik.values.password
    }
    const handleLogIn = () => {
        instance.post('auth/token/',payload).then(response=>{
            console.log(response)
        })
    }
    return (
        <form className="signinForm" onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="Enter Username" onChange={formik.handleChange}
                name="username"
                value={formik.values.username} />

            <input type="password" placeholder="Password" onChange={formik.handleChange}
                name="password"
                value={formik.values.password} />

            <button variant="primary" type="submit">
                Submit
            </button>
        </form>
    )
}