import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage';
import { useAppDispatch } from '../store/hooks';
import TransactionType from '../types/TransactionType';
import generateID from '../utils/generateID';
import { addTransaction } from '../store/modules/transactionsSlice';

const AddContact: React.FC = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [type, setType] = useState<string>('credit');

  const handleClear = () => {
    setDate('');
    setValue(0);
    setType('credit');
    setDate('');
  };

  const handleAdd = () => {
    const transaction: TransactionType = {
      id: generateID(),
      date,
      type,
      value
    };

    dispatch(addTransaction(transaction));

    handleClear();
  };

  return (
    <Grid container spacing={2}>
      <TitlePage title="Adicionar nova transação" />
      <Grid item xs={12}>
        <TextField
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
          fullWidth
          label="Digite a data"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="number"
          value={value}
          onChange={event => setValue(parseInt(event.target.value))}
          fullWidth
          id="name"
          label="Digite o valor"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Tipo da transação</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={type}
            name="radio-buttons-group"
            onChange={event => setType(event.target.value)}
          >
            <FormControlLabel value="credit" control={<Radio />} label="Credit" />
            <FormControlLabel value="debit" control={<Radio />} label="Debit" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleClear} fullWidth variant="outlined">
          Limpar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleAdd} fullWidth variant="contained">
          Cadastrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddContact;
