import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
}

const Reveal = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  duration = 700 
}: RevealProps) => {
  const { ref, isInView } = useInView();

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return isInView ? "translate-y-0" : "translate-y-8";
      case 'down':
        return isInView ? "translate-y-0" : "-translate-y-8";
      case 'left':
        return isInView ? "translate-x-0" : "translate-x-8";
      case 'right':
        return isInView ? "translate-x-0" : "-translate-x-8";
      case 'scale':
        return isInView ? "scale-100" : "scale-95";
      default:
        return isInView ? "translate-y-0" : "translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isInView ? "opacity-100" : "opacity-0"
      } ${getTransform()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;