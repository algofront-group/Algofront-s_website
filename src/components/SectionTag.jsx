import React from 'react';

export default function SectionTag({ children }) {
  return (
    <div className="tag-pill mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent inline-block" />
      {children}
    </div>
  );
}
