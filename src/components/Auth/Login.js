import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom'; // Import useHistory

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const history = useHistory(); // Initialize useHistory

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Make an API request to authenticate the user
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Authentication successful, redirect to a protected route or set a token in your app's state
        // Example: setAuthToken(response.data.token);
        history.push('/dashboard'); // Redirect to a protected route
      } else {
        // Authentication failed, handle errors
        const errorData = await response.json();
        // Handle error messages and display them in the form
        setErrors(errorData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
