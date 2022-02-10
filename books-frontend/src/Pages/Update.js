import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "./../Components/withRouter.js";

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
`;

const StyledTextField = styled(TextField)`
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

class Update extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const path = window.location.pathname;
    const id = path.slice(path.lastIndexOf("/"));

    axios
      .get(`/books${id}`)
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      })
  }

  handleClick = () => {
    // let navigate = useNavigate();
    const { data } = this.state;
    console.log(data.name);
    axios
      .put(`/books/${data.id}`, {
        name: data.name,
        author: data.author,
        year: data.year,
        isbn: data.isbn,
      })
      .then(
        (res) => {
          this.props.navigate("/");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  handleNameChange = (e) => {
      const{
          data
      } = this.state
    data.name = e.target.value
    this.setState({
      data,
    });
  };

  handleAuthorChange = (e) => {
      const { data } = this.state;
      data.author = e.target.value;
    this.setState({
      data,
    });
  };

  handleYearChange = (e) => {
    const { data } = this.state;
    data.year = e.target.value;
    this.setState({
      data,
    });
  };

  handleIsdnChange = (e) => {
    const { data } = this.state;
    data.isdn = e.target.value;
    this.setState({
      data,
    });
  };

  onlyNumberKey = (evt) => {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
  };

  render() {
    const {
      handleNameChange,
      handleAuthorChange,
      handleYearChange,
      handleIsdnChange,
      onlyNumberKey,
    } = this;

    const { data } = this.state;
    if (data == null) return <div />;
    return (
      <div>
        <StyledTextContainer>
          <div>
            <StyledTextField
              required
              id="name"
              defaultValue={data.name}
              label={"name"}
              onChange={(e) => handleNameChange(e)}
            />
            <StyledTextField
              required
              id="author"
              label="author"
              defaultValue={data.author}
              onChange={(e) => handleAuthorChange(e)}
            />
            <StyledTextField
              required
              id="ISDN"
              label="ISDN"
              defaultValue={data.isbn}
              isnumericstring="true"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onKeyUp={(e) => onlyNumberKey(e)}
              onChange={(e) => handleIsdnChange(e)}
            />
            <StyledTextField
              required
              id="Year"
              label="Year"
              defaultValue={data.year}
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
            Update
          </Button>
        </StyledTextContainer>
      </div>
    );
  }
}

export default withRouter(Update);
