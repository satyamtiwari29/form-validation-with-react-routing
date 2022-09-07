import React from "react";

import { Formik } from "formik";
import "./style.css";
import {loginUser} from "../../API";
import {setData} from "../../Services/Storage/index.js";
import {useNavigate} from "react-router-dom";
import { toastSuccess,toastError} from "../../Services/Tostify/index.js";

function LogIn() {
  const navigate=useNavigate();
  return (
    <div className="container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 6) {
            errors.password = "password char should be minimum7";
          }

          return errors;
        }}
        onSubmit={ async(values, { setSubmitting }) => {
          let response=await loginUser(values);
          console.log(response);
          setTimeout(() => {
            if(!response.status.error ){
              setData("USER_DATA",response.data);
              toastSuccess(response.status.message);
              navigate('/');

            }
            else{
              toastError(response.status.message)
            }
            

            setSubmitting(false);
          }, 400);
          // navigate('/')
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
          <form className="loginformdiv" onSubmit={handleSubmit}>
            <h1>LogIn</h1>

            <div>
              <label>Email:</label>
              <br />
              <br />
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
              <br />
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {errors.password && touched.password && errors.password}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default LogIn;
