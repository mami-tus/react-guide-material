import { useReducer } from 'react';

const CALC_OPTIONS = ['add', 'minus', 'divide', 'multiply'];

const reducer = (state, action) => {
  switch (action.type) {
    case 'calculate':
      const { a, b } = state;
      let result;
      switch (action.operation) {
        case 'add':
          result = a + b;
          break;
        case 'minus':
          result = a - b;
          break;
        case 'divide':
          result = a / b;
          break;
        case 'multiply':
          result = a * b;
          break;
        default:
          result = state.result;
      }
      return { ...state, result };
    case 'set_number':
      return { ...state, [action.name]: action.value };
    default:
      return state;
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
    dispatch({ type: 'calculate', operation: e.target.value });
  };

  const numChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'set_number', name, value: Number(value) });
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
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
        {CALC_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
