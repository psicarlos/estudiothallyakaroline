import React, { ReactNode, HTMLAttributes } from 'react';

interface Propriedades extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: ReactNode;
}

export default function Container({ id, children, ...props }: Propriedades) {
  return (
    <div id={id} className="py-20 sm:py-16 scroll-mt-[120px] " {...props}>
      <div className="mx-auto grid max-w-full lg:max-w-[80%] px-6 lg:px-4 gap-8">
        {children}
      </div>
    </div>
  );
}
