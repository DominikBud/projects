import { useSpring, animated, useInView } from "react-spring";

function StatsItem({ value, text, specialCharacter }) {
  return (
    <div className="flex items-center  text-center text-cen px-24 justify-center flex-col h-auto">
      <p className="text-white text-5xl font-bold">{<Number n={value} />}</p>
      <p className="text-2xl text-white font-['Inter']">{text}</p>
    </div>
  );
}

function Number({ n }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <animated.div ref={ref}>{number.to((n) => n.toFixed(0))}</animated.div>
  );
}

export default StatsItem;
