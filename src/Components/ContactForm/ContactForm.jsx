import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import 'yup-phone';

const initialValues = {
  username: '',
  phonenumber: '',
};

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too short!')
    .max(20, 'Too long!')
    .required('Required'),
  phonenumber: Yup.number().min(8).required('A phone number is required'),
});

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="username" id={nameId} />
            <ErrorMessage name="username" component="span" />
          </div>

          <div>
            <label htmlFor={phoneId}>Number</label>
            <Field type="tel" name="phonenumber" id={phoneId} />
            <ErrorMessage name="phonenumber" component="span" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
