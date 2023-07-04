import {styled} from "styled-components";

const ContactForm = () => {

    return(
    <FormDiv>
        <StyledForm>
            <label>
                
                <StyledInput type="text" name="name" placeholder="Name"/>
            </label>
            <label>
                
                <StyledInput type="text" name="email" placeholder="Email"/>
            </label>
            <label>
               
                <StyledMessageInput type="text" name="message" placeholder="Message"/>
            </label>
            <Button>Send</Button>
            </StyledForm>
    </FormDiv>
    )
};

const FormDiv = styled.div`
background-color: black;
width: 90%;
height: 4rem;
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
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  margin: 1em 0 0 15em;
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
  width: 10rem;

  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;

export default ContactForm