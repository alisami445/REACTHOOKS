import React from "react"
import './App.css';
import "./component/Header";
import Header from "./component/Header";
import "./component/Modall"
import AdModa from "./component/Modall"
import ListMovies from "./component/ListMovies"
import { v4 as uuidv4 } from 'uuid';
class App extends React.Component {
  state={
    movies : [
      {
        id:uuidv4(),
        name:"Spongebob",
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/The_SpongeBob_Movie_Sponge_on_the_Run.jpg/220px-The_SpongeBob_Movie_Sponge_on_the_Run.jpg",
        rating:4,
        year:2015,
      },
      {
        id:uuidv4(),
        name:"Escape room",
        image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/escape-room-movie-poster-1570825680.jpg?crop=1xw:1xh;center,top&resize=480:*",
        rating:2,
        year:2011,
      },
      {
        id:uuidv4(),
        name:"Spongebob",
        image:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
        rating:3,
        year:2020,
      },
    ]

  };
  add = (newMovie) => {
    this.setState({
      movies : this.State.movies.concat({...newMovie, id : uuidv4()})
    })
  };
  render(){
  return (
    <>
    <Header/>
    <ListMovies movies={this.state.movies}/>
<AdModa addMovie={(M)=>this.add(M)}/>

    </>
  );
  }
}

export default App;
