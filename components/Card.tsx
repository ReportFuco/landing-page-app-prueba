import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/70 bg-white/90 p-7 shadow-[0_12px_36px_-20px_rgba(2,132,199,0.45)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-24px_rgba(14,165,233,0.45)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
