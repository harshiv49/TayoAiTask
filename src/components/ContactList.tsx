import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteContact } from "../features/contactSlice";
import ContactCard from "./ContactCard";
const ContactList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contact.contacts);
  const dispatch = useAppDispatch();

  const deleteContactHandler = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-wrap">
      {contacts.length === 0 ? (
        <div className="text-lg text-white">
          No contacts found. Please add some contacts via the add contact
          button.
        </div>
      ) : (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={deleteContactHandler}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
