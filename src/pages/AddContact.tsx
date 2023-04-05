import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage';
import { useAppDispatch } from '../store/hooks';
import { addContact } from '../store/modules/contactsSlice';
import ContactType from '../types/ContactType';

const AddContact: React.FC = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);

  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<boolean>(false);

  useEffect(() => {
    if (name.length) {
      if (name.length < 3) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    } else {
      setNameError(false);
    }
  }, [name]);

  useEffect(() => {
    if (phone.length) {
      if (phone.length < 11) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    } else {
      setPhoneError(false);
    }
  }, [phone]);

  const handleClear = () => {
    setName('');
    setPhone('');
  };

  const handleAdd = () => {
    const contact: ContactType = { name, phone };

    dispatch(addContact(contact));

    handleClear();
  };

  return (
    <Grid container spacing={2}>
      <TitlePage title="Adicionar novo contato" />
      <Grid item xs={12}>
        <TextField
          error={nameError}
          helperText={nameError ? 'Digite um nome válido, no mínimo 3 caracteres' : ''}
          value={name}
          onChange={event => setName(event.target.value)}
          fullWidth
          id="name"
          label="Digite um nome"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={phoneError}
          helperText={phoneError ? 'Digite um telefone válido, no mínimo 11 caracteres' : ''}
          value={phone}
          onChange={event => setPhone(event.target.value)}
          fullWidth
          id="phone"
          label="Digite um telefone"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleClear} fullWidth variant="outlined">
          Limpar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleAdd} disabled={nameError || phoneError} fullWidth variant="contained">
          Cadastrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddContact;
