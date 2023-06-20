import React from 'react';
import Typed from 'typed.js';
import {styled} from 'styled-components'

const Iam = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a Software Developer.',
      'I am learning to build stuffs for web and mobiles.',
      'I am Information Technology Student at Metropolia.',
       ],
      typeSpeed: 50,
      backSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div >
    <StyledSpan ref={el}/>
    </div>
  );
}

const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  
  @media only screen and (max-width: 1080px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 0.8rem;
  }
`

export default Iam;