import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const phonebookSlice = createSlice({
  name: '@@contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },

      prepare(user) {
        return {
          payload: {
            id: nanoid(),
            name: user.name,
            number: user.number,
          },
        };
      },
    },

    removeContact(state, action) {
      const itemIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(itemIndex, 1);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { addContact, removeContact, changeFilter } =
  phonebookSlice.actions;
