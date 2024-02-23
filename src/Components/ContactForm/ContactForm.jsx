/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import 'yup-phone-lite';

const initialValues = {
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    // .phone('UA', 'Phone number must be valid')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
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
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="span" />
          </div>

          <div>
            <label htmlFor={phoneId}>Number</label>
            <Field type="tel" name="number" id={phoneId} />
            <ErrorMessage name="number" component="span" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
