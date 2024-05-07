import React from "react";
import { Contact } from "../types";
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: number) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onDelete }) => {
  const { id, firstName, lastName, email } = contact;

  return (
    <div className="border w-[300px] p-4 m-2 flex-wrap flex-col justify-between items-start">
      <div>
        <p className="text-lg text-white">{firstName} {lastName}</p>
        <p className="text-sm text-white">{email}</p>
      </div>
      <div className="flex items-center mt-4">
        <button className="mr-2  p-2 bg-red-500 text-white rounded-full" onClick={() => onDelete(id)}>
          <FaTrashAlt />
        </button>
        <button className="mr-2 p-2 bg-blue-500 text-white rounded-full">
          <FaEye />
        </button>
        <button className="p-2 bg-green-500 text-white rounded-full">
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
