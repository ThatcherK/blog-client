import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required!'),
            email: Yup.string().email('Invalid email format').required('Required!'),
            password: Yup.string().min(8, 'Minimum 8 characters').required('Required!')
        }),
        onSubmit: (event, onSubmitProps) => {
            handleSignUp(event);
            onSubmitProps.resetForm()
        }
    });
    const handleSignUp = ()=>{
        
    }
    return (
        <form className="signinForm" onSubmit={formik.handleSubmit}>

            <input type="text" placeholder="Enter Username" onChange={formik.handleChange}
                name="username"
                value={formik.values.username} />

            <input type="text" placeholder="Enter Email" onChange={formik.handleChange}
                name="email"
                value={formik.values.email} />

            <input type="password" placeholder="Password" onChange={formik.handleChange}
                name="password"
                value={formik.values.password} />

            <button variant="primary" type="submit">
                Submit
            </button>
        </form>
    )
}