import { Formik, Form, Field } from 'formik';
import { useId } from 'react';

const initialValues = {
  username: '',
  phonenumber: '',
};

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <p>Form</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="username" id={nameId} />

          <label htmlFor={phoneId}>Number</label>
          <Field type="tel" name="phonenumber" id={phoneId} />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
