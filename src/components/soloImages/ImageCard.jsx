import React from "react";
import styled from "styled-components";

const ImageCard = (props) => {
  const filterImage = () => {
    alert("driver selected");
  };
  return (
    <StyledImageCard onClick={filterImage}>
      <img src={props.image} alt="" className="imageCard_images" />
      <div className="name">{props.title}</div>
      <i className="bi bi-caret-right-fill"></i>
    </StyledImageCard>
  );
};

export default ImageCard;

const StyledImageCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dottoed purple;
  border-radius: 15px;
  width: 40%;
  box-shadow: 3px 3px 10px purple;
  height: 68.5px;
  font-weight: bold;
  background-color: white;
  row-gap: 3px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    width: 60%;
  }

  &:hover {
    width: 45%;
    height: 70px;
    @media (max-width: 900px) {
      width: 80%;
    }
    .bi {
      font-size: xx-large;
    }
  }
  .bi {
    font-size: larger;
  }

  .imageCard_images {
    height: 68.5px;
    width: 68.5px;
    border-radius: 15px;
  }

  .name {
    margin-top: 18px;
  }
`;
