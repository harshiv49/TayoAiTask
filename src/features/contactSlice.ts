
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../types";
interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

interface EditPayload {
  id:number;
  values: Contact;
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const id:number=state.contacts.length+1;
      state.contacts.push({...action.payload,id});
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((contact) => {
        return contact.id !== action.payload;
      });
    },
    editContact: (state, action: PayloadAction<EditPayload>) => {
      const { id, values } = action.payload;

      // Use map to update the contact with the provided firstName
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === id) {
          return { ...contact, ...values }; // Update the contact with the new values
        }
        return contact; // Return the contact as-is if it doesn't match the firstName
      });
    },
  },
});

export default contactSlice.reducer;
export const { addContact, deleteContact, editContact } = contactSlice.actions;
