import { useEffect, useState } from "react";

const metrics = [
  {
    id: 1,
    icon: "🪷",
    value: "1M+",
    label: "Happy Customers",
    countTo: 1000000
  },
  {
    id: 2,
    icon: "⭐",
    value: "4.8",
    label: "Star Rating",
    countTo: 4.8
  },
  {
    id: 3,
    icon: "🕰️",
    value: "25+",
    label: "Years of Trust",
    countTo: 25
  },
  {
    id: 4,
    icon: "🗺️",
    value: "50+",
    label: "Cities Served",
    countTo: 50
  }
];

const CounterAnimation = ({ targetValue, suffix = "" }: { targetValue: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const increment = targetValue / (duration / 50);
          
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 50);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${targetValue}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <span id={`counter-${targetValue}`} className="counter-animate text-3xl md:text-4xl font-bold">
      {targetValue < 10 ? count.toFixed(1) : formatNumber(count)}{suffix}
    </span>
  );
};

const SocialProofStrip = () => {
  return (
    <section className="py-16 bg-gradient-festive">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${metric.id * 0.2}s` }}>
                {metric.icon}
              </div>
              <CounterAnimation targetValue={metric.countTo} suffix={metric.id === 2 ? "★" : metric.id > 2 ? "+" : "+"} />
              <p className="text-lotus-cream font-medium mt-2">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;