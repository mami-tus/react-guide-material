import Profile from './components/Profile';

const profile = [
  { name: 'Takashi', age: 19, country: 'Japan' },
  { name: 'Jane', age: 28, country: 'UK' },
];

const Example = () => {
  return (
    <div>
      <Profile {...Profile[0]} />
      <Profile {...profile[1]} />
      <Profile />
    </div>
  );
};

export default Example;
