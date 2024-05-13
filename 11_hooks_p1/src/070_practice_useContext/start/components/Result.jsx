import { useCalc, useCalcDispatch } from '../context/CalcContext';

const Select = () => {
  const state = useCalc();

  return <h3>結果：{state.result}</h3>;
};
export default Select;
