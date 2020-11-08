import React from "react"
import StarRatingComponent from 'react-star-rating-component';
import { Card } from 'react-bootstrap';
const ListMovies = (props) => {
    return <div className="listMovies">
        {props.movies.map (el => 
         <div className="ligne">
        <div className="cardd">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} style={{width:"18rem"}} />
  <Card.Body>
    <div className="text-card">
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.year}</Card.Text>
    <StarRatingComponent value={el.rating}/>
    </div>
    </Card.Body>
</Card>
</div>
</div>)}
    </div>
};
export default ListMovies;