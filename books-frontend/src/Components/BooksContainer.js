import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)`
width: 300px;
height: 100%;
border: 2px solid black;
margin: 30px;
`;

const StyledContent = styled(CardContent)`
  text-align: left;
  marign: 5px;
  line-height: 4;
`;

const ButtonContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
bottom: 0;
padding-bottom: 20px;
`;


const handleOnDelete = (e) => {
if(window.confirm("are you sure you want to delete this book?")){
  axios
    .delete(`/books/${e}`, {
      id: e,
    })
    .then(
      (res) => {
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
}
}

function BookContainer(props) {
    let cid = props.id;
    let navigate = useNavigate();
    return (
      <StyledCard>
        <StyledContent>
          Book Name: {props.name}
          <br />
          author Name: {props.author}
          <br />
          Year published: {props.year}
          <br />
          ISDN: {props.isbn}
          <br />
          ID: {props.id}
          <br />
        </StyledContent>
        <ButtonContainer>
          <Button onClick={() => handleOnDelete(cid)} variant="contained">
            Delete
          </Button>
          <Button onClick={() => navigate(`/books/${cid}`)} variant="contained">
            Update{" "}
          </Button>
        </ButtonContainer>
      </StyledCard>
    );
}


export default BookContainer;