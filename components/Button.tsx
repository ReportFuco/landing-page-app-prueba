import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 hover:bg-primary-700 active:bg-primary-800',
  secondary:
    'bg-accent-600 text-white shadow-lg shadow-accent-600/20 hover:-translate-y-0.5 hover:bg-accent-700 active:bg-accent-800',
  outline:
    'border border-primary-600/35 bg-white text-primary-700 hover:-translate-y-0.5 hover:bg-primary-50',
  ghost:
    'text-primary-700 hover:bg-primary-50',
};

const sizeStyles = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3 text-base md:text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
