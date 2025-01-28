import type React from 'react';

interface LayoutsProps {
  children: React.ReactNode;
}

function Layouts({ children }: LayoutsProps) {
  return (
    <div>
      <h1>Layouts</h1>
      {children}
    </div>
  );
}

export default Layouts;
