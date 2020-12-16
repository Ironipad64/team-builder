import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import MemberForm from "./MemberForm"

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

export default function App() {
  const [members, setMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const
  };



  return (
    <div>
      <h1> Member List </h1>
      <MemberForm
        values={formValues}
      />
    </div>
  )
}



















