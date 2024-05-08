import { useReducer } from 'react';

const CALC_OPTIONS = ['add', 'minus', 'divide', 'multiply'];

const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      const { name, value } = action;
      return { ...state, [name]: value };
    }
    case 'add': {
      return { ...state, result: state.a + state.b };
    }
    case 'minus': {
      return { ...state, result: state.a - state.b };
    }
    case 'divide': {
      return { ...state, result: state.a / state.b };
    }
    case 'multiply': {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error('operator is invalid');
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'change', name, value: parseInt(value) });
  };

  return (
    <>
      <div>
        a:
        <input
          type='number'
          name='a'
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type='number'
          name='b'
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
