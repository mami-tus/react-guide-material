import { CalcProvider } from './context/CalcContext';
import Input from './components/Input';
import Select from './components/Select';
import Result from './components/Result';

const Example = () => {
  return (
    /* 完成系のJSX */
    <CalcProvider>
      <Input name='a' />
      <Input name='b' />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
