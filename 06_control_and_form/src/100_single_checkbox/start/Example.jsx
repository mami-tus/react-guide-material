import { useState } from 'react';
const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const toggleChecked = (e) => {
  //   setIsChecked(e.target.checked);
  // };
  return (
    <div>
      <label htmlFor='my-check'>チェック：</label>
      <input
        type='checkbox'
        id='my-check'
        checked={isChecked}
        onChange={() => setIsChecked((prevState) => !prevState)}
      />
      <div>{isChecked ? 'ON!' : 'NO!'}</div>
    </div>
  );
};

export default Example;
