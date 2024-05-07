import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { useAppDispatch } from "../app/hooks";
import { addContact } from "../features/contactSlice";
import type { Contact } from "../types";
import { SideBar } from "./Sidebar";

interface ContactProps {
  isSideBarOpen: boolean;
}

export function Contact({ isSideBarOpen }: ContactProps): JSX.Element {
  const [isAddContactFormVisible, setIsAddContactFormVisible] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();

  const addContactHandler = (contact: Contact): void => {
    dispatch(addContact(contact));
    setIsAddContactFormVisible(false);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      {isSideBarOpen && <SideBar isSideBarOpen={isSideBarOpen}/>}

      {/* Main Content */}
      <div className="bg-black p-2 w-full justify-center items-center">
        {/* Navbar */}
        <div className="h-16 flex items-center justify-between mb-2">
          <button
            className="text-center bg-white text-black px-4 py-2 rounded"
            onClick={() =>
              setIsAddContactFormVisible(!isAddContactFormVisible)
            }
          >
            {isAddContactFormVisible ? "Cancel" : "Add Contact"}
          </button>
        </div>

        {/* Content */}
        <div>
          {!isAddContactFormVisible ? (
            <ContactList />
          ) : (
            <ContactForm onAddContact={addContactHandler} />
          )}
        </div>
      </div>
    </div>
  );
}
