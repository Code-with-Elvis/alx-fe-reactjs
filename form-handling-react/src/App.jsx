import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <section>
      <div className="container">
        <RegistrationForm />
        <div className="divider"></div>
        <FormikForm />
      </div>
    </section>
  );
};
export default App;
