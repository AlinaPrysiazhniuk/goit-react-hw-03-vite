import { Formik, Form, Field } from 'formik';

const initialValues = {
  username: '',
  phonenumber: '',
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

export default function ContactForm() {
  return (
    <>
      <p>Form</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="">Name</label>
          <Field type="text" name="username" />
          <Field type="tel" name="phonenumber" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
