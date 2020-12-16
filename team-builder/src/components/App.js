import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";

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
    const newMember = {
      Name: formValues.Name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.name || !newMember.email || !newMember.role) return;
  };



  return (
    <StyledApp>
      <div>
        <h1> Member List </h1>
        <MemberForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </div>
    </StyledApp>
  )
}



const StyledApp = styled.div`
border: 1px solid black;
text-align: center;
box-shadow: 0px 1px 6px -2px #807f7f;
margin: 100px;

`;



















