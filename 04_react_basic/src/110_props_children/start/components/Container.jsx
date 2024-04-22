import './Container.css';

const Container = ({ title, children, first, second }) => {
  return (
    <div className='container'>
      <h3>{title}</h3>
      <div>{children}</div>
      <div>{second}</div>
      <div>{first}</div>
    </div>
  );
};

export default Container;
