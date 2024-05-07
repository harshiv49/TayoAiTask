import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Contact } from "../types";
import { editContact } from "../features/contactSlice";
import { useNavigate } from "react-router-dom";

const ContactEditForm: React.FC = () => {
  const { id = "" } = useParams(); // Specify id type as number
  const contacts = useAppSelector((state) => state.contact.contacts);
  const numId = parseInt(id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState<Contact>({
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    isActive: true,
  });

  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === numId);
    if (contact) {
      setValues(contact);
    }
  }, [id, contacts]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValues({
      ...values,
      isActive: value === "Active",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editContact({ id: numId, values }));
    navigate("/");
  };

  return (
    <div className="bg-black h-screen">
      <div className="bg-[rgb(40,40,40)] p-6 rounded-lg">
        <h2 className="text-white w-full text-xl mb-4">Edit Contact Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            placeholder="First Name"
            onChange={handleInputChange}
            required={true}
            className="border text-white bg-[rgb(40,40,40)] border-gray-950 rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            placeholder="Last Name"
            onChange={handleInputChange}
            className="border text-white  bg-[rgb(40,40,40)] border-gray-950 rounded-md p-2 mb-2"
          />
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Email"
            onChange={handleInputChange}
            required={true}
            className="border text-white bg-[rgb(40,40,40)] border-gray-950 rounded-md p-2 mb-2"
          />
          <div className="flex items-center mb-2">
            <label className="text-white mr-2">Status:</label>
            <label className="text-white mr-4">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={values.isActive}
                onChange={handleStatusChange}
                className="mr-1"
              />
              Active
            </label>
            <label className="text-white">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={!values.isActive}
                onChange={handleStatusChange}
                className="mr-1"
              />
              Inactive
            </label>
          </div>
          <button
            type="submit"
            className="bg-white text-black py-2 rounded-md hover:bg-blue-600 font-roboto"
          >
            Update Contact
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black py-2 rounded-md hover:bg-blue-600 font-roboto"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactEditForm;
