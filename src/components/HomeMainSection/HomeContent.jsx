import React, { useState } from "react";
import styled from "styled-components";
import UploadForm from "./UploadForm";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";

const HomeContent = () => {
  const [openSection, setOpenSection] = useState(false);
  const [openSection2, setOpenSection2] = useState(false);
  const openSectionContent = () => {
    setOpenSection(true);
    setOpenSection2(false);
  };
  const openSectionContent2 = () => {
    setOpenSection2(true);
    setOpenSection(false);
  };

  return (
    <StyledWrapperContainer>
      <StyledWrapper>
        <div>
          <StyledSection onClick={openSectionContent}>
            <PersonIcon
              style={{
                height: "100px",
                width: "100%",
              }}
            />
            <h2 className="heading">solo rides</h2>
          </StyledSection>
        </div>

        <div>
          <StyledSection onClick={openSectionContent2}>
            <GroupIcon
              style={{
                height: "100px",
                width: "100%",
              }}
            />
            <h2 className="heading">group rides</h2>
          </StyledSection>
        </div>
      </StyledWrapper>

      {openSection && <UploadForm name="solo" />}
      {openSection2 && <UploadForm name="collection" />}
    </StyledWrapperContainer>
  );
};

export default HomeContent;
const StyledWrapperContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-center;
  align-items: center;

  @media (max-width: 900px) {
    flex-wrap: wrap-reverse;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 20px;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

const StyledSection = styled.div`
  height: 30vh;
  min-width: 20vw;
  background: linear-gradient(-135deg, #291928, #662a62, #c226b7);
  margin: 5px;
  box-shadow: 5px 5px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  border-radius: 5px;
  padding: 20px;

  &:hover {
    box-shadow: 10px 10px 25px black;
  }
  .heading {
    color: white;
    text-transform: capitalize;
    font-weight: bold;
  }
`;
