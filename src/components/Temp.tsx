import { useRef, useState } from "react";
import type { Contact } from "../types";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addContact,
  deleteContact,
  editContact,
} from "../features/contactSlice";
import { current } from "@reduxjs/toolkit";
export function Temp() {
  const [isAddContactFormVisible, setIsAddContactFormVisible] = useState(false);
  const [isEditContactFormVisible, setIsEditContactFormVisible] =
    useState(false);
  const contacts = useAppSelector((state) => state.contact.contacts);
  const editContactIdRef = useRef<number>(0);

  const initialValues: Contact = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    isActive: true,
  };

  const [values, setValues] = useState(initialValues);

  const dispatch = useAppDispatch();

  const addContactHandler = () => {
    if (
      values.email !== initialValues.email &&
      values.firstName != initialValues.firstName
    ) {
      dispatch(addContact(values));
      setIsAddContactFormVisible(!isAddContactFormVisible);
    }
    setValues(initialValues);
  };

  const deleteContactHandler = (id: number) => {
    dispatch(deleteContact(id));
  };

  const editContactHandler = (id: number) => {
    const currentValue =
      contacts.find((contact) => contact.id === id) ?? initialValues;
    dispatch(editContact({ values, id }));
    setIsEditContactFormVisible(!isEditContactFormVisible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="flex w-full">
      <div className="m-2 p-3 w-1/4 bg-gray-600">
        <div className="flex flex-col">
          <p className="text-white">SideBar</p>
          <div className="flex flex-col">
            <Link
              to={`/`}
              className="p-2 text-white hover:rounded-xl mr-10 focus:rounded-xl hover:text-black hover:bg-white focus:text-black  focus:bg-white"
            >
              Contacts
            </Link>
            <Link
              to={`/charts`}
              className="p-2 text-white hover:rounded-xl mr-10 focus:rounded-xl hover:text-black hover:bg-white focus:text-black focus:bg-white"
            >
              Charts
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black p-2 w-3/4 justify-center items-center">
        <div className="bg-gray-800 h-[80vh] text-center flex flex-col justify-center items-center text-white">
          {!isAddContactFormVisible && !isEditContactFormVisible ? (
            <div className="mb-4 text-xl">
              {contacts.length !== 0 ? (
                contacts.map((contact) => {
                  return (
                    <div key={contact.id}>
                      First Name:{contact.firstName}
                      Last Name:{contact.lastName}
                      Email:{contact.email}
                      <button onClick={() => deleteContactHandler(contact.id)}>
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setIsEditContactFormVisible(
                            !isEditContactFormVisible
                          );
                          editContactIdRef.current = contact.id;
                          const currentValue =
                            contacts.find(
                              (contact) => contact.id === contact.id
                            ) ?? initialValues;
                          setValues(currentValue);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  );
                })
              ) : (
                <div>
                  No Contacts Found <br />
                  Please Add Contact using Add Contact Button
                </div>
              )}
            </div>
          ) : (
            <div>
              <input
                type="text"
                className="text-black"
                name="firstName"
                value={values.firstName}
                placeholder="First Name"
                onChange={handleInputChange}
                required={true}
              ></input>
              <input
                className="text-black"
                type="text"
                name="lastName"
                value={values.lastName}
                placeholder="Last Name"
                onChange={handleInputChange}
              ></input>
              <input
                className="text-black"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required={true}
              ></input>

              <input
                type="radio"
                name="isActive"
                value="true"
                // checked={isActive === "true"}
                // onChange={handleRadioChange}
              />
              <label htmlFor="isActiveTrue">Active</label>

              <input
                type="radio"
                name="isInActive"
                value="false"
                // checked={isActive === "false"}
                // onChange={handleRadioChange}
              />
              <label htmlFor="isActiveFalse">Inactive</label>
            </div>
          )}
          {!isEditContactFormVisible ? (
            <button
              className="bg-white text-black px-4 py-2 rounded"
              onClick={() => {
                if (!isAddContactFormVisible) {
                  setIsAddContactFormVisible(!isAddContactFormVisible);
                } else {
                  addContactHandler();
                }
              }}
            >
              Add Contact
            </button>
          ) : (
            <button
              className="bg-white text-black px-4 py-2 rounded"
              onClick={() => {
                editContactHandler(editContactIdRef.current);
              }}
            >
              Edit Contact
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
