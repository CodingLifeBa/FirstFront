"use client"
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2E2E2E;
`;

const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  width: 100%;
`;



const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;





const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;



const Signup = styled.a`
  display: block;
  margin-top: 25rem;
  color: #FFA500;
  cursor: pointer;
  margin-left:-260px
`;
const StyledImage = styled(Image)`
 margin-top:-420px;
margin-right:-270px;
`;

export default function Login() {
  return (
    <>
   
       <Container>
       <StyledImage
        src="/2.svg"
        alt="Description de l'image"
        width={170}
        height={90}
        
      />
      <LoginBox>
      
  
    
        <Form>
          <h4>Mot de passe oublié</h4>
          <p>Entrez votre adresse e-mail ci-dessous et<br/>
            nous vous envoyons des instructions sur la<br/>
            façon de modifier votre mot de passe</p>
          <Input type="email" placeholder="Votre E-mail" required />
          <Button type="submit">Envoyer</Button>
        </Form>
      </LoginBox>
      <Signup href="/login">Revenir à la connexion</Signup>
     

    </Container>
    </>
   
  );
}
