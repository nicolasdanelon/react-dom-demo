import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ConfigContext } from '../ConfigProvider';

const WhoWeAre = () => {
  const { name } = useParams();
  const { value, setValue } = useContext(ConfigContext)

  const title = name ? `Who we are - ${name}` : 'Who re are';

  return (
    <>
      <h1>{title} - {value}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci repudiandae unde modi soluta magnam voluptatibus cupiditate, error consequatur illum, porro impedit corporis inventore tempore quod hic nemo commodi laboriosam!</p>
      <button type="button" onClick={() => setValue('yes')}>yes!</button>
      <button type="button" onClick={() => setValue('no')}>no!</button>
    </>
  )
}

export default WhoWeAre;