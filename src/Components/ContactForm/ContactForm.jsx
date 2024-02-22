import { Formik, Form, Field } from 'formik';

const initialValues = {
  username: '',
  phonenumber: '',
};

export default function ContactForm() {
  return (
    <>
      <p>Form</p>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <Field type="text" name="username" />
          <Field type="tel" name="phonenumber" />
          <button type="button">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
