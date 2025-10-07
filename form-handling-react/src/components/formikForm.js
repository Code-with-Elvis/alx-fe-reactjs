import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required.")
      .min(3, "Username must be at least 3 characters long."),
    email: Yup.string()
      .required("Email is required.")
      .email("Email must be a valid email address."),
    password: Yup.string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters long."),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="registration-form">
          <h1>Register</h1>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className={errors.username && touched.username ? "error" : ""}
            />
            <ErrorMessage name="username" component="p" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={errors.email && touched.email ? "error" : ""}
            />
            <ErrorMessage name="email" component="p" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={errors.password && touched.password ? "error" : ""}
            />
            <ErrorMessage name="password" component="p" className="error" />
          </div>

          <footer>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </footer>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
