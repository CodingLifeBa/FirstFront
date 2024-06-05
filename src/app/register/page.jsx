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

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
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

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
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
  margin-left:-300px
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
          <h4>Inscrivez vous en tant que Admin</h4>
          <Input type="text" placeholder="Nom" required />

          <Input type="email" placeholder="E-mail" required />
          <Input type="password" placeholder="Mot de passe" required />
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            Accepter les termes et la politique
          </CheckboxLabel>
          <Button type="submit">S'inscrire</Button>
        </Form>
      </LoginBox>
      <Signup href="/login">Vous avez déja un compte? Se connecter</Signup>

    </Container>
    </>
   
  );
}
