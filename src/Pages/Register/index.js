import React from "react";

import { Formik } from "formik";
import "./style.css";
import {registerUser} from '../../API'
import { setData } from "../../Services/Storage/index.js";
import { toastSuccess,toastError} from "../../Services/Tostify/index.js";
import {useNavigate} from "react-router-dom";


function Register() {
const navigate=useNavigate();


  return (
    <div className="rescontainer">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validate={(values) => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password < 6) {
            errors.password = "minimum char should be 7";
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "match the password";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
           let res = await registerUser(values);
         setTimeout(() => {
          
          if (!res.status.error) {
            setData("USER_DATA", res.data);
            navigate('/');

            toastSuccess("Registration Successfull");
            //  setSubmitting(false);
            
          }
           
         },400);
          
          
        }}
      >
        {({
          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting

          /* and other goodies */
        }) => (
          <form className="resformdiv" onSubmit={handleSubmit}>
            <h1>Registration-Form</h1>

            <div>
              <label>FirstName:</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
            </div>
            {errors.firstName && touched.firstName && errors.firstName}

            <div>
              <label>LastName:</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </div>
            {errors.lastName && touched.lastName && errors.lastName}

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>

            {errors.email && touched.email && errors.email}
            <div>
              <label>password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>

            {errors.password && touched.password && errors.password}

            <div>
              <label>Confirm-password:</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </div>
            {errors.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default Register;
