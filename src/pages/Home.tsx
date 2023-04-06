import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ListContacts from '../components/ListContacts';
import TitlePage from '../components/TitlePage';
import { useAppSelector } from '../store/hooks';

const Home: React.FC = () => {
  const transactionsRedux = useAppSelector(state => state.transactions);
  const [balance, setBalance] = useState<number>(0);
  let credits = 0;
  let debits = 0;

  useEffect(() => {
    transactionsRedux.items.forEach(item => {
      if (item.type === 'credit') {
        credits += item.value;
      } else {
        debits += item.value;
      }
    });
  }, [transactionsRedux.items]);

  useEffect(() => {
    setBalance(credits - debits);
  }, [credits, debits]);

  return (
    <Grid container>
      <TitlePage title="Lista de transações" />

      <Grid item xs={12}>
        <Typography align="right" variant="h6">
          Saldo: R$ {balance.toFixed(2)}
        </Typography>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <ListContacts data={transactionsRedux.items} />
      </Grid>
    </Grid>
  );
};

export default Home;
