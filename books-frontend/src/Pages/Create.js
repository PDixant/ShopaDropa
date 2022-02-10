import React , { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import styled from 'styled-components';
import axios from 'axios';
import {withRouter} from './../Components/withRouter.js'
const StyledTextContainer = styled.div`
display: flex;
text-align: center;
flex-direction: row;
justify-content: center;
align-content: left;
border: 2px solid black;
padding: 60px;
width: 50%;
margin: auto;
`

const StyledTextField = styled(TextField)`
padding: 10px;
margin: 10px;
width: 200px;
`;

class Create extends Component {
  state = {
    name: null,
    year: null,
    isdn: null,
    author: null,
  };

  handleClick = () => {
    // let navigate = useNavigate();
      const {
          name, year, author, isdn
      } = this.state

      axios.post('/books/', {
          name: name,
          year: year,
          author: author,
          isbn: isdn,
      }).then((response) => {
          console.log(response)
          this.props.navigate("/")
      }, (error) => {
          console.log(error)
      });
      console.log(name,year, author, isdn)
  };

  handleNameChange = (e) => {
      console.log(e)
    this.setState({
      name: e.target.value,
    });
  };

  handleAuthorChange = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  handleYearChange = (e) => {
    this.setState({
      year: e.target.value,
    });
  };

  handleIsdnChange = (e) => {
    this.setState({
      isdn: e.target.value,
    });
  };

  onlyNumberKey = (evt) => {
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }

  render() {
      const {
        handleNameChange,
        handleAuthorChange,
        handleYearChange,
        handleIsdnChange,
        onlyNumberKey,
      } = this;
    return (
      <div>
        <StyledTextContainer>
          <div>
            <StyledTextField
              required
              id="Name"
              label="name of book"
              onChange={(e) => handleNameChange(e)}
            />
            <StyledTextField
              required
              id="Author"
              label="name of author"
              onChange={(e) => handleAuthorChange(e)}
            />
            <StyledTextField
              required
              id="IDSN"
              label="ISDN"
              isnumericstring="true"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onKeyUp={(e) => onlyNumberKey(e)}
              onChange={(e) => handleIsdnChange(e)}
            />
            <StyledTextField
              required
              id="Year"
              label="year published"
              onKeyUp={(e) => onlyNumberKey(e)}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              isnumericstring="true"
              onChange={(e) => handleYearChange(e)}
            />
          </div>
          <Button
            variant="contained"
            onClick={() => {
              this.handleClick();
            }}
          >
            Submit
          </Button>
        </StyledTextContainer>
      </div>
    );
  }
}


export default withRouter(Create);