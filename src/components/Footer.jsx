import { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';

const Footer = () => {
  const { value } = useContext(ConfigContext)

  return (
    <footer>
      &copy; 2023 - {value}
    </footer>
  )
}

export default Footer;