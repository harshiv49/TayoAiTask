
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addContact, deleteContact, editContact } from "../features/contactSlice";
import ContactCard from "./ContactCard";
const ContactList: React.FC = () => {
    const contacts = useAppSelector((state) => state.contact.contacts);
    const dispatch = useAppDispatch();
  
    const deleteContactHandler = (id: number) => {
      dispatch(deleteContact(id));
    };
  
    return (
      <div className="flex flex-wrap border-white">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={deleteContactHandler} />
        ))}
      </div>
    );
  };


export default ContactList;