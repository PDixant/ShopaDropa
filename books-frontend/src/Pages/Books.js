import React, {Component} from 'react';
import axios from "axios";
import BookContainer from './../Components/BooksContainer.js'
import styled from 'styled-components'
const BookShelf = styled.div`
display: flex;
flex-wrap: wrap;
Flex-direction: row;
alignItems: center;
justify-content:space-around;
margin: 100px
`

class Books extends Component {
  state = {
    data: null,
  };



  componentDidMount() {
    axios.get(`/books/`).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
      const {
          data
      } = this.state
      console.log("object is here", data)
    return (
    
    <div>
    <BookShelf>
    {data && (
        data.map( e => {
            return(
            <BookContainer
              key={e.id}
              name={e.name}
              author={e.author}
              year={e.year}
              isbn={e.isbn}
              id={e.id}
            />
        )})
    )}
    </BookShelf>
    </div>
    
    )
}
}

export default Books;