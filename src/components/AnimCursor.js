
import React from 'react';
import AnimatedCursor from "react-animated-cursor"

const AnimCursor = () => {
  return (
    <div>
      <AnimatedCursor
      innerSize={12}
      outerSize={14}
      color='255, 214, 0'
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}

export default AnimCursor;
