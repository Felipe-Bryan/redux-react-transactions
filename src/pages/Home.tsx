import { Grid } from '@mui/material';
import React from 'react';
import ListContacts from '../components/ListContacts';
import TitlePage from '../components/TitlePage';
import { useAppSelector } from '../store/hooks';

const Home: React.FC = () => {
  const contactsRedux = useAppSelector(state => state.contacts);

  return (
    <Grid container>
      <TitlePage title="Lista de contatos" />

      <Grid item xs={12}>
        <ListContacts data={contactsRedux.items} />
      </Grid>
    </Grid>
  );
};

export default Home;
