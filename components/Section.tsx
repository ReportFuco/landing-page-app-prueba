import React, { forwardRef } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className = '', ...props },
  ref
) {
  return (
    <section ref={ref} className={`w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8 ${className}`} {...props}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
});

export default Section;
