/* eslint-disable react/prop-types */
import { useId } from 'react';

export default function SearchContact({ value, onFilter }) {
  const serchBboxId = useId();
  return (
    <div>
      <label htmlFor={serchBboxId}>Find contact by name</label>
      <input
        type="text"
        name="searchbox"
        id={serchBboxId}
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
