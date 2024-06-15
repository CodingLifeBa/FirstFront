"use client";
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importer useRouter
import Link from 'next/link';
import { register } from '../../../services/auth';

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

const Signup = styled.div`
  display: block;
  margin-top: 1rem;
  color: #FFA500;
  cursor: pointer;
  text-align: center;
`;

const StyledImage = styled(Image)`
  margin-bottom: 2rem;
`;

export default function Register() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // Utiliser le hook useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(nom, email, password);
      setMessage(response.msg);
      router.push('/login');
    } catch (error) {
      setMessage(error.msg || 'Une erreur s\'est produite');
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
          <Title>Inscrivez-vous en tant qu'Admin</Title>
          <Input 
            type="text" 
            placeholder="Nom" 
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required 
          />
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
            <Checkbox type="checkbox" required />
            Accepter les termes et la politique
          </CheckboxLabel>
          <Button type="submit">S'inscrire</Button>
        </Form>
        {message && <p>{message}</p>}
      </LoginBox>
      <Signup style={{ color: 'white' }}>Vous avez déjà un compte? <Link href="/login" style={{ color: 'orange' }}>Se connecter</Link></Signup>
    </Container>
  );
}
