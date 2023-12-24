import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: HeadingProps) {
  return (
    <h2 className="text-2xl font-semibold mb-4 relative before:content-[''] before:block before:w-1/4 before:h-1 before:bg-gray-400 before:absolute before:bottom-0 before:left-0">
      {children}
    </h2>
  );
}
