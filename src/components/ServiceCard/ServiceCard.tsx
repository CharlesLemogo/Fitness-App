import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard = ({ title, description, imageUrl }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimate(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimate(false); 
      }, 600); 

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center p-6 bg-gray-800 shadow-lg rounded-lg w-full max-w-md ${animate ? 'jump-up' : ''}`}
    >
      <img
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="w-full h-auto mb-4 rounded-lg"
      />
      <h2 className="text-2xl mb-2 font-semibold text-white text-center">{title}</h2>
      <p className="text-white text-base text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
