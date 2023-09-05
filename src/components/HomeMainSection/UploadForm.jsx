import React, { useState } from "react";
import styled from "styled-components";

const UploadForm = (props) => {
  const [urlData, setUrlData] = useState("");
  const [sendUrl, setSendUrl] = useState("");

  const uploadOnSubmit = (event) => {
    event.preventDefault();
    alert(`data - ${urlData} sended to ${sendUrl}`);
  };

  const getUrl = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setUrlData(value);
    setSendUrl(name);
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={uploadOnSubmit}>
        {props.name === "solo" ? (
          <StyledLabel htmlFor="typeUrl">
            enter your name and send to us.
          </StyledLabel>
        ) : (
          <StyledLabel htmlFor="typeUrl">
            enter group member name and send to us.
          </StyledLabel>
        )}
        <StyledInput
          type="text"
          id="typeUrl"
          placeholder="your name"
          onChange={getUrl}
          name={props.name}
          value={urlData}
        />
        <StyledButton type="submit">send</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default UploadForm;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const StyledForm = styled.form`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 70vw;
  border-radius: 10px;
`;
const StyledInput = styled.input`
  height: 9vh;
  width: 350px;
  border-radius: 10px;
  padding-left: 20px;
  font-size: 1.3rem;
  @media (max-width: 900px) {
    width: 250px;
  }
`;
const StyledLabel = styled.label`
  color: #0f0e0e;
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;
const StyledButton = styled.button`
  height: 9vh;
  width: 350px;
  text-transform: uppercase;
  font-weight: bolder;
  border-radius: 10px;
  background-color: #0c0d11;
  color: white;
  @media (max-width: 900px) {
    width: 250px;
  }
`;
