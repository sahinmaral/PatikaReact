import React from 'react'
import { useFormik } from 'formik';
import validations from './validations'

function Signup() {

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: () => {
            console.log(values)
        },
        validationSchema: validations
    });

    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email : </label>
                <input
                    name="email"
                    placeholder="Email"
                    type="text"
                    values={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    (errors.email && touched.email) &&
                    <div style={{ color: 'red' }}>{errors.email}
                    </div>
                }

                <br /><br />

                <label htmlFor="password">Password : </label>
                <input
                    name="password"
                    placeholder="Password"
                    type="text"
                    values={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    (errors.password && touched.password) &&
                    <div style={{ color: 'red' }}>{errors.password}
                    </div>
                }

                <br /><br />

                <label htmlFor="passwordConfirm">Confirm Password : </label>
                <input
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    type="text"
                    values={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    (errors.passwordConfirm && touched.passwordConfirm) &&
                    <div style={{ color: 'red' }}>{errors.passwordConfirm}</div>
                }


                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup