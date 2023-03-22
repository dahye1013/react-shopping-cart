import useIntersection from '@/hooks/useIntersection';
import { useState, useRef, useCallback } from 'react';

type Props = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const LazyImage = ({ src, alt, width, height, className }: Props) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(() => {
    setIsInView(true);
  }, [setIsInView]);

  useIntersection(ref, callback);

  return (
    <div
      className={`flex justify-between animated-bg ${className}`}
      ref={ref}
      style={{
        width,
        height,
      }}
    >
      {isInView && <img src={src} alt={alt} loading="lazy" />}
    </div>
  );
};

export default LazyImage;
