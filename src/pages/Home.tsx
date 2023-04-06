import { Grid } from '@mui/material';
import React, { useState } from 'react';
import ListContacts from '../components/ListContacts';
import TitlePage from '../components/TitlePage';
import { useAppSelector } from '../store/hooks';

const Home: React.FC = () => {
  const transactionsRedux = useAppSelector(state => state.transactions);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {}, [transactionsRedux.items]);

  return (
    <Grid container>
      <TitlePage title="Lista de transações" />

      <Grid item xs={12}>
        <ListContacts data={transactionsRedux.items} />
      </Grid>
    </Grid>
  );
};

export default Home;
