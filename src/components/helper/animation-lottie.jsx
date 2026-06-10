import { useMemo } from 'react';
import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = useMemo(() => ({
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  }), [animationPath]);

  return (
    <Lottie animationData={animationPath} loop={true} autoplay={true} style={{ width: '95%' }} />
  );
};

export default AnimationLottie;

