import {keyframes, styled} from "styled-components";

const MyName = () => {
    return(
        <div>
            <Name id="name">Anish Maharjan.</Name>
        </div>
    )
};

const animation = keyframes`
0% {opacity : 0; transform: translateY(-100px);}
25% {opactiy: 0.25; transform: translateY(0px); }
50% {opactiy: 0.5; transform: translateY(0px);}
75% {opactiy: 0.75; transform: translateY(0px);}
100% {opacity : 1; transform: translateY(0px);}
`;

const Name = styled.h1`
animation-name: ${animation};
animation-duration: 6s;
animation-fill-mode: forwards;
font-size: 5rem;
  margin: 0;
  padding: 0;


  @media only screen and (max-width: 1920px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 70px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 50px;
  }

  
`

export default MyName;