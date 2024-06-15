"use client";
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importer useRouter
import { login } from '../../../services/auth'; // Assurez-vous que ce chemin est correct
import Link from 'next/link';

const A = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const ForgotPassword = styled.div`
  display: block;
  margin-top: 1rem;
  color: #FFA500;
  cursor: pointer;
`;

const Signup = styled.div`
  display: block;
  margin-top: 0.5rem;
  color: #FFA500;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  margin-bottom: 2rem;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // Utiliser le hook useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      setMessage(response.msg);
      router.push('/dashboard'); // Rediriger vers le dashboard
    } catch (error) {
      setMessage(error.msg || 'Une erreur sest produite');
    }
  };

  return (
    <Container>
      <StyledImage
        src="/2.svg"
        alt="Description de l'image"
        width={170}
        height={90}
      />
      <LoginBox>
        <Form onSubmit={handleSubmit}>
          <h4>Connectez-vous en tant que Admin</h4>
          <Input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <Input 
            type="password" 
            placeholder="Mot de passe" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            Gardez-moi connecté
          </CheckboxLabel>
          <Button type="submit">Se connecter</Button>
        </Form>
        {message && <p>{message}</p>}
      </LoginBox>
      <ForgotPassword ><Link style={{ color: 'orange' }} href="/forgetPassword">Mot de passe oublié?</Link></ForgotPassword>
      <Signup style={{ color: 'white' }} >Vous n'avez pas de compte? <Link  style={{ color: 'orange' }} href="/register">S'inscrire</Link></Signup>
    </Container>
  );
}


