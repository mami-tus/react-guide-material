import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const [, setTheme] = useTheme();
  console.log('footer');
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
