import { useState } from 'react';

const Example = () => {
  const [selected, setSelected] = useState('Banana');

  const OPTIONS = ['Apple', 'Banana', 'Cherry'];

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
        {/* <option value='Apple'>Apple</option>
        <option value='Banana'>Banana</option>
        <option value='Cherry'>Cherry</option> */}
      </select>
      <div>選択された果実：{selected}</div>
    </>
  );
};

export default Example;
