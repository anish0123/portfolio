import {styled} from "styled-components";

const ContactForm = () => {

    const hangleSubmit = (event) => {
        event.preventDefault()
    }
    return(
    <FormDiv>
        <StyledForm onSubmit={hangleSubmit}>
            <label>
                
                <StyledInput type="text" name="name" placeholder="Name"/>
            </label>
            <label>
                
                <StyledInput type="text" name="email" placeholder="Email"/>
            </label>
            <label>
               
                <StyledMessageInput type="text" name="message" placeholder="Message"/>
            </label>
            <Button type="submit">Send</Button>
            </StyledForm>
    </FormDiv>
    )
};

const FormDiv = styled.div`
background-color: black;
`;

const StyledForm = styled.form`
display: flex;
flex-direction: column;
`;

const StyledInput = styled.input`
width: 80%;
background-color: black;
height : 3rem;
margin-bottom: 4rem;
font-size: 2rem;
color: white;
border: none;
border-bottom: 2px solid white;

&:focus {
    color: rgb(0, 255, 255);
    background-color: #212121;
    outline-color: rgb(0, 255, 255);
    box-shadow: -3px -3px 15px rgb(0, 255, 255);
    transition: .1s;
    transition-property: box-shadow;
`;

const StyledMessageInput = styled.input`
width: 80%;
height : 7rem;
background-color: black;
font-size: 2rem;
margin-bottom: 4rem;
border: none;
border-bottom: 2px solid white;

&:focus {
    color: rgb(0, 255, 255);
  background-color: #212121;
  outline-color: rgb(0, 255, 255);
  box-shadow: -3px -3px 15px rgb(0, 255, 255);
  transition: .1s;
  transition-property: box-shadow;
}
`;

const Button = styled.button`
position: relative;
padding: 10px 20px;
border-radius: 7px;
border: 1px solid rgb(61, 106, 255);
font-size: 14px;
text-transform: uppercase;
font-weight: 600;
letter-spacing: 2px;
background: transparent;
color: #fff;
overflow: hidden;
box-shadow: 0 0 0 0 transparent;
-webkit-transition: all 0.2s ease-in;
-moz-transition: all 0.2s ease-in;
transition: all 0.2s ease-in;
width: 10rem;


&:hover {
background: rgb(61, 106, 255);
box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
-webkit-transition: all 0.2s ease-out;
-moz-transition: all 0.2s ease-out;
transition: all 0.2s ease-out;
}

&:hover::before {
-webkit-animation: sh02 0.5s 0s linear;
-moz-animation: sh02 0.5s 0s linear;
animation: sh02 0.5s 0s linear;
}

&::before {
content: '';
display: block;
width: 0px;
height: 86%;
position: absolute;
top: 7%;
left: 0%;
opacity: 0;
background: #fff;
box-shadow: 0 0 50px 30px #fff;
-webkit-transform: skewX(-20deg);
-moz-transform: skewX(-20deg);
-ms-transform: skewX(-20deg);
-o-transform: skewX(-20deg);
transform: skewX(-20deg);
}

@keyframes sh02 {
from {
  opacity: 0;
  left: 0%;
}

50% {
  opacity: 1;
}

to {
  opacity: 0;
  left: 100%;
}
}

&:active {
box-shadow: 0 0 0 0 transparent;
-webkit-transition: box-shadow 0.2s ease-in;
-moz-transition: box-shadow 0.2s ease-in;
transition: box-shadow 0.2s ease-in;
}

`;

export default ContactForm