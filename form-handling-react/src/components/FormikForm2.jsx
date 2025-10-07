import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm2 = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="registration-form">
          <h1>Register</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className={` ${
                errors.username && touched.username ? "error" : ""
              }`}
            />
            <ErrorMessage name="username" component="p" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={` ${errors.email && touched.email ? "error" : ""}`}
            />
            <ErrorMessage name="email" component="p" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={` ${
                errors.password && touched.password ? "error" : ""
              }`}
            />
            <ErrorMessage name="password" component="p" className="error" />
          </div>
          <footer>
            <button type="submit">Submit</button>
          </footer>
        </Form>
      )}
    </Formik>
  );
};
export default FormikForm2;
