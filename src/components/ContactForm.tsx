import React, { useState } from "react";
import { Contact } from "../types";

interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  const [values, setValues] = useState<Contact>({
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    isActive: true,
  });

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
      isActive: value === "Active" ? true : false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddContact(values);
    setValues({
      id: 0,
      email: "",
      firstName: "",
      lastName: "",
      isActive: true,
    });
  };

  return (
    <div className="bg-[rgb(40,40,40)] p-6 rounded-lg font-roboto">
      <h2 className="text-white w-full text-xl mb-4">Add Contact Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          placeholder="First Name"
          onChange={handleInputChange}
          required={true}
          className="border bg-[rgb(40,40,40)] border-gray-950 rounded-md p-2 mb-2"
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          placeholder="Last Name"
          onChange={handleInputChange}
          className="border bg-[rgb(40,40,40)] border-gray-950 rounded-md p-2 mb-2"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleInputChange}
          required={true}
          className="border bg-[rgb(40,40,40)] border-gray-950 rounded-md p-2 mb-2"
        />
        <div className="flex items-center mb-2">
          <label className="text-white mr-2 font-roboto">Status:</label>
          <label className="text-white mr-4 font-roboto">
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
          <label className="text-white font-roboto">
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
        <button type="submit" className="bg-white text-black py-2 rounded-md hover:bg-blue-600 font-roboto">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
