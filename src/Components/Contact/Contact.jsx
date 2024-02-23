/* eslint-disable react/prop-types */
export default function Contact({ data: { id, name, number } }) {
  return (
    <div>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button">Delete</button>
      </li>
    </div>
  );
}
