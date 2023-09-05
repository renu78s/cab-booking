import React from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
export default function StandardImageList() {
  return (
    <StyledImageContainer className="image_Container" type="none">
      {itemData.map((item, index) => {
        return (
          <li key={index}>
            <ImageCard image={item.url} title={item.title} />
          </li>
        );
      })}
    </StyledImageContainer>
  );
}

const StyledImageContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
`;

const itemData = [
  {
    url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "driver1",
  },
  {
    url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "driver2",
  },
  {
    url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "driver3",
  },
  {
    url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "driver4",
  },
  {
    url: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "driver5",
  },
  {
    url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "driver6",
  },
  {
    url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "driver7",
  },
  {
    url: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "driver8",
  },
  {
    url: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "driver9",
  },
  {
    url: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "driver10",
  },
  {
    url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "driver11",
  },
  {
    url: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "driver12",
  },
];
