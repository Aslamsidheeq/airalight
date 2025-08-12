import { useInView } from "@/hooks/useInView";

interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

const StaggerReveal = ({ 
  children, 
  className = "", 
  staggerDelay = 100,
  direction = 'up'
}: StaggerRevealProps) => {
  const { ref, isInView } = useInView();

  const getTransform = (index: number) => {
    const delay = index * staggerDelay;
    
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
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            isInView ? "opacity-100" : "opacity-0"
          } ${getTransform(index)}`}
          style={{ 
            transitionDelay: `${index * staggerDelay}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerReveal;