import { useParams } from 'react-router-dom';

const WhoWeAre = () => {
  const { name } = useParams();

  const title = name ? `Who we are - ${name}` : 'Who re are';

  return (
    <>
      <h1>{title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci repudiandae unde modi soluta magnam voluptatibus cupiditate, error consequatur illum, porro impedit corporis inventore tempore quod hic nemo commodi laboriosam!</p>
    </>
  )
}

export default WhoWeAre;