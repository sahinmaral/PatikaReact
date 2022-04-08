import React from 'react'
import { useFormik } from 'formik';

function FormikBasic() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'janedoe@hotmail.com',
            gender: 'female',
            hobbies: ['cinema', 'football'],
            country: 'china'
        },
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    values={values.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange} />

                <br /><br />

                <label htmlFor="lastName">Last Name</label>
                <input
                    name="lastName"
                    values={values.lastName}
                    placeholder="Last Name"
                    onChange={handleChange} />

                <br /><br />

                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    values={values.email}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="gender">Gender</label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={values.gender === "male"}
                    onChange={handleChange}
                /><span>Male</span>

                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={values.gender === "female"}
                    onChange={handleChange}
                /><span>Female</span>

                <br /><br />

                <label htmlFor='hobbies'>Country </label>
                <div>
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="football"
                        checked={values.hobbies.some((hoby) => hoby === 'football')}
                        onChange={handleChange} />
                    <span>Football</span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="cinema"
                        checked={values.hobbies.some((hoby) => hoby === 'cinema')}
                        onChange={handleChange} />
                    <span>Cinema</span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="photograph"
                        checked={values.hobbies.some((hoby) => hoby === 'photograph')}
                        onChange={handleChange} />
                    <span>Photograph</span>
                </div>

                <br /><br />

                <label htmlFor='country'>Country </label>
                <select name="country" onChange={handleChange} value={values.country}>
                    <option value="turkey">Turkey</option>
                    <option value="china">China</option>
                    <option value="russia">Russia</option>
                </select>

                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikBasic