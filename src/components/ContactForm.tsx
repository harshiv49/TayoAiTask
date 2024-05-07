import { useState } from "react";
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
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-white w-full text-xl mb-4">Add Contact Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          placeholder="First Name"
          onChange={handleInputChange}
          required={true}
          className="border bg-slate-800 border-gray-300 rounded-md p-2 mb-2"
          
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          placeholder="Last Name"
          onChange={handleInputChange}
          className="border bg-slate-800 border-gray-300 rounded-md p-2 mb-2"
          
      
        />
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleInputChange}
          required={true}
          className="border bg-slate-800 border-gray-300 rounded-md p-2 mb-2"
          
          
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
