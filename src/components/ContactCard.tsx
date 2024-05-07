import React from "react";
import { Contact } from "../types";
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: number) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onDelete }) => {
  const { id, firstName, lastName, email,isActive } = contact;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/contact/${id}/edit`);
  };

  return (
    <div  className="rounded-md bg-[rgb(40,40,40)] w-[250px] p-4 m-2 flex-wrap flex-col justify-between items-start transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1">
      <div>
        <p className="text-lg text-white">
          {firstName} {lastName}
        </p>
        <p className="text-sm text-white">{email}</p>
        <p className="text-base text-white">Status : {isActive ? 'Active':'Inactive'} </p>
      </div>
      <div className="pt-4 pb-2 flex justify-around items-center  mt-4">
        <button
          className="p-2 bg-green-500  text-white rounded-full"
          onClick={handleEdit}
        >
          <FaEdit />
        </button>
      
        <button
          className="p-2  bg-red-500  text-white rounded-full"
          onClick={() => onDelete(id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
