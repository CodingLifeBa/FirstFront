"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Div = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormRow = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 20px;
`;

const FullWidthFormRow = styled(FormRow)`
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const UploadContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border: 2px dashed #ccc;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  position: relative;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const UploadIcon = styled.div`
  width: 60px;
  height: 60px;
  background: url('/iconn.svg') no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  display: ${(props) => (props.src ? 'block' : 'none')};
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export default function HotelForm() {
  const [formState, setFormState] = useState({
    nom: '',
    email: '',
    adresse: '',
    numero: '',
    prix: '',
    devise: 'XOF',
    photo: null,
  });

  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormState({ ...formState, photo: files[0] });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nom', formState.nom);
    formData.append('email', formState.email);
    formData.append('adresse', formState.adresse);
    formData.append('numero', formState.numero);
    formData.append('prix', formState.prix);
    formData.append('devise', formState.devise);
    formData.append('photo', formState.photo);

    try {
      const response = await axios.post(`http://localhost:4000/api/hotels`, formData);
      setMessage('Hôtel créé avec succès!');
      router.push('/Listehotel');
    } catch (error) {
      setMessage('Erreur lors de la création de l\'hôtel. Veuillez réessayer.');
    }
  };

  return (
    <Div>
      <Image
        src="/arrow.svg"
        alt="Retourner en arrière"
        width={60}
        height={30}
        onClick={() => router.push('/Listehotel')}
        style={{ cursor: 'pointer', marginBottom: '20px' }}
      />
      <H2>Créer un nouveau hôtel</H2>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="nom">Nom de l'hôtel</Label>
          <Input
            type="text"
            name="nom"
            id="nom"
            value={formState.nom}
            onChange={handleChange}
            required
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="adresse">Adresse</Label>
          <Input
            type="text"
            name="adresse"
            id="adresse"
            value={formState.adresse}
            onChange={handleChange}
            required
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="numero">Numéro de téléphone</Label>
          <Input
            type="tel"
            name="numero"
            id="numero"
            value={formState.numero}
            onChange={handleChange}
            required
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="prix">Prix par nuit</Label>
          <Input
            type="number"
            name="prix"
            id="prix"
            value={formState.prix}
            onChange={handleChange}
            required
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="devise">Devise :</Label>
          <Select
            id="devise"
            name="devise"
            value={formState.devise}
            onChange={handleChange}
            required
          >
            <option value="XOF">F XOF</option>
            <option value="EUR">Euro</option>
            <option value="USD">Dollar</option>
          </Select>
        </FormRow>
        <FullWidthFormRow>
          <UploadContainer>
            <UploadLabel htmlFor="photo">
              <HiddenInput
                type="file"
                name="photo"
                id="photo"
                accept="image/*"
                onChange={handleChange}
                required
              />
              <UploadIcon />
              {formState.photo ? (
                <p>{formState.photo.name}</p>
              ) : (
                <p>Ajouter une photo</p>
              )}
            </UploadLabel>
            {formState.photo && <PreviewImage src={URL.createObjectURL(formState.photo)} alt="Prévisualisation" />}
          </UploadContainer>
        </FullWidthFormRow>
        <Button type="submit">Enregistrer</Button>
      </Form>
      {message && <p>{message}</p>}
    </Div>
  );
}
