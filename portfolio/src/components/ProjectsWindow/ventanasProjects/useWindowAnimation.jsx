import { useSpring } from 'react-spring';

const useWindowAnimation = () => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  return { animationProps };
};

export default useWindowAnimation;
