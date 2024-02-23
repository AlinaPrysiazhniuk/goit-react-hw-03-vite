/* eslint-disable react/prop-types */
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button
        type="button"
        onClick={() => onDelete(id)}
        className={css.btn_delete}
      >
        Delete
      </button>
    </>
  );
}
