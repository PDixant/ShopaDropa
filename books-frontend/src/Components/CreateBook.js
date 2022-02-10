import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { PlusCircle } from "@styled-icons/boxicons-regular/PlusCircle";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)`
  width: 300px;
  height: 100%;
  border: 2px solid black;
`;

const StyledContent = styled(CardContent)`
  text-align: left;
  marign: 5px;
`;

function CreateBook(props) {
    let navigate = useNavigate();
  return (
    <StyledCard>
      <StyledContent>
      <Button onClick={ () => navigate(props.to)}>
        <PlusCircle/>
        </Button>
      </StyledContent>
    </StyledCard>
  );
}

export default CreateBook;
