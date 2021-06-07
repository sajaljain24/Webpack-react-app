import React from "react"
import ReactDom from "react-dom"
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', streetAddress: '', city: '', state: '', province: '', postalCode: '', phoneNumber: '', }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                streetAddress: Yup.string()
                    .required('Required'),
                city: Yup.string()
                    .required('Required'),
                state: Yup.string()
                    .required('Required'),
                province: Yup.string()
                    .required('Required'),
                postalCode: Yup.string()
                    .required('Required'),
                phoneNumber: Yup.string()
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First"
                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Last"
                        {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}

                    <label htmlFor="streetAddress">Street Address</label>
                    <input
                        id="streetAddress"
                        type="text"
                        placeholder="Street Address"
                        {...formik.getFieldProps('streetAddress')}
                    />
                    {formik.touched.streetAddress && formik.errors.streetAddress ? (
                        <div>{formik.errors.streetAddress}</div>
                    ) : null}

                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        type="text"
                        placeholder="City"
                        {...formik.getFieldProps('city')}
                    />
                    {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                    ) : null}

                    <label htmlFor="state">State</label>
                    <input
                        id="state"
                        type="text"
                        placeholder="State"
                        {...formik.getFieldProps('state')}
                    />
                    {formik.touched.state && formik.errors.state ? (
                        <div>{formik.errors.state}</div>
                    ) : null}

                    <label htmlFor="province">Province</label>
                    <input
                        id="province"
                        type="text"
                        placeholder="Province"
                        {...formik.getFieldProps('province')}
                    />
                    {formik.touched.province && formik.errors.province ? (
                        <div>{formik.errors.province}</div>
                    ) : null}

                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        id="postalCode"
                        type="text"
                        placeholder="Postal Code"
                        {...formik.getFieldProps('postalCode')}
                    />
                    {formik.touched.postalCode && formik.errors.postalCode ? (
                        <div>{formik.errors.postalCode}</div>
                    ) : null}

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        id="phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                        {...formik.getFieldProps('phoneNumber')}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div>{formik.errors.phoneNumber}</div>
                    ) : null}

                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={formik.handleReset}>Reset</button>

                </form>
            )}
        </Formik>
    );
};

ReactDom.render(<SignupForm />, document.getElementById('root'))
