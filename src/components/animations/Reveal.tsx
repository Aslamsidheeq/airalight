import { useInView, useScrollProgress } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
  progressive?: boolean;
}

const Reveal = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  duration = 700,
  progressive = false
}: RevealProps) => {
  const { ref: inViewRef, isInView } = useInView();
  const { ref: progressRef, scrollProgress } = useScrollProgress();

  const getTransform = () => {
    if (progressive && scrollProgress > 0) {
      const translateValue = (1 - scrollProgress) * 30;
      switch (direction) {
        case 'up':
          return `translateY(${translateValue}px)`;
        case 'down':
          return `translateY(${-translateValue}px)`;
        case 'left':
          return `translateX(${translateValue}px)`;
        case 'right':
          return `translateX(${-translateValue}px)`;
        case 'scale':
          return `scale(${0.9 + scrollProgress * 0.1})`;
        default:
          return `translateY(${translateValue}px)`;
      }
    }

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

  const getOpacity = () => {
    if (progressive && scrollProgress > 0) {
      return scrollProgress;
    }
    return isInView ? 1 : 0;
  };

  const ref = progressive ? progressRef : inViewRef;

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${!progressive ? (isInView ? "opacity-100" : "opacity-0") : ""} ${!progressive ? getTransform() : ""} ${className}`}
      style={{ 
        transitionDelay: progressive ? '0ms' : `${delay}ms`,
        transitionDuration: progressive ? '0ms' : `${duration}ms`,
        ...(progressive && {
          transform: getTransform(),
          opacity: getOpacity(),
        })
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;