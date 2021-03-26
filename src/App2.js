import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';

class App extends Component {
  state = {
    books: [],
    value: ""
  };
  render() {
    const {books} = this.state
    console.log(books);
    return (
      <div>
        {books.map(book => <Movie id={this.link} title={this.title}/>)}
      </div>
    );
  }



  
getSearchBook = async () => { 
  const ID_KEY = 'wZnFOgHBSbbrH5kOVxt5'; 
  const SECRET_KEY = 'tfqc6WsyUb'; 
  const search = this.state.value; 
  try { if (search === "") { this.setState({books: []}) } 
  else { const {data: { items }} = await axios.get('/api/v1/search/book.json',
  { params:{ query: search}, 
  headers: { 'X-Naver-Client-Id': ID_KEY, 'X-Naver-Client-Secret': SECRET_KEY } }); 
  this.setState({books: items}); } } 
  catch (error) { console.log(error); } 
};


  componentDidMount(){
   this.getSearchBook();
  }
}
  
export default App;