import {keyframes, styled} from "styled-components";

const Title = () => {
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
`

export default Title;