import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TransactionType from '../../types/TransactionType';

interface TransactionsState {
  items: TransactionType[];
}

const initialState: TransactionsState = {
  items: []
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionType>) => {
      state.items.push(action.payload);
    }
  }
});

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
