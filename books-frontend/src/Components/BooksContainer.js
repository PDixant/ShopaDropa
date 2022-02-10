import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from 'styled-components';

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

function BookContainer(props) {

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
          <Button variant="contained">Delete </Button>
          <Button variant="contained">Update </Button>
        </ButtonContainer>
      </StyledCard>
    );
}


export default BookContainer;