/* eslint-disable react/prop-types */
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </div>
  );
}
